// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file v1/syncservice.proto (package v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Repo } from "./config_pb";
import { file_v1_config } from "./config_pb";
import type { PublicKey, SignedMessage } from "./crypto_pb";
import { file_v1_crypto } from "./crypto_pb";
import { file_v1_restic } from "./restic_pb";
import type { OpSelector } from "./service_pb";
import { file_v1_service } from "./service_pb";
import type { OperationEvent } from "./operations_pb";
import { file_v1_operations } from "./operations_pb";
import { file_types_value } from "../types/value_pb";
import type { EmptySchema } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty } from "@bufbuild/protobuf/wkt";
import { file_google_api_annotations } from "../google/api/annotations_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file v1/syncservice.proto.
 */
export const file_v1_syncservice: GenFile = /*@__PURE__*/
  fileDesc("ChR2MS9zeW5jc2VydmljZS5wcm90bxICdjEikgEKFkdldFJlbW90ZVJlcG9zUmVzcG9uc2USPAoFcmVwb3MYASADKAsyLS52MS5HZXRSZW1vdGVSZXBvc1Jlc3BvbnNlLlJlbW90ZVJlcG9NZXRhZGF0YRo6ChJSZW1vdGVSZXBvTWV0YWRhdGESEwoLaW5zdGFuY2VfaWQYASABKAkSDwoHcmVwb19pZBgCIAEoCSK/CQoOU3luY1N0cmVhbUl0ZW0SKwoOc2lnbmVkX21lc3NhZ2UYASABKAsyES52MS5TaWduZWRNZXNzYWdlSAASOwoJaGFuZHNoYWtlGAogASgLMiYudjEuU3luY1N0cmVhbUl0ZW0uU3luY0FjdGlvbkhhbmRzaGFrZUgAEkYKD2RpZmZfb3BlcmF0aW9ucxgUIAEoCzIrLnYxLlN5bmNTdHJlYW1JdGVtLlN5bmNBY3Rpb25EaWZmT3BlcmF0aW9uc0gAEkYKD3NlbmRfb3BlcmF0aW9ucxgVIAEoCzIrLnYxLlN5bmNTdHJlYW1JdGVtLlN5bmNBY3Rpb25TZW5kT3BlcmF0aW9uc0gAEj4KC3NlbmRfY29uZmlnGBYgASgLMicudjEuU3luY1N0cmVhbUl0ZW0uU3luY0FjdGlvblNlbmRDb25maWdIABI6Cgh0aHJvdHRsZRjoByABKAsyJS52MS5TeW5jU3RyZWFtSXRlbS5TeW5jQWN0aW9uVGhyb3R0bGVIABJPChdlc3RhYmxpc2hfc2hhcmVkX3NlY3JldBgXIAEoCzIsLnYxLlN5bmNTdHJlYW1JdGVtLlN5bmNFc3RhYmxpc2hTaGFyZWRTZWNyZXRIABp6ChNTeW5jQWN0aW9uSGFuZHNoYWtlEhgKEHByb3RvY29sX3ZlcnNpb24YASABKAMSIQoKcHVibGljX2tleRgCIAEoCzINLnYxLlB1YmxpY0tleRImCgtpbnN0YW5jZV9pZBgDIAEoCzIRLnYxLlNpZ25lZE1lc3NhZ2UaOAoUU3luY0FjdGlvblNlbmRDb25maWcSIAoGY29uZmlnGAEgASgLMhAudjEuUmVtb3RlQ29uZmlnGigKFVN5bmNBY3Rpb25Db25uZWN0UmVwbxIPCgdyZXBvX2lkGAEgASgJGqMBChhTeW5jQWN0aW9uRGlmZk9wZXJhdGlvbnMSMAoYaGF2ZV9vcGVyYXRpb25zX3NlbGVjdG9yGAEgASgLMg4udjEuT3BTZWxlY3RvchIaChJoYXZlX29wZXJhdGlvbl9pZHMYAiADKAMSHQoVaGF2ZV9vcGVyYXRpb25fbW9kbm9zGAMgAygDEhoKEnJlcXVlc3Rfb3BlcmF0aW9ucxgEIAMoAxo9ChhTeW5jQWN0aW9uU2VuZE9wZXJhdGlvbnMSIQoFZXZlbnQYASABKAsyEi52MS5PcGVyYXRpb25FdmVudBomChJTeW5jQWN0aW9uVGhyb3R0bGUSEAoIZGVsYXlfbXMYASABKAMaOAoZU3luY0VzdGFibGlzaFNoYXJlZFNlY3JldBIbCgdlZDI1NTE5GAIgASgJUgplZDI1NTE5cHViIrQBChNSZXBvQ29ubmVjdGlvblN0YXRlEhwKGENPTk5FQ1RJT05fU1RBVEVfVU5LTk9XThAAEhwKGENPTk5FQ1RJT05fU1RBVEVfUEVORElORxABEh4KGkNPTk5FQ1RJT05fU1RBVEVfQ09OTkVDVEVEEAISIQodQ09OTkVDVElPTl9TVEFURV9VTkFVVEhPUklaRUQQAxIeChpDT05ORUNUSU9OX1NUQVRFX05PVF9GT1VORBAEQggKBmFjdGlvbiInCgxSZW1vdGVDb25maWcSFwoFcmVwb3MYASADKAsyCC52MS5SZXBvKvsBChNTeW5jQ29ubmVjdGlvblN0YXRlEhwKGENPTk5FQ1RJT05fU1RBVEVfVU5LTk9XThAAEhwKGENPTk5FQ1RJT05fU1RBVEVfUEVORElORxABEh4KGkNPTk5FQ1RJT05fU1RBVEVfQ09OTkVDVEVEEAISIQodQ09OTkVDVElPTl9TVEFURV9ESVNDT05ORUNURUQQAxIfChtDT05ORUNUSU9OX1NUQVRFX1JFVFJZX1dBSVQQBBIfChtDT05ORUNUSU9OX1NUQVRFX0VSUk9SX0FVVEgQChIjCh9DT05ORUNUSU9OX1NUQVRFX0VSUk9SX1BST1RPQ09MEAsykwEKE0JhY2tyZXN0U3luY1NlcnZpY2USNAoEU3luYxISLnYxLlN5bmNTdHJlYW1JdGVtGhIudjEuU3luY1N0cmVhbUl0ZW0iACgBMAESRgoOR2V0UmVtb3RlUmVwb3MSFi5nb29nbGUucHJvdG9idWYuRW1wdHkaGi52MS5HZXRSZW1vdGVSZXBvc1Jlc3BvbnNlIgBCLFoqZ2l0aHViLmNvbS9nYXJldGhnZW9yZ2UvYmFja3Jlc3QvZ2VuL2dvL3YxYgZwcm90bzM", [file_v1_config, file_v1_crypto, file_v1_restic, file_v1_service, file_v1_operations, file_types_value, file_google_protobuf_empty, file_google_api_annotations]);

