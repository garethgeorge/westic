package api

import (
	"bytes"
	"context"
	"encoding/hex"
	"errors"
	"fmt"
	"os"
	"path"
	"reflect"
	"time"

	"connectrpc.com/connect"
	"github.com/garethgeorge/backrest/gen/go/types"
	v1 "github.com/garethgeorge/backrest/gen/go/v1"
	"github.com/garethgeorge/backrest/gen/go/v1/v1connect"
	"github.com/garethgeorge/backrest/internal/config"
	"github.com/garethgeorge/backrest/internal/oplog"
	"github.com/garethgeorge/backrest/internal/oplog/indexutil"
	"github.com/garethgeorge/backrest/internal/orchestrator"
	"github.com/garethgeorge/backrest/internal/orchestrator/repo"
	"github.com/garethgeorge/backrest/internal/orchestrator/tasks"
	"github.com/garethgeorge/backrest/internal/protoutil"
	"github.com/garethgeorge/backrest/internal/resticinstaller"
	"github.com/garethgeorge/backrest/internal/rotatinglog"
	"github.com/garethgeorge/backrest/pkg/restic"
	"go.uber.org/zap"
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/types/known/emptypb"
)

type BackrestHandler struct {
	v1connect.UnimplementedBackrestHandler
	config       config.ConfigStore
	orchestrator *orchestrator.Orchestrator
	oplog        *oplog.OpLog
	logStore     *rotatinglog.RotatingLog
}

var _ v1connect.BackrestHandler = &BackrestHandler{}

func NewBackrestHandler(config config.ConfigStore, orchestrator *orchestrator.Orchestrator, oplog *oplog.OpLog, logStore *rotatinglog.RotatingLog) *BackrestHandler {
	s := &BackrestHandler{
		config:       config,
		orchestrator: orchestrator,
		oplog:        oplog,
		logStore:     logStore,
	}

	return s
}

// GetConfig implements GET /v1/config
func (s *BackrestHandler) GetConfig(ctx context.Context, req *connect.Request[emptypb.Empty]) (*connect.Response[v1.Config], error) {
	config, err := s.config.Get()
	if err != nil {
		return nil, fmt.Errorf("failed to get config: %w", err)
	}
	return connect.NewResponse(config), nil
}

// SetConfig implements POST /v1/config
func (s *BackrestHandler) SetConfig(ctx context.Context, req *connect.Request[v1.Config]) (*connect.Response[v1.Config], error) {
	existing, err := s.config.Get()
	if err != nil {
		return nil, fmt.Errorf("failed to check current config: %w", err)
	}

	// Compare and increment modno
	if existing.Modno != req.Msg.Modno {
		return nil, errors.New("config modno mismatch, reload and try again")
	}

	if err := config.ValidateConfig(req.Msg); err != nil {
		return nil, fmt.Errorf("validation error: %w", err)
	}

	req.Msg.Modno += 1

	if err := s.config.Update(req.Msg); err != nil {
		return nil, fmt.Errorf("failed to update config: %w", err)
	}

	newConfig, err := s.config.Get()
	if err != nil {
		return nil, fmt.Errorf("failed to get newly set config: %w", err)
	}
	if err := s.orchestrator.ApplyConfig(newConfig); err != nil {
		return nil, fmt.Errorf("failed to apply config: %w", err)
	}
	return connect.NewResponse(newConfig), nil
}

// AddRepo implements POST /v1/config/repo, it includes validation that the repo can be initialized.
func (s *BackrestHandler) AddRepo(ctx context.Context, req *connect.Request[v1.Repo]) (*connect.Response[v1.Config], error) {
	c, err := s.config.Get()
	if err != nil {
		return nil, fmt.Errorf("failed to get config: %w", err)
	}

	c = proto.Clone(c).(*v1.Config)
	c.Repos = append(c.Repos, req.Msg)

	if err := config.ValidateConfig(c); err != nil {
		return nil, fmt.Errorf("validation error: %w", err)
	}

	bin, err := resticinstaller.FindOrInstallResticBinary()
	if err != nil {
		return nil, fmt.Errorf("failed to find or install restic binary: %w", err)
	}

	r, err := repo.NewRepoOrchestrator(c, req.Msg, bin)
	if err != nil {
		return nil, fmt.Errorf("failed to configure repo: %w", err)
	}

	// use background context such that the init op can try to complete even if the connection is closed.
	if err := r.Init(context.Background()); err != nil {
		return nil, fmt.Errorf("failed to init repo: %w", err)
	}

	zap.L().Debug("updating config", zap.Int32("version", c.Version))
	if err := s.config.Update(c); err != nil {
		return nil, fmt.Errorf("failed to update config: %w", err)
	}

	zap.L().Debug("applying config", zap.Int32("version", c.Version))
	s.orchestrator.ApplyConfig(c)

	// index snapshots for the newly added repository.
	zap.L().Debug("scheduling index snapshots task")
	s.orchestrator.ScheduleTask(tasks.NewOneoffIndexSnapshotsTask(req.Msg.Id, time.Now()), tasks.TaskPriorityInteractive+tasks.TaskPriorityIndexSnapshots)

	zap.L().Debug("done add repo")
	return connect.NewResponse(c), nil
}

