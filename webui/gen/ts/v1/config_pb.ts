// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file v1/config.proto (package v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_protobuf_empty } from "@bufbuild/protobuf/wkt";
import type { PublicKey } from "./crypto_pb";
import { file_v1_crypto } from "./crypto_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file v1/config.proto.
 */
export const file_v1_config: GenFile = /*@__PURE__*/
  fileDesc("Cg92MS9jb25maWcucHJvdG8SAnYxImYKCUh1YkNvbmZpZxItCglpbnN0YW5jZXMYASADKAsyGi52MS5IdWJDb25maWcuSW5zdGFuY2VJbmZvGioKDEluc3RhbmNlSW5mbxIKCgJpZBgBIAEoCRIOCgZzZWNyZXQYAiABKAkirAEKBkNvbmZpZxINCgVtb2RubxgBIAEoBRIPCgd2ZXJzaW9uGAYgASgFEhAKCGluc3RhbmNlGAIgASgJEhcKBXJlcG9zGAMgAygLMggudjEuUmVwbxIXCgVwbGFucxgEIAMoCzIILnYxLlBsYW4SFgoEYXV0aBgFIAEoCzIILnYxLkF1dGgSJgoJbXVsdGlob3N0GAcgASgLMg0udjEuTXVsdGlob3N0UgRzeW5jItcBCglNdWx0aWhvc3QSJwoLa25vd25faG9zdHMYASADKAsyEi52MS5NdWx0aWhvc3QuUGVlchIuChJhdXRob3JpemVkX2NsaWVudHMYAiADKAsyEi52MS5NdWx0aWhvc3QuUGVlchpxCgRQZWVyEhMKC2luc3RhbmNlX2lkGAEgASgJEiEKCnB1YmxpY19rZXkYAyABKAsyDS52MS5QdWJsaWNLZXkSGwoTcHVibGljX2tleV92ZXJpZmllZBgEIAEoCBIUCgxpbnN0YW5jZV91cmwYAiABKAkiswIKBFJlcG8SCgoCaWQYASABKAkSCwoDdXJpGAIgASgJEgwKBGd1aWQYCyABKAkSEAoIcGFzc3dvcmQYAyABKAkSCwoDZW52GAQgAygJEg0KBWZsYWdzGAUgAygJEiUKDHBydW5lX3BvbGljeRgGIAEoCzIPLnYxLlBydW5lUG9saWN5EiUKDGNoZWNrX3BvbGljeRgJIAEoCzIPLnYxLkNoZWNrUG9saWN5EhcKBWhvb2tzGAcgAygLMggudjEuSG9vaxITCgthdXRvX3VubG9jaxgIIAEoCBIpCg5jb21tYW5kX3ByZWZpeBgKIAEoCzIRLnYxLkNvbW1hbmRQcmVmaXgSLwoZYWxsb3dlZF9wZWVyX2luc3RhbmNlX2lkcxhkIAMoCVIMYWxsb3dlZFBlZXJzIoYCCgRQbGFuEgoKAmlkGAEgASgJEgwKBHJlcG8YAiABKAkSDQoFcGF0aHMYBCADKAkSEAoIZXhjbHVkZXMYBSADKAkSEQoJaWV4Y2x1ZGVzGAkgAygJEh4KCHNjaGVkdWxlGAwgASgLMgwudjEuU2NoZWR1bGUSJgoJcmV0ZW50aW9uGAcgASgLMhMudjEuUmV0ZW50aW9uUG9saWN5EhcKBWhvb2tzGAggAygLMggudjEuSG9vaxIiCgxiYWNrdXBfZmxhZ3MYCiADKAlSDGJhY2t1cF9mbGFncxIZChFza2lwX2lmX3VuY2hhbmdlZBgNIAEoCEoECAMQBEoECAYQB0oECAsQDCKKAgoNQ29tbWFuZFByZWZpeBIuCgdpb19uaWNlGAEgASgOMh0udjEuQ29tbWFuZFByZWZpeC5JT05pY2VMZXZlbBIwCghjcHVfbmljZRgCIAEoDjIeLnYxLkNvbW1hbmRQcmVmaXguQ1BVTmljZUxldmVsIlsKC0lPTmljZUxldmVsEg4KCklPX0RFRkFVTFQQABIWChJJT19CRVNUX0VGRk9SVF9MT1cQARIXChNJT19CRVNUX0VGRk9SVF9ISUdIEAISCwoHSU9fSURMRRADIjoKDENQVU5pY2VMZXZlbBIPCgtDUFVfREVGQVVMVBAAEgwKCENQVV9ISUdIEAESCwoHQ1BVX0xPVxACIoICCg9SZXRlbnRpb25Qb2xpY3kSHAoScG9saWN5X2tlZXBfbGFzdF9uGAogASgFSAASRgoUcG9saWN5X3RpbWVfYnVja2V0ZWQYCyABKAsyJi52MS5SZXRlbnRpb25Qb2xpY3kuVGltZUJ1Y2tldGVkQ291bnRzSAASGQoPcG9saWN5X2tlZXBfYWxsGAwgASgISAAaZAoSVGltZUJ1Y2tldGVkQ291bnRzEg4KBmhvdXJseRgBIAEoBRINCgVkYWlseRgCIAEoBRIOCgZ3ZWVrbHkYAyABKAUSDwoHbW9udGhseRgEIAEoBRIOCgZ5ZWFybHkYBSABKAVCCAoGcG9saWN5ImMKC1BydW5lUG9saWN5Eh4KCHNjaGVkdWxlGAIgASgLMgwudjEuU2NoZWR1bGUSGAoQbWF4X3VudXNlZF9ieXRlcxgDIAEoAxIaChJtYXhfdW51c2VkX3BlcmNlbnQYBCABKAEicwoLQ2hlY2tQb2xpY3kSHgoIc2NoZWR1bGUYASABKAsyDC52MS5TY2hlZHVsZRIYCg5zdHJ1Y3R1cmVfb25seRhkIAEoCEgAEiIKGHJlYWRfZGF0YV9zdWJzZXRfcGVyY2VudBhlIAEoAUgAQgYKBG1vZGUi6wEKCFNjaGVkdWxlEhIKCGRpc2FibGVkGAEgASgISAASDgoEY3JvbhgCIAEoCUgAEhoKEG1heEZyZXF1ZW5jeURheXMYAyABKAVIABIbChFtYXhGcmVxdWVuY3lIb3VycxgEIAEoBUgAEiEKBWNsb2NrGAUgASgOMhIudjEuU2NoZWR1bGUuQ2xvY2siUwoFQ2xvY2sSEQoNQ0xPQ0tfREVGQVVMVBAAEg8KC0NMT0NLX0xPQ0FMEAESDQoJQ0xPQ0tfVVRDEAISFwoTQ0xPQ0tfTEFTVF9SVU5fVElNRRADQgoKCHNjaGVkdWxlIqULCgRIb29rEiYKCmNvbmRpdGlvbnMYASADKA4yEi52MS5Ib29rLkNvbmRpdGlvbhIiCghvbl9lcnJvchgCIAEoDjIQLnYxLkhvb2suT25FcnJvchIqCg5hY3Rpb25fY29tbWFuZBhkIAEoCzIQLnYxLkhvb2suQ29tbWFuZEgAEioKDmFjdGlvbl93ZWJob29rGGUgASgLMhAudjEuSG9vay5XZWJob29rSAASKgoOYWN0aW9uX2Rpc2NvcmQYZiABKAsyEC52MS5Ib29rLkRpc2NvcmRIABIoCg1hY3Rpb25fZ290aWZ5GGcgASgLMg8udjEuSG9vay5Hb3RpZnlIABImCgxhY3Rpb25fc2xhY2sYaCABKAsyDi52MS5Ib29rLlNsYWNrSAASLAoPYWN0aW9uX3Nob3V0cnJyGGkgASgLMhEudjEuSG9vay5TaG91dHJyckgAEjQKE2FjdGlvbl9oZWFsdGhjaGVja3MYaiABKAsyFS52MS5Ib29rLkhlYWx0aGNoZWNrc0gAGhoKB0NvbW1hbmQSDwoHY29tbWFuZBgBIAEoCRqDAQoHV2ViaG9vaxITCgt3ZWJob29rX3VybBgBIAEoCRInCgZtZXRob2QYAiABKA4yFy52MS5Ib29rLldlYmhvb2suTWV0aG9kEhAKCHRlbXBsYXRlGGQgASgJIigKBk1ldGhvZBILCgdVTktOT1dOEAASBwoDR0VUEAESCAoEUE9TVBACGjAKB0Rpc2NvcmQSEwoLd2ViaG9va191cmwYASABKAkSEAoIdGVtcGxhdGUYAiABKAkaUwoGR290aWZ5EhAKCGJhc2VfdXJsGAEgASgJEg0KBXRva2VuGAMgASgJEhAKCHRlbXBsYXRlGGQgASgJEhYKDnRpdGxlX3RlbXBsYXRlGGUgASgJGi4KBVNsYWNrEhMKC3dlYmhvb2tfdXJsGAEgASgJEhAKCHRlbXBsYXRlGAIgASgJGjIKCFNob3V0cnJyEhQKDHNob3V0cnJyX3VybBgBIAEoCRIQCgh0ZW1wbGF0ZRgCIAEoCRo1CgxIZWFsdGhjaGVja3MSEwoLd2ViaG9va191cmwYASABKAkSEAoIdGVtcGxhdGUYAiABKAkinAMKCUNvbmRpdGlvbhIVChFDT05ESVRJT05fVU5LTk9XThAAEhcKE0NPTkRJVElPTl9BTllfRVJST1IQARIcChhDT05ESVRJT05fU05BUFNIT1RfU1RBUlQQAhIaChZDT05ESVRJT05fU05BUFNIT1RfRU5EEAMSHAoYQ09ORElUSU9OX1NOQVBTSE9UX0VSUk9SEAQSHgoaQ09ORElUSU9OX1NOQVBTSE9UX1dBUk5JTkcQBRIeChpDT05ESVRJT05fU05BUFNIT1RfU1VDQ0VTUxAGEh4KGkNPTkRJVElPTl9TTkFQU0hPVF9TS0lQUEVEEAcSGQoVQ09ORElUSU9OX1BSVU5FX1NUQVJUEGQSGQoVQ09ORElUSU9OX1BSVU5FX0VSUk9SEGUSGwoXQ09ORElUSU9OX1BSVU5FX1NVQ0NFU1MQZhIaChVDT05ESVRJT05fQ0hFQ0tfU1RBUlQQyAESGgoVQ09ORElUSU9OX0NIRUNLX0VSUk9SEMkBEhwKF0NPTkRJVElPTl9DSEVDS19TVUNDRVNTEMoBIqkBCgdPbkVycm9yEhMKD09OX0VSUk9SX0lHTk9SRRAAEhMKD09OX0VSUk9SX0NBTkNFTBABEhIKDk9OX0VSUk9SX0ZBVEFMEAISGgoWT05fRVJST1JfUkVUUllfMU1JTlVURRBkEhwKGE9OX0VSUk9SX1JFVFJZXzEwTUlOVVRFUxBlEiYKIk9OX0VSUk9SX1JFVFJZX0VYUE9ORU5USUFMX0JBQ0tPRkYQZ0IICgZhY3Rpb24iMQoEQXV0aBIQCghkaXNhYmxlZBgBIAEoCBIXCgV1c2VycxgCIAMoCzIILnYxLlVzZXIiOwoEVXNlchIMCgRuYW1lGAEgASgJEhkKD3Bhc3N3b3JkX2JjcnlwdBgCIAEoCUgAQgoKCHBhc3N3b3JkQixaKmdpdGh1Yi5jb20vZ2FyZXRoZ2VvcmdlL2JhY2tyZXN0L2dlbi9nby92MWIGcHJvdG8z", [file_google_protobuf_empty, file_v1_crypto]);