/**
 * @generated from message v1.GetRemoteReposResponse
 */
export type GetRemoteReposResponse = Message<"v1.GetRemoteReposResponse"> & {
  /**
   * @generated from field: repeated v1.GetRemoteReposResponse.RemoteRepoMetadata repos = 1;
   */
  repos: GetRemoteReposResponse_RemoteRepoMetadata[];
};

/**
 * Describes the message v1.GetRemoteReposResponse.
 * Use `create(GetRemoteReposResponseSchema)` to create a new message.
 */
export const GetRemoteReposResponseSchema: GenMessage<GetRemoteReposResponse> = /*@__PURE__*/
  messageDesc(file_v1_syncservice, 0);

/**
 * @generated from message v1.GetRemoteReposResponse.RemoteRepoMetadata
 */
export type GetRemoteReposResponse_RemoteRepoMetadata = Message<"v1.GetRemoteReposResponse.RemoteRepoMetadata"> & {
  /**
   * @generated from field: string instance_id = 1;
   */
  instanceId: string;

  /**
   * @generated from field: string repo_id = 2;
   */
  repoId: string;
};

/**
 * Describes the message v1.GetRemoteReposResponse.RemoteRepoMetadata.
 * Use `create(GetRemoteReposResponse_RemoteRepoMetadataSchema)` to create a new message.
 */