// ListSnapshots implements POST /v1/snapshots
func (s *BackrestHandler) ListSnapshots(ctx context.Context, req *connect.Request[v1.ListSnapshotsRequest]) (*connect.Response[v1.ResticSnapshotList], error) {
	query := req.Msg
	repo, err := s.orchestrator.GetRepoOrchestrator(query.RepoId)
	if err != nil {
		return nil, fmt.Errorf("failed to get repo: %w", err)
	}

	var snapshots []*restic.Snapshot
	if query.PlanId != "" {
		var plan *v1.Plan
		plan, err = s.orchestrator.GetPlan(query.PlanId)
		if err != nil {
			return nil, fmt.Errorf("failed to get plan %q: %w", query.PlanId, err)
		}
		snapshots, err = repo.SnapshotsForPlan(ctx, plan)
	} else {
		snapshots, err = repo.Snapshots(ctx)
	}

	if err != nil {
		return nil, fmt.Errorf("failed to list snapshots: %w", err)
	}

	// Transform the snapshots and return them.
	var rs []*v1.ResticSnapshot
	for _, snapshot := range snapshots {
		rs = append(rs, protoutil.SnapshotToProto(snapshot))
	}

	return connect.NewResponse(&v1.ResticSnapshotList{
		Snapshots: rs,
	}), nil
}

func (s *BackrestHandler) ListSnapshotFiles(ctx context.Context, req *connect.Request[v1.ListSnapshotFilesRequest]) (*connect.Response[v1.ListSnapshotFilesResponse], error) {
	query := req.Msg
	repo, err := s.orchestrator.GetRepoOrchestrator(query.RepoId)
	if err != nil {
		return nil, fmt.Errorf("failed to get repo: %w", err)
	}

	entries, err := repo.ListSnapshotFiles(ctx, query.SnapshotId, query.Path)
	if err != nil {
		return nil, fmt.Errorf("failed to list snapshot files: %w", err)
	}

	return connect.NewResponse(&v1.ListSnapshotFilesResponse{
		Path:    query.Path,
		Entries: entries,
	}), nil
}

// GetOperationEvents implements GET /v1/events/operations
func (s *BackrestHandler) GetOperationEvents(ctx context.Context, req *connect.Request[emptypb.Empty], resp *connect.ServerStream[v1.OperationEvent]) error {

	errChan := make(chan error, 1)
	events := make(chan *v1.OperationEvent, 100)

	callback := func(oldOp *v1.Operation, newOp *v1.Operation) {
		var event *v1.OperationEvent
		if oldOp == nil && newOp != nil {
			event = &v1.OperationEvent{
				Type:      v1.OperationEventType_EVENT_CREATED,
				Operation: newOp,
			}
		} else if oldOp != nil && newOp != nil {
			event = &v1.OperationEvent{
				Type:      v1.OperationEventType_EVENT_UPDATED,
				Operation: newOp,
			}
		} else if oldOp != nil && newOp == nil {
			event = &v1.OperationEvent{
				Type:      v1.OperationEventType_EVENT_DELETED,
				Operation: oldOp,
			}
		} else {
			zap.L().Error("Unknown event type")
			return
		}

		select {
		case events <- event:
		default:
			errChan <- errors.New("event buffer overflow, closing stream for client retry and catchup")
		}
	}
	s.oplog.Subscribe(&callback)
	defer s.oplog.Unsubscribe(&callback)

	for {
		select {
		case err := <-errChan:
			return err
		case <-ctx.Done():
			return nil
		case event := <-events:
			if err := resp.Send(event); err != nil {
				return fmt.Errorf("failed to write event: %w", err)
			}
		}
	}
}