/**
 * @generated from message v1.HubConfig
 */
export type HubConfig = Message<"v1.HubConfig"> & {
  /**
   * @generated from field: repeated v1.HubConfig.InstanceInfo instances = 1;
   */
  instances: HubConfig_InstanceInfo[];
};

/**
 * Describes the message v1.HubConfig.
 * Use `create(HubConfigSchema)` to create a new message.
 */
export const HubConfigSchema: GenMessage<HubConfig> = /*@__PURE__*/
  messageDesc(file_v1_config, 0);

/**
 * @generated from message v1.HubConfig.InstanceInfo
 */
export type HubConfig_InstanceInfo = Message<"v1.HubConfig.InstanceInfo"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * secret used to authenticate with the hub.
   *
   * @generated from field: string secret = 2;
   */
  secret: string;
};

/**
 * Describes the message v1.HubConfig.InstanceInfo.
 * Use `create(HubConfig_InstanceInfoSchema)` to create a new message.
 */
export const HubConfig_InstanceInfoSchema: GenMessage<HubConfig_InstanceInfo> = /*@__PURE__*/
  messageDesc(file_v1_config, 0, 0);

/**
 * Config is the top level config object for restic UI.
 *
 * @generated from message v1.Config
 */
export type Config = Message<"v1.Config"> & {
  /**
   * modification number, used for read-modify-write consistency in the UI. Incremented on every write.
   *
   * @generated from field: int32 modno = 1;
   */
  modno: number;

  /**
   * version of the config file format. Used to determine when to run migrations.
   *
   * @generated from field: int32 version = 6;
   */
  version: number;

  /**
   * The instance name for the Backrest installation. 
   * This identifies backups created by this instance and is displayed in the UI. 
   *
   * @generated from field: string instance = 2;
   */
  instance: string;

  /**
   * @generated from field: repeated v1.Repo repos = 3;
   */
  repos: Repo[];

  /**
   * @generated from field: repeated v1.Plan plans = 4;
   */
  plans: Plan[];

  /**
   * @generated from field: v1.Auth auth = 5;
   */
  auth?: Auth;

  /**
   * @generated from field: v1.Multihost multihost = 7 [json_name = "sync"];
   */
  multihost?: Multihost;
};

