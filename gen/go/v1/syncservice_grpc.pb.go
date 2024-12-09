// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.5.1
// - protoc             (unknown)
// source: v1/syncservice.proto

package v1

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.64.0 or later.
const _ = grpc.SupportPackageIsVersion9

const (
	BackrestSyncService_Sync_FullMethodName           = "/v1.BackrestSyncService/Sync"
	BackrestSyncService_GetRemoteRepos_FullMethodName = "/v1.BackrestSyncService/GetRemoteRepos"
)

// BackrestSyncServiceClient is the client API for BackrestSyncService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type BackrestSyncServiceClient interface {
	Sync(ctx context.Context, opts ...grpc.CallOption) (grpc.BidiStreamingClient[SyncStreamItem, SyncStreamItem], error)
	GetRemoteRepos(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*GetRemoteReposResponse, error)
}

type backrestSyncServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewBackrestSyncServiceClient(cc grpc.ClientConnInterface) BackrestSyncServiceClient {
	return &backrestSyncServiceClient{cc}
}

func (c *backrestSyncServiceClient) Sync(ctx context.Context, opts ...grpc.CallOption) (grpc.BidiStreamingClient[SyncStreamItem, SyncStreamItem], error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	stream, err := c.cc.NewStream(ctx, &BackrestSyncService_ServiceDesc.Streams[0], BackrestSyncService_Sync_FullMethodName, cOpts...)
	if err != nil {
		return nil, err
	}
	x := &grpc.GenericClientStream[SyncStreamItem, SyncStreamItem]{ClientStream: stream}
	return x, nil
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type BackrestSyncService_SyncClient = grpc.BidiStreamingClient[SyncStreamItem, SyncStreamItem]

func (c *backrestSyncServiceClient) GetRemoteRepos(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*GetRemoteReposResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(GetRemoteReposResponse)
	err := c.cc.Invoke(ctx, BackrestSyncService_GetRemoteRepos_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// BackrestSyncServiceServer is the server API for BackrestSyncService service.
// All implementations must embed UnimplementedBackrestSyncServiceServer
// for forward compatibility.
type BackrestSyncServiceServer interface {
	Sync(grpc.BidiStreamingServer[SyncStreamItem, SyncStreamItem]) error
	GetRemoteRepos(context.Context, *emptypb.Empty) (*GetRemoteReposResponse, error)
	mustEmbedUnimplementedBackrestSyncServiceServer()
}

// UnimplementedBackrestSyncServiceServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedBackrestSyncServiceServer struct{}

func (UnimplementedBackrestSyncServiceServer) Sync(grpc.BidiStreamingServer[SyncStreamItem, SyncStreamItem]) error {
	return status.Errorf(codes.Unimplemented, "method Sync not implemented")
}
func (UnimplementedBackrestSyncServiceServer) GetRemoteRepos(context.Context, *emptypb.Empty) (*GetRemoteReposResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetRemoteRepos not implemented")
}
func (UnimplementedBackrestSyncServiceServer) mustEmbedUnimplementedBackrestSyncServiceServer() {}
func (UnimplementedBackrestSyncServiceServer) testEmbeddedByValue()                             {}

// UnsafeBackrestSyncServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to BackrestSyncServiceServer will
// result in compilation errors.
type UnsafeBackrestSyncServiceServer interface {
	mustEmbedUnimplementedBackrestSyncServiceServer()
}

func RegisterBackrestSyncServiceServer(s grpc.ServiceRegistrar, srv BackrestSyncServiceServer) {
	// If the following call pancis, it indicates UnimplementedBackrestSyncServiceServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&BackrestSyncService_ServiceDesc, srv)
}

func _BackrestSyncService_Sync_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(BackrestSyncServiceServer).Sync(&grpc.GenericServerStream[SyncStreamItem, SyncStreamItem]{ServerStream: stream})
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type BackrestSyncService_SyncServer = grpc.BidiStreamingServer[SyncStreamItem, SyncStreamItem]

func _BackrestSyncService_GetRemoteRepos_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BackrestSyncServiceServer).GetRemoteRepos(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: BackrestSyncService_GetRemoteRepos_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BackrestSyncServiceServer).GetRemoteRepos(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

// BackrestSyncService_ServiceDesc is the grpc.ServiceDesc for BackrestSyncService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var BackrestSyncService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "v1.BackrestSyncService",
	HandlerType: (*BackrestSyncServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetRemoteRepos",
			Handler:    _BackrestSyncService_GetRemoteRepos_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "Sync",
			Handler:       _BackrestSyncService_Sync_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
	},
	Metadata: "v1/syncservice.proto",
}