func (s *BackrestHandler) GetOperations(ctx context.Context, req *connect.Request[v1.GetOperationsRequest]) (*connect.Response[v1.OperationList], error) {
	idCollector := indexutil.CollectAll()

	if req.Msg.LastN != 0 {
		idCollector = indexutil.CollectLastN(int(req.Msg.LastN))
	}
	q, err := opSelectorToQuery(req.Msg.Selector)
	if err != nil {
		return nil, err
	}

	var ops []*v1.Operation
	opCollector := func(op *v1.Operation) error {
		ops = append(ops, op)
		return nil
	}
	if !reflect.DeepEqual(q, oplog.Query{}) {
		err = s.oplog.ForEach(q, idCollector, opCollector)
	} else {
		err = s.oplog.ForAll(opCollector)
	}
	if err != nil {
		return nil, fmt.Errorf("failed to get operations: %w", err)
	}

	return connect.NewResponse(&v1.OperationList{
		Operations: ops,
	}), nil
}

func (s *BackrestHandler) IndexSnapshots(ctx context.Context, req *connect.Request[types.StringValue]) (*connect.Response[emptypb.Empty], error) {
	_, err := s.orchestrator.GetRepo(req.Msg.Value)
	if err != nil {
		return nil, fmt.Errorf("failed to get repo %q: %w", req.Msg.Value, err)
	}

	s.orchestrator.ScheduleTask(tasks.NewOneoffIndexSnapshotsTask(req.Msg.Value, time.Now()), tasks.TaskPriorityInteractive+tasks.TaskPriorityIndexSnapshots)

	return connect.NewResponse(&emptypb.Empty{}), nil
}

func (s *BackrestHandler) Backup(ctx context.Context, req *connect.Request[types.StringValue]) (*connect.Response[emptypb.Empty], error) {
	plan, err := s.orchestrator.GetPlan(req.Msg.Value)
	if err != nil {
		return nil, fmt.Errorf("failed to get plan %q: %w", req.Msg.Value, err)
	}
	wait := make(chan struct{})
	s.orchestrator.ScheduleTask(tasks.NewOneoffBackupTask(plan, time.Now()), tasks.TaskPriorityInteractive, func(e error) {
		err = e
		close(wait)
	})
	<-wait
	return connect.NewResponse(&emptypb.Empty{}), err
}

func (s *BackrestHandler) Forget(ctx context.Context, req *connect.Request[v1.ForgetRequest]) (*connect.Response[emptypb.Empty], error) {
	at := time.Now()
	_, err := s.orchestrator.GetPlan(req.Msg.PlanId)
	if err != nil {
		return nil, fmt.Errorf("failed to get plan %q: %w", req.Msg.PlanId, err)
	}

	if req.Msg.SnapshotId != "" && req.Msg.PlanId != "" && req.Msg.RepoId != "" {
		wait := make(chan struct{})
		s.orchestrator.ScheduleTask(
			tasks.NewOneoffForgetSnapshotTask(req.Msg.RepoId, req.Msg.PlanId, 0, at, req.Msg.SnapshotId),
			tasks.TaskPriorityInteractive+tasks.TaskPriorityForget, func(e error) {
				err = e
				close(wait)
			})
		<-wait
	} else if req.Msg.RepoId != "" && req.Msg.PlanId != "" {
		wait := make(chan struct{})
		s.orchestrator.ScheduleTask(
			tasks.NewOneoffForgetTask(req.Msg.RepoId, req.Msg.PlanId, 0, at),
			tasks.TaskPriorityInteractive+tasks.TaskPriorityForget, func(e error) {
				err = e
				close(wait)
			})
		<-wait
	} else {
		return nil, errors.New("must specify repoId and planId and (optionally) snapshotId")
	}

	if err != nil {
		return nil, err
	}
	return connect.NewResponse(&emptypb.Empty{}), nil
}

func (s *BackrestHandler) Prune(ctx context.Context, req *connect.Request[types.StringValue]) (*connect.Response[emptypb.Empty], error) {
	var err error
	wait := make(chan struct{})
	s.orchestrator.ScheduleTask(tasks.NewPruneTask(req.Msg.Value, tasks.PlanForSystemTasks, true), tasks.TaskPriorityInteractive+tasks.TaskPriorityPrune, func(e error) {
		err = e
		close(wait)
	})
	<-wait
	if err != nil {
		return nil, err
	}
	return connect.NewResponse(&emptypb.Empty{}), nil
}