/**
 * Describes the message v1.Config.
 * Use `create(ConfigSchema)` to create a new message.
 */
export const ConfigSchema: GenMessage<Config> = /*@__PURE__*/
  messageDesc(file_v1_config, 1);

/**
 * @generated from message v1.Multihost
 */
export type Multihost = Message<"v1.Multihost"> & {
  /**
   * @generated from field: repeated v1.Multihost.Peer known_hosts = 1;
   */
  knownHosts: Multihost_Peer[];

  /**
   * @generated from field: repeated v1.Multihost.Peer authorized_clients = 2;
   */
  authorizedClients: Multihost_Peer[];
};

/**
 * Describes the message v1.Multihost.
 * Use `create(MultihostSchema)` to create a new message.
 */
export const MultihostSchema: GenMessage<Multihost> = /*@__PURE__*/
  messageDesc(file_v1_config, 2);

/**
 * @generated from message v1.Multihost.Peer
 */
export type Multihost_Peer = Message<"v1.Multihost.Peer"> & {
  /**
   * instance ID of the peer.
   *
   * @generated from field: string instance_id = 1;
   */
  instanceId: string;

  /**
   * public key of the peer. If changed, the peer must re-verify the public key.
   *
   * @generated from field: v1.PublicKey public_key = 3;
   */
  publicKey?: PublicKey;

  /**
   * whether the public key is verified. This must be set for a host to authenticate a client. Clients implicitly validate the first key they see on initial connection.
   *
   * @generated from field: bool public_key_verified = 4;
   */
  publicKeyVerified: boolean;

  /**
   * Known host only fields
   *
   * instance URL, required for a known host. Otherwise meaningless.
   *
   * @generated from field: string instance_url = 2;
   */
  instanceUrl: string;
};