export const GetRemoteReposResponse_RemoteRepoMetadataSchema: GenMessage<GetRemoteReposResponse_RemoteRepoMetadata> = /*@__PURE__*/
  messageDesc(file_v1_syncservice, 0, 0);

/**
 * @generated from message v1.SyncStreamItem
 */
export type SyncStreamItem = Message<"v1.SyncStreamItem"> & {
  /**
   * @generated from oneof v1.SyncStreamItem.action
   */
  action: {
    /**
     * @generated from field: v1.SignedMessage signed_message = 1;
     */
    value: SignedMessage;
    case: "signedMessage";
  } | {
    /**
     * @generated from field: v1.SyncStreamItem.SyncActionHandshake handshake = 10;
     */
    value: SyncStreamItem_SyncActionHandshake;
    case: "handshake";
  } | {
    /**
     * @generated from field: v1.SyncStreamItem.SyncActionDiffOperations diff_operations = 20;
     */
    value: SyncStreamItem_SyncActionDiffOperations;
    case: "diffOperations";
  } | {
    /**
     * @generated from field: v1.SyncStreamItem.SyncActionSendOperations send_operations = 21;
     */
    value: SyncStreamItem_SyncActionSendOperations;
    case: "sendOperations";
  } | {
    /**
     * @generated from field: v1.SyncStreamItem.SyncActionSendConfig send_config = 22;
     */
    value: SyncStreamItem_SyncActionSendConfig;
    case: "sendConfig";
  } | {
    /**
     * @generated from field: v1.SyncStreamItem.SyncActionThrottle throttle = 1000;
     */
    value: SyncStreamItem_SyncActionThrottle;
    case: "throttle";
  } | {
    /**
     * @generated from field: v1.SyncStreamItem.SyncEstablishSharedSecret establish_shared_secret = 23;
     */
    value: SyncStreamItem_SyncEstablishSharedSecret;
    case: "establishSharedSecret";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message v1.SyncStreamItem.
 * Use `create(SyncStreamItemSchema)` to create a new message.
 */
export const SyncStreamItemSchema: GenMessage<SyncStreamItem> = /*@__PURE__*/
  messageDesc(file_v1_syncservice, 1);

/**
 * @generated from message v1.SyncStreamItem.SyncActionHandshake
 */
export type SyncStreamItem_SyncActionHandshake = Message<"v1.SyncStreamItem.SyncActionHandshake"> & {
  /**
   * @generated from field: int64 protocol_version = 1;
   */
  protocolVersion: bigint;

  /**
   * @generated from field: v1.PublicKey public_key = 2;
   */
  publicKey?: PublicKey;

  /**
   * @generated from field: v1.SignedMessage instance_id = 3;
   */
  instanceId?: SignedMessage;
};

/**
 * Describes the message v1.SyncStreamItem.SyncActionHandshake.
 * Use `create(SyncStreamItem_SyncActionHandshakeSchema)` to create a new message.
 */
export const SyncStreamItem_SyncActionHandshakeSchema: GenMessage<SyncStreamItem_SyncActionHandshake> = /*@__PURE__*/
  messageDesc(file_v1_syncservice, 1, 0);

/**
 * @generated from message v1.SyncStreamItem.SyncActionSendConfig
 */
export type SyncStreamItem_SyncActionSendConfig = Message<"v1.SyncStreamItem.SyncActionSendConfig"> & {
  /**
   * @generated from field: v1.RemoteConfig config = 1;
   */
  config?: RemoteConfig;
};

/**
 * Describes the message v1.SyncStreamItem.SyncActionSendConfig.
 * Use `create(SyncStreamItem_SyncActionSendConfigSchema)` to create a new message.
 */
export const SyncStreamItem_SyncActionSendConfigSchema: GenMessage<SyncStreamItem_SyncActionSendConfig> = /*@__PURE__*/
  messageDesc(file_v1_syncservice, 1, 1);

/**
 * @generated from message v1.SyncStreamItem.SyncActionConnectRepo
 */
export type SyncStreamItem_SyncActionConnectRepo = Message<"v1.SyncStreamItem.SyncActionConnectRepo"> & {
  /**
   * @generated from field: string repo_id = 1;
   */
  repoId: string;
};

/**
 * Describes the message v1.SyncStreamItem.SyncActionConnectRepo.
 * Use `create(SyncStreamItem_SyncActionConnectRepoSchema)` to create a new message.
 */
export const SyncStreamItem_SyncActionConnectRepoSchema: GenMessage<SyncStreamItem_SyncActionConnectRepo> = /*@__PURE__*/
  messageDesc(file_v1_syncservice, 1, 2);

/**
 * @generated from message v1.SyncStreamItem.SyncActionDiffOperations
 */
export type SyncStreamItem_SyncActionDiffOperations = Message<"v1.SyncStreamItem.SyncActionDiffOperations"> & {
  /**
   * Client connects and sends a list of "have_operations" that exist in its log.
   * have_operation_ids and have_operation_modnos are the operation IDs and modnos that the client has when zip'd pairwise.
   *
   * @generated from field: v1.OpSelector have_operations_selector = 1;
   */
  haveOperationsSelector?: OpSelector;

  /**
   * @generated from field: repeated int64 have_operation_ids = 2;
   */
  haveOperationIds: bigint[];

  /**
   * @generated from field: repeated int64 have_operation_modnos = 3;
   */
  haveOperationModnos: bigint[];

  /**
   * Server sends a list of "request_operations" for any operations that it doesn't have.
   *
   * @generated from field: repeated int64 request_operations = 4;
   */
  requestOperations: bigint[];
};

/**
 * Describes the message v1.SyncStreamItem.SyncActionDiffOperations.
 * Use `create(SyncStreamItem_SyncActionDiffOperationsSchema)` to create a new message.
 */
export const SyncStreamItem_SyncActionDiffOperationsSchema: GenMessage<SyncStreamItem_SyncActionDiffOperations> = /*@__PURE__*/
  messageDesc(file_v1_syncservice, 1, 3);

/**
 * @generated from message v1.SyncStreamItem.SyncActionSendOperations
 */
export type SyncStreamItem_SyncActionSendOperations = Message<"v1.SyncStreamItem.SyncActionSendOperations"> & {
  /**
   * @generated from field: v1.OperationEvent event = 1;
   */
  event?: OperationEvent;
};

/**
 * Describes the message v1.SyncStreamItem.SyncActionSendOperations.
 * Use `create(SyncStreamItem_SyncActionSendOperationsSchema)` to create a new message.
 */
export const SyncStreamItem_SyncActionSendOperationsSchema: GenMessage<SyncStreamItem_SyncActionSendOperations> = /*@__PURE__*/
  messageDesc(file_v1_syncservice, 1, 4);

/**
 * @generated from message v1.SyncStreamItem.SyncActionThrottle
 */
export type SyncStreamItem_SyncActionThrottle = Message<"v1.SyncStreamItem.SyncActionThrottle"> & {
  /**
   * @generated from field: int64 delay_ms = 1;
   */
  delayMs: bigint;
};

/**
 * Describes the message v1.SyncStreamItem.SyncActionThrottle.
 * Use `create(SyncStreamItem_SyncActionThrottleSchema)` to create a new message.
 */
export const SyncStreamItem_SyncActionThrottleSchema: GenMessage<SyncStreamItem_SyncActionThrottle> = /*@__PURE__*/
  messageDesc(file_v1_syncservice, 1, 5);

/**
 * @generated from message v1.SyncStreamItem.SyncEstablishSharedSecret
 */
export type SyncStreamItem_SyncEstablishSharedSecret = Message<"v1.SyncStreamItem.SyncEstablishSharedSecret"> & {
  /**
   * a one-time-use ed25519 public key with a matching unshared private key. Used to perform a key exchange.
   * See https://pkg.go.dev/crypto/ecdh#PrivateKey.ECDH .
   *
   * base64 encoded public key
   *
   * @generated from field: string ed25519 = 2 [json_name = "ed25519pub"];
   */
  ed25519: string;
};

/**
 * Describes the message v1.SyncStreamItem.SyncEstablishSharedSecret.
 * Use `create(SyncStreamItem_SyncEstablishSharedSecretSchema)` to create a new message.
 */
export const SyncStreamItem_SyncEstablishSharedSecretSchema: GenMessage<SyncStreamItem_SyncEstablishSharedSecret> = /*@__PURE__*/
  messageDesc(file_v1_syncservice, 1, 6);

/**
 * @generated from enum v1.SyncStreamItem.RepoConnectionState
 */
export enum SyncStreamItem_RepoConnectionState {
  /**
   * @generated from enum value: CONNECTION_STATE_UNKNOWN = 0;
   */
  CONNECTION_STATE_UNKNOWN = 0,

  /**
   * queried, response not yet received.
   *
   * @generated from enum value: CONNECTION_STATE_PENDING = 1;
   */
  CONNECTION_STATE_PENDING = 1,

  /**
   * @generated from enum value: CONNECTION_STATE_CONNECTED = 2;
   */
  CONNECTION_STATE_CONNECTED = 2,

  /**
   * @generated from enum value: CONNECTION_STATE_UNAUTHORIZED = 3;
   */
  CONNECTION_STATE_UNAUTHORIZED = 3,

  /**
   * @generated from enum value: CONNECTION_STATE_NOT_FOUND = 4;
   */
  CONNECTION_STATE_NOT_FOUND = 4,
}

/**
 * Describes the enum v1.SyncStreamItem.RepoConnectionState.
 */
export const SyncStreamItem_RepoConnectionStateSchema: GenEnum<SyncStreamItem_RepoConnectionState> = /*@__PURE__*/
  enumDesc(file_v1_syncservice, 1, 0);

/**
 * RemoteConfig contains shareable properties from a remote backrest instance.
 *
 * @generated from message v1.RemoteConfig
 */
export type RemoteConfig = Message<"v1.RemoteConfig"> & {
  /**
   * @generated from field: repeated v1.Repo repos = 1;
   */
  repos: Repo[];
};

/**
 * Describes the message v1.RemoteConfig.
 * Use `create(RemoteConfigSchema)` to create a new message.
 */
export const RemoteConfigSchema: GenMessage<RemoteConfig> = /*@__PURE__*/
  messageDesc(file_v1_syncservice, 2);

/**
 * @generated from enum v1.SyncConnectionState
 */
export enum SyncConnectionState {
  /**
   * @generated from enum value: CONNECTION_STATE_UNKNOWN = 0;
   */
  CONNECTION_STATE_UNKNOWN = 0,

  /**
   * @generated from enum value: CONNECTION_STATE_PENDING = 1;
   */
  CONNECTION_STATE_PENDING = 1,

  /**
   * @generated from enum value: CONNECTION_STATE_CONNECTED = 2;
   */
  CONNECTION_STATE_CONNECTED = 2,

  /**
   * @generated from enum value: CONNECTION_STATE_DISCONNECTED = 3;
   */
  CONNECTION_STATE_DISCONNECTED = 3,

  /**
   * @generated from enum value: CONNECTION_STATE_RETRY_WAIT = 4;
   */
  CONNECTION_STATE_RETRY_WAIT = 4,

  /**
   * @generated from enum value: CONNECTION_STATE_ERROR_AUTH = 10;
   */
  CONNECTION_STATE_ERROR_AUTH = 10,

  /**
   * @generated from enum value: CONNECTION_STATE_ERROR_PROTOCOL = 11;
   */
  CONNECTION_STATE_ERROR_PROTOCOL = 11,
}

/**
 * Describes the enum v1.SyncConnectionState.
 */
export const SyncConnectionStateSchema: GenEnum<SyncConnectionState> = /*@__PURE__*/
  enumDesc(file_v1_syncservice, 0);

/**
 * @generated from service v1.BackrestSyncService
 */
export const BackrestSyncService: GenService<{
  /**
   * @generated from rpc v1.BackrestSyncService.Sync
   */
  sync: {
    methodKind: "bidi_streaming";
    input: typeof SyncStreamItemSchema;
    output: typeof SyncStreamItemSchema;
  },
  /**
   * @generated from rpc v1.BackrestSyncService.GetRemoteRepos
   */
  getRemoteRepos: {
    methodKind: "unary";
    input: typeof EmptySchema;
    output: typeof GetRemoteReposResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_v1_syncservice, 0);