func (s *BackrestHandler) Restore(ctx context.Context, req *connect.Request[v1.RestoreSnapshotRequest]) (*connect.Response[emptypb.Empty], error) {
	if req.Msg.Target == "" {
		req.Msg.Target = path.Join(os.Getenv("HOME"), "Downloads")
	}
	if req.Msg.Path == "" {
		req.Msg.Path = "/"
	}

	target := path.Join(req.Msg.Target, fmt.Sprintf("restic-restore-%v", time.Now().Format("2006-01-02T15-04-05")))
	_, err := os.Stat(target)
	if !errors.Is(err, os.ErrNotExist) {
		return nil, fmt.Errorf("restore target dir %q already exists", req.Msg.Target)
	}

	at := time.Now()

	flowID, err := tasks.FlowIDForSnapshotID(s.oplog, req.Msg.SnapshotId)
	if err != nil {
		return nil, fmt.Errorf("failed to get flow ID for snapshot %q: %w", req.Msg.SnapshotId, err)
	}
	s.orchestrator.ScheduleTask(tasks.NewOneoffRestoreTask(req.Msg.RepoId, req.Msg.PlanId, flowID, at, req.Msg.SnapshotId, req.Msg.Path, target), tasks.TaskPriorityInteractive+tasks.TaskPriorityDefault)

	return connect.NewResponse(&emptypb.Empty{}), nil
}

func (s *BackrestHandler) Unlock(ctx context.Context, req *connect.Request[types.StringValue]) (*connect.Response[emptypb.Empty], error) {
	repo, err := s.orchestrator.GetRepoOrchestrator(req.Msg.Value)
	if err != nil {
		return nil, fmt.Errorf("failed to get repo %q: %w", req.Msg.Value, err)
	}

	if err := repo.Unlock(context.Background()); err != nil {
		return nil, fmt.Errorf("failed to unlock repo %q: %w", req.Msg.Value, err)
	}

	return connect.NewResponse(&emptypb.Empty{}), nil
}

func (s *BackrestHandler) Stats(ctx context.Context, req *connect.Request[types.StringValue]) (*connect.Response[emptypb.Empty], error) {
	var err error
	wait := make(chan struct{})
	if err := s.orchestrator.ScheduleTask(tasks.NewStatsTask(req.Msg.Value, tasks.PlanForSystemTasks, true), tasks.TaskPriorityInteractive+tasks.TaskPriorityStats, func(e error) {
		err = e
		close(wait)
	}); err != nil {
		return nil, err
	}
	<-wait
	return connect.NewResponse(&emptypb.Empty{}), err
}

func (s *BackrestHandler) RunCommand(ctx context.Context, req *connect.Request[v1.RunCommandRequest], resp *connect.ServerStream[types.BytesValue]) error {
	repo, err := s.orchestrator.GetRepoOrchestrator(req.Msg.RepoId)
	if err != nil {
		return fmt.Errorf("failed to get repo %q: %w", req.Msg.RepoId, err)
	}

	ctx, cancel := context.WithCancel(ctx)

	outputs := make(chan []byte, 100)
	errChan := make(chan error, 1)
	go func() {
		start := time.Now()
		if err := repo.RunCommand(ctx, req.Msg.Command, func(output []byte) {
			outputs <- bytes.Clone(output)
		}); err != nil {
			errChan <- err
		}
		outputs <- []byte("took " + time.Since(start).String())
		cancel()
	}()

	ticker := time.NewTicker(100 * time.Millisecond)
	defer ticker.Stop()

	bufSize := 32 * 1024
	buf := make([]byte, 0, bufSize)

	flush := func() error {
		if len(buf) > 0 {
			if err := resp.Send(&types.BytesValue{Value: buf}); err != nil {
				return fmt.Errorf("failed to write output: %w", err)
			}
			buf = buf[:0]
		}
		return nil
	}

	for {
		select {
		case err := <-errChan:
			if err := flush(); err != nil {
				return err
			}
			return err
		case <-ctx.Done():
			return flush()
		case output := <-outputs:
			if len(output)+len(buf) > bufSize {
				flush()
			}
			if len(output) > bufSize {
				if err := resp.Send(&types.BytesValue{Value: output}); err != nil {
					return fmt.Errorf("failed to write output: %w", err)
				}
				continue
			}
			buf = append(buf, output...)
		case <-ticker.C:
			if len(buf) > 0 {
				flush()
			}
		}
	}
}