/**
 * Describes the message v1.Multihost.Peer.
 * Use `create(Multihost_PeerSchema)` to create a new message.
 */
export const Multihost_PeerSchema: GenMessage<Multihost_Peer> = /*@__PURE__*/
  messageDesc(file_v1_config, 2, 0);

/**
 * @generated from message v1.Repo
 */
export type Repo = Message<"v1.Repo"> & {
  /**
   * unique but human readable ID for this repo.
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * URI of the repo.
   *
   * @generated from field: string uri = 2;
   */
  uri: string;

  /**
   * a globally unique ID for this repo. Should be derived as the 'id' field in `restic cat config --json`.
   *
   * @generated from field: string guid = 11;
   */
  guid: string;

  /**
   * plaintext password
   *
   * @generated from field: string password = 3;
   */
  password: string;

  /**
   * extra environment variables to set for restic.
   *
   * @generated from field: repeated string env = 4;
   */
  env: string[];

  /**
   * extra flags set on the restic command.
   *
   * @generated from field: repeated string flags = 5;
   */
  flags: string[];

  /**
   * policy for when to run prune.
   *
   * @generated from field: v1.PrunePolicy prune_policy = 6;
   */
  prunePolicy?: PrunePolicy;

  /**
   * policy for when to run check.
   *
   * @generated from field: v1.CheckPolicy check_policy = 9;
   */
  checkPolicy?: CheckPolicy;

  /**
   * hooks to run on events for this repo.
   *
   * @generated from field: repeated v1.Hook hooks = 7;
   */
  hooks: Hook[];

  /**
   * automatically unlock the repo when needed.
   *
   * @generated from field: bool auto_unlock = 8;
   */
  autoUnlock: boolean;

  /**
   * modifiers for the restic commands
   *
   * @generated from field: v1.CommandPrefix command_prefix = 10;
   */
  commandPrefix?: CommandPrefix;

  /**
   * list of peer instance IDs allowed to access this repo.
   *
   * @generated from field: repeated string allowed_peer_instance_ids = 100 [json_name = "allowedPeers"];
   */
  allowedPeerInstanceIds: string[];
};

/**
 * Describes the message v1.Repo.
 * Use `create(RepoSchema)` to create a new message.
 */
export const RepoSchema: GenMessage<Repo> = /*@__PURE__*/
  messageDesc(file_v1_config, 3);

/**
 * @generated from message v1.Plan
 */
export type Plan = Message<"v1.Plan"> & {
  /**
   * unique but human readable ID for this plan.
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * ID of the repo to use.
   *
   * @generated from field: string repo = 2;
   */
  repo: string;

  /**
   * paths to include in the backup.
   *
   * @generated from field: repeated string paths = 4;
   */
  paths: string[];

  /**
   * glob patterns to exclude.
   *
   * @generated from field: repeated string excludes = 5;
   */
  excludes: string[];

  /**
   * case insensitive glob patterns to exclude.
   *
   * @generated from field: repeated string iexcludes = 9;
   */
  iexcludes: string[];

  /**
   * schedule for the backup.
   *
   * @generated from field: v1.Schedule schedule = 12;
   */
  schedule?: Schedule;

  /**
   * retention policy for snapshots.
   *
   * @generated from field: v1.RetentionPolicy retention = 7;
   */
  retention?: RetentionPolicy;

  /**
   * hooks to run on events for this plan.
   *
   * @generated from field: repeated v1.Hook hooks = 8;
   */
  hooks: Hook[];

  /**
   * extra flags to set when running a backup command.
   *
   * @generated from field: repeated string backup_flags = 10 [json_name = "backup_flags"];
   */
  backupFlags: string[];

  /**
   * skip the backup if no changes are detected.
   *
   * @generated from field: bool skip_if_unchanged = 13;
   */
  skipIfUnchanged: boolean;
};

/**
 * Describes the message v1.Plan.
 * Use `create(PlanSchema)` to create a new message.
 */
export const PlanSchema: GenMessage<Plan> = /*@__PURE__*/
  messageDesc(file_v1_config, 4);

/**
 * @generated from message v1.CommandPrefix
 */
export type CommandPrefix = Message<"v1.CommandPrefix"> & {
  /**
   * ionice level to set.
   *
   * @generated from field: v1.CommandPrefix.IONiceLevel io_nice = 1;
   */
  ioNice: CommandPrefix_IONiceLevel;

  /**
   * nice level to set.
   *
   * @generated from field: v1.CommandPrefix.CPUNiceLevel cpu_nice = 2;
   */
  cpuNice: CommandPrefix_CPUNiceLevel;
};

/**
 * Describes the message v1.CommandPrefix.
 * Use `create(CommandPrefixSchema)` to create a new message.
 */
export const CommandPrefixSchema: GenMessage<CommandPrefix> = /*@__PURE__*/
  messageDesc(file_v1_config, 5);

/**
 * @generated from enum v1.CommandPrefix.IONiceLevel
 */
export enum CommandPrefix_IONiceLevel {
  /**
   * @generated from enum value: IO_DEFAULT = 0;
   */
  IO_DEFAULT = 0,

  /**
   * @generated from enum value: IO_BEST_EFFORT_LOW = 1;
   */
  IO_BEST_EFFORT_LOW = 1,

  /**
   * @generated from enum value: IO_BEST_EFFORT_HIGH = 2;
   */
  IO_BEST_EFFORT_HIGH = 2,

  /**
   * @generated from enum value: IO_IDLE = 3;
   */
  IO_IDLE = 3,
}

/**
 * Describes the enum v1.CommandPrefix.IONiceLevel.
 */
export const CommandPrefix_IONiceLevelSchema: GenEnum<CommandPrefix_IONiceLevel> = /*@__PURE__*/
  enumDesc(file_v1_config, 5, 0);

/**
 * @generated from enum v1.CommandPrefix.CPUNiceLevel
 */
export enum CommandPrefix_CPUNiceLevel {
  /**
   * @generated from enum value: CPU_DEFAULT = 0;
   */
  CPU_DEFAULT = 0,

  /**
   * @generated from enum value: CPU_HIGH = 1;
   */
  CPU_HIGH = 1,

  /**
   * @generated from enum value: CPU_LOW = 2;
   */
  CPU_LOW = 2,
}

/**
 * Describes the enum v1.CommandPrefix.CPUNiceLevel.
 */
export const CommandPrefix_CPUNiceLevelSchema: GenEnum<CommandPrefix_CPUNiceLevel> = /*@__PURE__*/
  enumDesc(file_v1_config, 5, 1);

/**
 * @generated from message v1.RetentionPolicy
 */