func (s *BackrestHandler) Cancel(ctx context.Context, req *connect.Request[types.Int64Value]) (*connect.Response[emptypb.Empty], error) {
	if err := s.orchestrator.CancelOperation(req.Msg.Value, v1.OperationStatus_STATUS_USER_CANCELLED); err != nil {
		return nil, err
	}

	return connect.NewResponse(&emptypb.Empty{}), nil
}

func (s *BackrestHandler) ClearHistory(ctx context.Context, req *connect.Request[v1.ClearHistoryRequest]) (*connect.Response[emptypb.Empty], error) {
	var err error
	var ids []int64

	opCollector := func(op *v1.Operation) error {
		if !req.Msg.OnlyFailed || op.Status == v1.OperationStatus_STATUS_ERROR {
			ids = append(ids, op.Id)
		}
		return nil
	}

	q, err := opSelectorToQuery(req.Msg.Selector)
	if err != nil {
		return nil, err
	}
	if !reflect.DeepEqual(q, oplog.Query{}) {
		err = s.oplog.ForEach(q, indexutil.CollectAll(), opCollector)
	} else {
		err = s.oplog.ForAll(opCollector)
	}
	if err != nil {
		return nil, fmt.Errorf("failed to get operations to delete: %w", err)
	}

	if err := s.oplog.Delete(ids...); err != nil {
		return nil, fmt.Errorf("failed to delete operations: %w", err)
	}

	return connect.NewResponse(&emptypb.Empty{}), err
}

func (s *BackrestHandler) GetLogs(ctx context.Context, req *connect.Request[v1.LogDataRequest]) (*connect.Response[types.BytesValue], error) {
	data, err := s.logStore.Read(req.Msg.GetRef())
	if err != nil {
		if errors.Is(err, rotatinglog.ErrFileNotFound) {
			return connect.NewResponse(&types.BytesValue{
				Value: []byte(fmt.Sprintf("file associated with log %v not found, it may have rotated out of the log history", req.Msg.GetRef())),
			}), nil
		}

		return nil, fmt.Errorf("get log data %v: %w", req.Msg.GetRef(), err)
	}
	return connect.NewResponse(&types.BytesValue{Value: data}), nil
}

func (s *BackrestHandler) GetDownloadURL(ctx context.Context, req *connect.Request[types.Int64Value]) (*connect.Response[types.StringValue], error) {
	op, err := s.oplog.Get(req.Msg.Value)
	if err != nil {
		return nil, fmt.Errorf("failed to get operation %v: %w", req.Msg.Value, err)
	}
	_, ok := op.Op.(*v1.Operation_OperationRestore)
	if !ok {
		return nil, fmt.Errorf("operation %v is not a restore operation", req.Msg.Value)
	}
	signature, err := signInt64(op.Id) // the signature authenticates the download URL. Note that the shared URL will be valid for any downloader.
	if err != nil {
		return nil, fmt.Errorf("failed to generate signature: %w", err)
	}
	return connect.NewResponse(&types.StringValue{
		Value: fmt.Sprintf("./download/%x-%s/", op.Id, hex.EncodeToString(signature)),
	}), nil
}

func (s *BackrestHandler) PathAutocomplete(ctx context.Context, path *connect.Request[types.StringValue]) (*connect.Response[types.StringList], error) {
	ents, err := os.ReadDir(path.Msg.Value)
	if errors.Is(err, os.ErrNotExist) {
		return connect.NewResponse(&types.StringList{}), nil
	} else if err != nil {
		return nil, err
	}

	var paths []string
	for _, ent := range ents {
		paths = append(paths, ent.Name())
	}

	return connect.NewResponse(&types.StringList{Values: paths}), nil
}

func opSelectorToQuery(sel *v1.OpSelector) (oplog.Query, error) {
	if sel == nil {
		return oplog.Query{}, errors.New("empty selector")
	}
	q := oplog.Query{
		RepoId:     sel.RepoId,
		PlanId:     sel.PlanId,
		SnapshotId: sel.SnapshotId,
		FlowId:     sel.FlowId,
	}
	if len(sel.Ids) > 0 && !reflect.DeepEqual(q, oplog.Query{}) {
		return oplog.Query{}, errors.New("cannot specify both query and ids")
	}
	q.Ids = sel.Ids
	return q, nil
}