export type RetentionPolicy = Message<"v1.RetentionPolicy"> & {
  /**
   * @generated from oneof v1.RetentionPolicy.policy
   */
  policy: {
    /**
     * @generated from field: int32 policy_keep_last_n = 10;
     */
    value: number;
    case: "policyKeepLastN";
  } | {
    /**
     * @generated from field: v1.RetentionPolicy.TimeBucketedCounts policy_time_bucketed = 11;
     */
    value: RetentionPolicy_TimeBucketedCounts;
    case: "policyTimeBucketed";
  } | {
    /**
     * @generated from field: bool policy_keep_all = 12;
     */
    value: boolean;
    case: "policyKeepAll";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message v1.RetentionPolicy.
 * Use `create(RetentionPolicySchema)` to create a new message.
 */
export const RetentionPolicySchema: GenMessage<RetentionPolicy> = /*@__PURE__*/
  messageDesc(file_v1_config, 6);

/**
 * @generated from message v1.RetentionPolicy.TimeBucketedCounts
 */
export type RetentionPolicy_TimeBucketedCounts = Message<"v1.RetentionPolicy.TimeBucketedCounts"> & {
  /**
   * keep the last n hourly snapshots.
   *
   * @generated from field: int32 hourly = 1;
   */
  hourly: number;

  /**
   * keep the last n daily snapshots.
   *
   * @generated from field: int32 daily = 2;
   */
  daily: number;

  /**
   * keep the last n weekly snapshots.
   *
   * @generated from field: int32 weekly = 3;
   */
  weekly: number;

  /**
   * keep the last n monthly snapshots.
   *
   * @generated from field: int32 monthly = 4;
   */
  monthly: number;

  /**
   * keep the last n yearly snapshots.
   *
   * @generated from field: int32 yearly = 5;
   */
  yearly: number;
};

/**
 * Describes the message v1.RetentionPolicy.TimeBucketedCounts.
 * Use `create(RetentionPolicy_TimeBucketedCountsSchema)` to create a new message.
 */
export const RetentionPolicy_TimeBucketedCountsSchema: GenMessage<RetentionPolicy_TimeBucketedCounts> = /*@__PURE__*/
  messageDesc(file_v1_config, 6, 0);

/**
 * @generated from message v1.PrunePolicy
 */
export type PrunePolicy = Message<"v1.PrunePolicy"> & {
  /**
   * @generated from field: v1.Schedule schedule = 2;
   */
  schedule?: Schedule;

  /**
   * max unused bytes before running prune.
   *
   * @generated from field: int64 max_unused_bytes = 3;
   */
  maxUnusedBytes: bigint;

  /**
   * max unused percent before running prune.
   *
   * @generated from field: double max_unused_percent = 4;
   */
  maxUnusedPercent: number;
};

/**
 * Describes the message v1.PrunePolicy.
 * Use `create(PrunePolicySchema)` to create a new message.
 */
export const PrunePolicySchema: GenMessage<PrunePolicy> = /*@__PURE__*/
  messageDesc(file_v1_config, 7);

/**
 * @generated from message v1.CheckPolicy
 */
export type CheckPolicy = Message<"v1.CheckPolicy"> & {
  /**
   * @generated from field: v1.Schedule schedule = 1;
   */
  schedule?: Schedule;

  /**
   * @generated from oneof v1.CheckPolicy.mode
   */
  mode: {
    /**
     * only check the structure of the repo. No pack data is read.
     *
     * @generated from field: bool structure_only = 100;
     */
    value: boolean;
    case: "structureOnly";
  } | {
    /**
     * check a percentage of pack data.
     *
     * @generated from field: double read_data_subset_percent = 101;
     */
    value: number;
    case: "readDataSubsetPercent";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message v1.CheckPolicy.
 * Use `create(CheckPolicySchema)` to create a new message.
 */
export const CheckPolicySchema: GenMessage<CheckPolicy> = /*@__PURE__*/
  messageDesc(file_v1_config, 8);

/**
 * @generated from message v1.Schedule
 */
export type Schedule = Message<"v1.Schedule"> & {
  /**
   * @generated from oneof v1.Schedule.schedule
   */
  schedule: {
    /**
     * disable the schedule.
     *
     * @generated from field: bool disabled = 1;
     */
    value: boolean;
    case: "disabled";
  } | {
    /**
     * cron expression describing the schedule.
     *
     * @generated from field: string cron = 2;
     */
    value: string;
    case: "cron";
  } | {
    /**
     * max frequency of runs in days.
     *
     * @generated from field: int32 maxFrequencyDays = 3;
     */
    value: number;
    case: "maxFrequencyDays";
  } | {
    /**
     * max frequency of runs in hours.
     *
     * @generated from field: int32 maxFrequencyHours = 4;
     */
    value: number;
    case: "maxFrequencyHours";
  } | { case: undefined; value?: undefined };

  /**
   * clock to use for scheduling.
   *
   * @generated from field: v1.Schedule.Clock clock = 5;
   */
  clock: Schedule_Clock;
};

/**
 * Describes the message v1.Schedule.
 * Use `create(ScheduleSchema)` to create a new message.
 */
export const ScheduleSchema: GenMessage<Schedule> = /*@__PURE__*/
  messageDesc(file_v1_config, 9);

/**
 * @generated from enum v1.Schedule.Clock
 */
export enum Schedule_Clock {
  /**
   * same as CLOCK_LOCAL
   *
   * @generated from enum value: CLOCK_DEFAULT = 0;
   */
  DEFAULT = 0,

  /**
   * @generated from enum value: CLOCK_LOCAL = 1;
   */
  LOCAL = 1,

  /**
   * @generated from enum value: CLOCK_UTC = 2;
   */
  UTC = 2,

  /**
   * @generated from enum value: CLOCK_LAST_RUN_TIME = 3;
   */
  LAST_RUN_TIME = 3,
}

/**
 * Describes the enum v1.Schedule.Clock.
 */
export const Schedule_ClockSchema: GenEnum<Schedule_Clock> = /*@__PURE__*/
  enumDesc(file_v1_config, 9, 0);

/**
 * @generated from message v1.Hook
 */
export type Hook = Message<"v1.Hook"> & {
  /**
   * @generated from field: repeated v1.Hook.Condition conditions = 1;
   */
  conditions: Hook_Condition[];

  /**
   * @generated from field: v1.Hook.OnError on_error = 2;
   */
  onError: Hook_OnError;

  /**
   * @generated from oneof v1.Hook.action
   */
  action: {
    /**
     * @generated from field: v1.Hook.Command action_command = 100;
     */
    value: Hook_Command;
    case: "actionCommand";
  } | {
    /**
     * @generated from field: v1.Hook.Webhook action_webhook = 101;
     */
    value: Hook_Webhook;
    case: "actionWebhook";
  } | {
    /**
     * @generated from field: v1.Hook.Discord action_discord = 102;
     */
    value: Hook_Discord;
    case: "actionDiscord";
  } | {
    /**
     * @generated from field: v1.Hook.Gotify action_gotify = 103;
     */
    value: Hook_Gotify;
    case: "actionGotify";
  } | {
    /**
     * @generated from field: v1.Hook.Slack action_slack = 104;
     */
    value: Hook_Slack;
    case: "actionSlack";
  } | {
    /**
     * @generated from field: v1.Hook.Shoutrrr action_shoutrrr = 105;
     */
    value: Hook_Shoutrrr;
    case: "actionShoutrrr";
  } | {
    /**
     * @generated from field: v1.Hook.Healthchecks action_healthchecks = 106;
     */
    value: Hook_Healthchecks;
    case: "actionHealthchecks";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message v1.Hook.
 * Use `create(HookSchema)` to create a new message.
 */
export const HookSchema: GenMessage<Hook> = /*@__PURE__*/
  messageDesc(file_v1_config, 10);

/**
 * @generated from message v1.Hook.Command
 */
export type Hook_Command = Message<"v1.Hook.Command"> & {
  /**
   * @generated from field: string command = 1;
   */
  command: string;
};

/**
 * Describes the message v1.Hook.Command.
 * Use `create(Hook_CommandSchema)` to create a new message.
 */
export const Hook_CommandSchema: GenMessage<Hook_Command> = /*@__PURE__*/
  messageDesc(file_v1_config, 10, 0);

/**
 * @generated from message v1.Hook.Webhook
 */
export type Hook_Webhook = Message<"v1.Hook.Webhook"> & {
  /**
   * @generated from field: string webhook_url = 1;
   */
  webhookUrl: string;

  /**
   * @generated from field: v1.Hook.Webhook.Method method = 2;
   */
  method: Hook_Webhook_Method;

  /**
   * @generated from field: string template = 100;
   */
  template: string;
};

/**
 * Describes the message v1.Hook.Webhook.
 * Use `create(Hook_WebhookSchema)` to create a new message.
 */
export const Hook_WebhookSchema: GenMessage<Hook_Webhook> = /*@__PURE__*/
  messageDesc(file_v1_config, 10, 1);

/**
 * @generated from enum v1.Hook.Webhook.Method
 */
export enum Hook_Webhook_Method {
  /**
   * @generated from enum value: UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * @generated from enum value: GET = 1;
   */
  GET = 1,

  /**
   * @generated from enum value: POST = 2;
   */
  POST = 2,
}

/**
 * Describes the enum v1.Hook.Webhook.Method.
 */
export const Hook_Webhook_MethodSchema: GenEnum<Hook_Webhook_Method> = /*@__PURE__*/
  enumDesc(file_v1_config, 10, 1, 0);

/**
 * @generated from message v1.Hook.Discord
 */
export type Hook_Discord = Message<"v1.Hook.Discord"> & {
  /**
   * @generated from field: string webhook_url = 1;
   */
  webhookUrl: string;

  /**
   * template for the webhook payload.
   *
   * @generated from field: string template = 2;
   */
  template: string;
};

/**
 * Describes the message v1.Hook.Discord.
 * Use `create(Hook_DiscordSchema)` to create a new message.
 */
export const Hook_DiscordSchema: GenMessage<Hook_Discord> = /*@__PURE__*/
  messageDesc(file_v1_config, 10, 2);

/**
 * @generated from message v1.Hook.Gotify
 */
export type Hook_Gotify = Message<"v1.Hook.Gotify"> & {
  /**
   * @generated from field: string base_url = 1;
   */
  baseUrl: string;

  /**
   * @generated from field: string token = 3;
   */
  token: string;

  /**
   * template for the webhook payload.
   *
   * @generated from field: string template = 100;
   */
  template: string;

  /**
   * template for the webhook title.
   *
   * @generated from field: string title_template = 101;
   */
  titleTemplate: string;
};

/**
 * Describes the message v1.Hook.Gotify.
 * Use `create(Hook_GotifySchema)` to create a new message.
 */
export const Hook_GotifySchema: GenMessage<Hook_Gotify> = /*@__PURE__*/
  messageDesc(file_v1_config, 10, 3);

/**
 * @generated from message v1.Hook.Slack
 */
export type Hook_Slack = Message<"v1.Hook.Slack"> & {
  /**
   * @generated from field: string webhook_url = 1;
   */
  webhookUrl: string;

  /**
   * template for the webhook payload.
   *
   * @generated from field: string template = 2;
   */
  template: string;
};

/**
 * Describes the message v1.Hook.Slack.
 * Use `create(Hook_SlackSchema)` to create a new message.
 */
export const Hook_SlackSchema: GenMessage<Hook_Slack> = /*@__PURE__*/
  messageDesc(file_v1_config, 10, 4);

/**
 * @generated from message v1.Hook.Shoutrrr
 */
export type Hook_Shoutrrr = Message<"v1.Hook.Shoutrrr"> & {
  /**
   * @generated from field: string shoutrrr_url = 1;
   */
  shoutrrrUrl: string;

  /**
   * @generated from field: string template = 2;
   */
  template: string;
};

/**
 * Describes the message v1.Hook.Shoutrrr.
 * Use `create(Hook_ShoutrrrSchema)` to create a new message.
 */
export const Hook_ShoutrrrSchema: GenMessage<Hook_Shoutrrr> = /*@__PURE__*/
  messageDesc(file_v1_config, 10, 5);

/**
 * @generated from message v1.Hook.Healthchecks
 */
export type Hook_Healthchecks = Message<"v1.Hook.Healthchecks"> & {
  /**
   * @generated from field: string webhook_url = 1;
   */
  webhookUrl: string;

  /**
   * @generated from field: string template = 2;
   */
  template: string;
};

/**
 * Describes the message v1.Hook.Healthchecks.
 * Use `create(Hook_HealthchecksSchema)` to create a new message.
 */
export const Hook_HealthchecksSchema: GenMessage<Hook_Healthchecks> = /*@__PURE__*/
  messageDesc(file_v1_config, 10, 6);

/**
 * @generated from enum v1.Hook.Condition
 */
export enum Hook_Condition {
  /**
   * @generated from enum value: CONDITION_UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * error running any operation.
   *
   * @generated from enum value: CONDITION_ANY_ERROR = 1;
   */
  ANY_ERROR = 1,

  /**
   * backup started.
   *
   * @generated from enum value: CONDITION_SNAPSHOT_START = 2;
   */
  SNAPSHOT_START = 2,

  /**
   * backup completed (success or fail).
   *
   * @generated from enum value: CONDITION_SNAPSHOT_END = 3;
   */
  SNAPSHOT_END = 3,

  /**
   * snapshot failed.
   *
   * @generated from enum value: CONDITION_SNAPSHOT_ERROR = 4;
   */
  SNAPSHOT_ERROR = 4,

  /**
   * snapshot completed with warnings.
   *
   * @generated from enum value: CONDITION_SNAPSHOT_WARNING = 5;
   */
  SNAPSHOT_WARNING = 5,

  /**
   * snapshot succeeded.
   *
   * @generated from enum value: CONDITION_SNAPSHOT_SUCCESS = 6;
   */
  SNAPSHOT_SUCCESS = 6,

  /**
   * snapshot was skipped e.g. due to no changes.
   *
   * @generated from enum value: CONDITION_SNAPSHOT_SKIPPED = 7;
   */
  SNAPSHOT_SKIPPED = 7,

  /**
   * prune conditions
   *
   * prune started.
   *
   * @generated from enum value: CONDITION_PRUNE_START = 100;
   */
  PRUNE_START = 100,

  /**
   * prune failed.
   *
   * @generated from enum value: CONDITION_PRUNE_ERROR = 101;
   */
  PRUNE_ERROR = 101,

  /**
   * prune succeeded.
   *
   * @generated from enum value: CONDITION_PRUNE_SUCCESS = 102;
   */
  PRUNE_SUCCESS = 102,

  /**
   * check conditions
   *
   * check started.
   *
   * @generated from enum value: CONDITION_CHECK_START = 200;
   */
  CHECK_START = 200,

  /**
   * check failed.
   *
   * @generated from enum value: CONDITION_CHECK_ERROR = 201;
   */
  CHECK_ERROR = 201,

  /**
   * check succeeded.
   *
   * @generated from enum value: CONDITION_CHECK_SUCCESS = 202;
   */
  CHECK_SUCCESS = 202,
}

/**
 * Describes the enum v1.Hook.Condition.
 */
export const Hook_ConditionSchema: GenEnum<Hook_Condition> = /*@__PURE__*/
  enumDesc(file_v1_config, 10, 0);

/**
 * @generated from enum v1.Hook.OnError
 */
export enum Hook_OnError {
  /**
   * @generated from enum value: ON_ERROR_IGNORE = 0;
   */
  IGNORE = 0,

  /**
   * cancels the operation and skips subsequent hooks
   *
   * @generated from enum value: ON_ERROR_CANCEL = 1;
   */
  CANCEL = 1,

  /**
   * fails the operation and subsequent hooks.
   *
   * @generated from enum value: ON_ERROR_FATAL = 2;
   */
  FATAL = 2,

  /**
   * retry the operation every minute 
   *
   * @generated from enum value: ON_ERROR_RETRY_1MINUTE = 100;
   */
  RETRY_1MINUTE = 100,

  /**
   * retry the operation every 10 minutes
   *
   * @generated from enum value: ON_ERROR_RETRY_10MINUTES = 101;
   */
  RETRY_10MINUTES = 101,

  /**
   * retry the operation with exponential backoff up to 1h max.
   *
   * @generated from enum value: ON_ERROR_RETRY_EXPONENTIAL_BACKOFF = 103;
   */
  RETRY_EXPONENTIAL_BACKOFF = 103,
}

/**
 * Describes the enum v1.Hook.OnError.
 */
export const Hook_OnErrorSchema: GenEnum<Hook_OnError> = /*@__PURE__*/
  enumDesc(file_v1_config, 10, 1);

/**
 * @generated from message v1.Auth
 */
export type Auth = Message<"v1.Auth"> & {
  /**
   * disable authentication.
   *
   * @generated from field: bool disabled = 1;
   */
  disabled: boolean;

  /**
   * users to allow access to the UI.
   *
   * @generated from field: repeated v1.User users = 2;
   */
  users: User[];
};

/**
 * Describes the message v1.Auth.
 * Use `create(AuthSchema)` to create a new message.
 */
export const AuthSchema: GenMessage<Auth> = /*@__PURE__*/
  messageDesc(file_v1_config, 11);

/**
 * @generated from message v1.User
 */
export type User = Message<"v1.User"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from oneof v1.User.password
   */
  password: {
    /**
     * @generated from field: string password_bcrypt = 2;
     */
    value: string;
    case: "passwordBcrypt";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message v1.User.
 * Use `create(UserSchema)` to create a new message.
 */
export const UserSchema: GenMessage<User> = /*@__PURE__*/
  messageDesc(file_v1_config, 12);

