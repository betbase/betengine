import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Duration: { input: any; output: any; }
  Version: { input: any; output: any; }
  _FieldSet: { input: any; output: any; }
};

/** An ability that is owned by a player (available from version "1.8"). */
export type Ability = {
  /** GRID ID for this ability. */
  id: Scalars['ID']['output'];
  /** The name of this ability. */
  name: Scalars['String']['output'];
  /** Whether this ability can be activated or not. */
  ready: Scalars['Boolean']['output'];
};

/** An ability that is owned by a player (available from version "1.8"). */
export type AbilityValorant = Ability & {
  __typename?: 'AbilityValorant';
  /** How many charges this ability has */
  charges: Scalars['Int']['output'];
  /** GRID ID for this ability. */
  id: Scalars['ID']['output'];
  /** The name of this ability. */
  name: Scalars['String']['output'];
  /** Whether this ability can be activated or not. */
  ready: Scalars['Boolean']['output'];
};

/** Bounds information (ie min and max Coordinates for a map). */
export type Bounds = {
  __typename?: 'Bounds';
  /** Maximum Coordinates value. */
  max: Coordinates;
  /** Minimum Coordinates value. */
  min: Coordinates;
};

/** In-game character (ie champion, class) information */
export type Character = {
  __typename?: 'Character';
  /** GRID Character ID. */
  id: Scalars['ID']['output'];
  /** Character name */
  name: Scalars['String']['output'];
};

/** The game or respawn clock state (available from version "1.3"). */
export type ClockState = {
  __typename?: 'ClockState';
  /** The current seconds for this clock */
  currentSeconds?: Maybe<Scalars['Int']['output']>;
  /** The id of this clock */
  id?: Maybe<Scalars['String']['output']>;
  /** Indicates if this clock is ticking */
  ticking?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates if this clock is ticking backwards */
  ticksBackwards?: Maybe<Scalars['Boolean']['output']>;
  /** The type of this clock */
  type?: Maybe<Scalars['String']['output']>;
};

/** Spatial Coordinates. */
export type Coordinates = {
  __typename?: 'Coordinates';
  /** X coordinate value. */
  x: Scalars['Float']['output'];
  /** Y coordinate value. */
  y: Scalars['Float']['output'];
};

/** A source of damage with the amount and occurrence (available from version "3.17"). */
export type DamageDealtSource = {
  __typename?: 'DamageDealtSource';
  /** Amount of damage dealt with the source. */
  damageAmount: Scalars['Int']['output'];
  /** Breakdown of different damage types. */
  damageTypes: Array<DamageDealtType>;
  /** GRID ID for this damage source */
  id: Scalars['ID']['output'];
  /** Amount of times damage was dealt with the source. */
  occurrenceCount: Scalars['Int']['output'];
  /** Source of the damage. */
  source: DamageSource;
};

/** A target of damage with the amount and occurrence (available from version "3.17"). */
export type DamageDealtTarget = {
  __typename?: 'DamageDealtTarget';
  /** Amount of damage dealt to the target. */
  damageAmount: Scalars['Int']['output'];
  /** Breakdown of different damage types. */
  damageTypes: Array<DamageDealtType>;
  /** GRID ID for this damage target */
  id: Scalars['ID']['output'];
  /** Amount of times damage was dealt to the target. */
  occurrenceCount: Scalars['Int']['output'];
  /** Target of the damage. */
  target: DamageTarget;
};

/** A type of dealt damage (available from version "3.18"). */
export type DamageDealtType = {
  __typename?: 'DamageDealtType';
  /** Amount of damage dealt. */
  damageAmount: Scalars['Int']['output'];
  /** GRID ID for this damage target */
  id: Scalars['ID']['output'];
  /** Amount of times damage was dealt. */
  occurrenceCount: Scalars['Int']['output'];
  /** Name of the type of damage */
  type: Scalars['String']['output'];
};

/** A source of damage with a name (available from version "3.17"). */
export type DamageSource = {
  __typename?: 'DamageSource';
  /** Name of the damage source. */
  name: Scalars['String']['output'];
};

/** A target of damage with name (available from version "3.17"). */
export type DamageTarget = {
  __typename?: 'DamageTarget';
  /** Name of the damage source. */
  name: Scalars['String']['output'];
};

/** A data provider which provides external entity IDs. */
export type DataProvider = {
  __typename?: 'DataProvider';
  /** Unique name of the data provider */
  name: Scalars['String']['output'];
};

/** An ability that is owned by a player (available from version "1.8"). */
export type DefaultAbility = Ability & {
  __typename?: 'DefaultAbility';
  /** GRID ID for this ability. */
  id: Scalars['ID']['output'];
  /** The name of this ability. */
  name: Scalars['String']['output'];
  /** Whether this ability can be activated or not. */
  ready: Scalars['Boolean']['output'];
};

/** A draft action occurrence such as a team banning a map or a player picking a champion. */
export type DraftAction = {
  __typename?: 'DraftAction';
  /** Entity being drafted. */
  draftable: Draftable;
  /** Entity performing the draft action. */
  drafter: Drafter;
  /** GRID draft action ID. */
  id: Scalars['ID']['output'];
  /** Sequence number of the draft action. */
  sequenceNumber: Scalars['String']['output'];
  /** Type of the draft action. */
  type: Scalars['String']['output'];
};

/** Entity being drafted. */
export type Draftable = {
  __typename?: 'Draftable';
  /** GRID ID of the entity being drafted. */
  id: Scalars['ID']['output'];
  /** Name of the entity being drafted. */
  name: Scalars['String']['output'];
  /** Type of the entity being drafted. */
  type: Scalars['String']['output'];
};

/** Entity performing a draft action. */
export type Drafter = {
  __typename?: 'Drafter';
  /** GRID ID of the entity performing a draft action. */
  id: Scalars['ID']['output'];
  /** Type of entity performing a draft action. */
  type: Scalars['String']['output'];
};

export enum ErrorDetail {
  /**
   * The deadline expired before the operation could complete.
   *
   * For operations that change the state of the system, this error
   * may be returned even if the operation has completed successfully.
   * For example, a successful response from a server could have been
   * delayed long enough for the deadline to expire.
   *
   * HTTP Mapping: 504 Gateway Timeout
   * Error Type: UNAVAILABLE
   */
  DeadlineExceeded = 'DEADLINE_EXCEEDED',
  /**
   * The server detected that the client is exhibiting a behavior that
   * might be generating excessive load.
   *
   * HTTP Mapping: 429 Too Many Requests or 420 Enhance Your Calm
   * Error Type: UNAVAILABLE
   */
  EnhanceYourCalm = 'ENHANCE_YOUR_CALM',
  /**
   * The requested field is not found in the schema.
   *
   * This differs from `NOT_FOUND` in that `NOT_FOUND` should be used when a
   * query is valid, but is unable to return a result (if, for example, a
   * specific video id doesn't exist). `FIELD_NOT_FOUND` is intended to be
   * returned by the server to signify that the requested field is not known to exist.
   * This may be returned in lieu of failing the entire query.
   * See also `PERMISSION_DENIED` for cases where the
   * requested field is invalid only for the given user or class of users.
   *
   * HTTP Mapping: 404 Not Found
   * Error Type: BAD_REQUEST
   */
  FieldNotFound = 'FIELD_NOT_FOUND',
  /**
   * The client specified an invalid argument.
   *
   * Note that this differs from `FAILED_PRECONDITION`.
   * `INVALID_ARGUMENT` indicates arguments that are problematic
   * regardless of the state of the system (e.g., a malformed file name).
   *
   * HTTP Mapping: 400 Bad Request
   * Error Type: BAD_REQUEST
   */
  InvalidArgument = 'INVALID_ARGUMENT',
  /**
   * The provided cursor is not valid.
   *
   * The most common usage for this error is when a client is paginating
   * through a list that uses stateful cursors. In that case, the provided
   * cursor may be expired.
   *
   * HTTP Mapping: 404 Not Found
   * Error Type: NOT_FOUND
   */
  InvalidCursor = 'INVALID_CURSOR',
  /**
   * Unable to perform operation because a required resource is missing.
   *
   * Example: Client is attempting to refresh a list, but the specified
   * list is expired. This requires an action by the client to get a new list.
   *
   * If the user is simply trying GET a resource that is not found,
   * use the NOT_FOUND error type. FAILED_PRECONDITION.MISSING_RESOURCE
   * is to be used particularly when the user is performing an operation
   * that requires a particular resource to exist.
   *
   * HTTP Mapping: 400 Bad Request or 500 Internal Server Error
   * Error Type: FAILED_PRECONDITION
   */
  MissingResource = 'MISSING_RESOURCE',
  /**
   * Service Error.
   *
   * There is a problem with an upstream service.
   *
   * This may be returned if a gateway receives an unknown error from a service
   * or if a service is unreachable.
   * If a request times out which waiting on a response from a service,
   * `DEADLINE_EXCEEDED` may be returned instead.
   * If a service returns a more specific error Type, the specific error Type may
   * be returned instead.
   *
   * HTTP Mapping: 502 Bad Gateway
   * Error Type: UNAVAILABLE
   */
  ServiceError = 'SERVICE_ERROR',
  /**
   * Request failed due to network errors.
   *
   * HTTP Mapping: 503 Unavailable
   * Error Type: UNAVAILABLE
   */
  TcpFailure = 'TCP_FAILURE',
  /**
   * Request throttled based on server concurrency limits.
   *
   * HTTP Mapping: 503 Unavailable
   * Error Type: UNAVAILABLE
   */
  ThrottledConcurrency = 'THROTTLED_CONCURRENCY',
  /**
   * Request throttled based on server CPU limits
   *
   * HTTP Mapping: 503 Unavailable.
   * Error Type: UNAVAILABLE
   */
  ThrottledCpu = 'THROTTLED_CPU',
  /**
   * The operation is not implemented or is not currently supported/enabled.
   *
   * HTTP Mapping: 501 Not Implemented
   * Error Type: BAD_REQUEST
   */
  Unimplemented = 'UNIMPLEMENTED',
  /**
   * Unknown error.
   *
   * This error should only be returned when no other error detail applies.
   * If a client sees an unknown errorDetail, it will be interpreted as UNKNOWN.
   *
   * HTTP Mapping: 500 Internal Server Error
   */
  Unknown = 'UNKNOWN'
}

export enum ErrorType {
  /**
   * Bad Request.
   *
   * There is a problem with the request.
   * Retrying the same request is not likely to succeed.
   * An example would be a query or argument that cannot be deserialized.
   *
   * HTTP Mapping: 400 Bad Request
   */
  BadRequest = 'BAD_REQUEST',
  /**
   * The operation was rejected because the system is not in a state
   * required for the operation's execution.  For example, the directory
   * to be deleted is non-empty, an rmdir operation is applied to
   * a non-directory, etc.
   *
   * Service implementers can use the following guidelines to decide
   * between `FAILED_PRECONDITION` and `UNAVAILABLE`:
   *
   * - Use `UNAVAILABLE` if the client can retry just the failing call.
   * - Use `FAILED_PRECONDITION` if the client should not retry until
   * the system state has been explicitly fixed.  E.g., if an "rmdir"
   *      fails because the directory is non-empty, `FAILED_PRECONDITION`
   * should be returned since the client should not retry unless
   * the files are deleted from the directory.
   *
   * HTTP Mapping: 400 Bad Request or 500 Internal Server Error
   */
  FailedPrecondition = 'FAILED_PRECONDITION',
  /**
   * Internal error.
   *
   * An unexpected internal error was encountered. This means that some
   * invariants expected by the underlying system have been broken.
   * This error code is reserved for serious errors.
   *
   * HTTP Mapping: 500 Internal Server Error
   */
  Internal = 'INTERNAL',
  /**
   * The requested entity was not found.
   *
   * This could apply to a resource that has never existed (e.g. bad resource id),
   * or a resource that no longer exists (e.g. cache expired.)
   *
   * Note to server developers: if a request is denied for an entire class
   * of users, such as gradual feature rollout or undocumented allowlist,
   * `NOT_FOUND` may be used. If a request is denied for some users within
   * a class of users, such as user-based access control, `PERMISSION_DENIED`
   * must be used.
   *
   * HTTP Mapping: 404 Not Found
   */
  NotFound = 'NOT_FOUND',
  /**
   * The caller does not have permission to execute the specified
   * operation.
   *
   * `PERMISSION_DENIED` must not be used for rejections
   * caused by exhausting some resource or quota.
   * `PERMISSION_DENIED` must not be used if the caller
   * cannot be identified (use `UNAUTHENTICATED`
   * instead for those errors).
   *
   * This error Type does not imply the
   * request is valid or the requested entity exists or satisfies
   * other pre-conditions.
   *
   * HTTP Mapping: 403 Forbidden
   */
  PermissionDenied = 'PERMISSION_DENIED',
  /**
   * The request does not have valid authentication credentials.
   *
   * This is intended to be returned only for routes that require
   * authentication.
   *
   * HTTP Mapping: 401 Unauthorized
   */
  Unauthenticated = 'UNAUTHENTICATED',
  /**
   * Currently Unavailable.
   *
   * The service is currently unavailable.  This is most likely a
   * transient condition, which can be corrected by retrying with
   * a backoff.
   *
   * HTTP Mapping: 503 Unavailable
   */
  Unavailable = 'UNAVAILABLE',
  /**
   * Unknown error.
   *
   * For example, this error may be returned when
   * an error code received from another address space belongs to
   * an error space that is not known in this address space.  Also
   * errors raised by APIs that do not return enough error information
   * may be converted to this error.
   *
   * If a client sees an unknown errorType, it will be interpreted as UNKNOWN.
   * Unknown errors MUST NOT trigger any special behavior. These MAY be treated
   * by an implementation as being equivalent to INTERNAL.
   *
   * When possible, a more specific error should be provided.
   *
   * HTTP Mapping: 520 Unknown Error
   */
  Unknown = 'UNKNOWN'
}

/** An external entity representing the entity it is embedded in. */
export type ExternalEntity = {
  __typename?: 'ExternalEntity';
  /** ID representing this entity */
  id: Scalars['ID']['output'];
};

/** A link to an external entity given via an ID (available from version "1.2"). */
export type ExternalLink = {
  __typename?: 'ExternalLink';
  /** A data provider which provides external entity IDs. */
  dataProvider: DataProvider;
  /** An external entity representing the entity it is embedded in. */
  externalEntity: ExternalEntity;
};

/** Data points for a Player, aggregated for a Game */
export type GamePlayerState = {
  /** A list of abilities that are owned by this Player in this Game (available from version "1.8"). */
  abilities: Array<Ability>;
  /** In-game character (ie champion, class) of the Player in this Game */
  character?: Maybe<Character>;
  /** Number of deaths for this Player in this Game. */
  deaths: Scalars['Int']['output'];
  /** Indication of player acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** GRID ID of this Player. */
  id: Scalars['ID']['output'];
  /** The Player's inventory */
  inventory: PlayerInventory;
  /** Number of enemy kill assists provided by this Player in this Game. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Player in this Game. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists received by this Player in this Game. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Player in this Game. */
  kills: Scalars['Int']['output'];
  /** Total value (worth in money) of this Player’s loadout. */
  loadoutValue: Scalars['Int']['output'];
  /**
   * Amount of money this Player is holding in cash.
   * Depending on the Title this may represent in-game gold, credits, gems etc.
   */
  money: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Player in this Game (available from version "1.7"). */
  multikills: Array<Multikill>;
  /** Name of this Player. */
  name: Scalars['String']['output'];
  /** Sum of money and inventoryValue for this Player. */
  netWorth: Scalars['Int']['output'];
  /** A list of objectives that were fulfilled by this Player in this Game. */
  objectives: Array<Objective>;
  /** Indicates the participation status of a player for this Game */
  participationStatus: ParticipationStatus;
  /** Player Coordinates on the map */
  position?: Maybe<Coordinates>;
  /** Number of selfkills (suicides) for this Player in this Game. */
  selfkills: Scalars['Int']['output'];
  /** Number of structures captured by this Player in this Game. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this Player in this Game. */
  structuresDestroyed: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists received by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of unit kills that happened by this Player in this Game (available from version "3.1"). */
  unitKills: Array<UnitKill>;
  /** A list of enemy kills, which were executed with a specific weapon by this Player in this Game. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
};

/** CS2 data points for a Player, aggregated for a Game. */
export type GamePlayerStateCs2 = GamePlayerState & {
  __typename?: 'GamePlayerStateCs2';
  /** A list of abilities that are owned by this Player in this Game. */
  abilities: Array<DefaultAbility>;
  /** Indicates whether the player is alive. */
  alive: Scalars['Boolean']['output'];
  /** In-game character (ie champion, class) of the Player in this Game */
  character?: Maybe<Character>;
  /** The amount of current armor. */
  currentArmor: Scalars['Int']['output'];
  /** The current health of the player. */
  currentHealth: Scalars['Int']['output'];
  /** The amount of damage dealt. */
  damageDealt: Scalars['Int']['output'];
  /** A list of damage sources (available from version "3.17"). */
  damageDealtSources: Array<DamageDealtSource>;
  /** A list of damage targets (available from version "3.17"). */
  damageDealtTargets: Array<DamageDealtTarget>;
  /** The amount of total damage taken. */
  damageTaken: Scalars['Int']['output'];
  /** Number of deaths for this Player in this Game. */
  deaths: Scalars['Int']['output'];
  /** A list of ExternalLink, containing information about links to externally provided IDs. */
  externalLinks: Array<ExternalLink>;
  /** Indication of player acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this Player. */
  id: Scalars['ID']['output'];
  /** The Player's inventory */
  inventory: PlayerInventory;
  /** Number of enemy kill assists provided by this Player in this Game. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Player in this Game. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists received by this Player in this Game. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Player in this Game. */
  kills: Scalars['Int']['output'];
  /** Total value (worth in money) of this Player’s loadout. */
  loadoutValue: Scalars['Int']['output'];
  /** The max amount of health of the player. */
  maxHealth: Scalars['Int']['output'];
  /**
   * Amount of money this Player is holding in cash.
   * Depending on the Title this may represent in-game gold, credits, gems etc.
   */
  money: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Player in this Game. */
  multikills: Array<Multikill>;
  /** Name of this Player. */
  name: Scalars['String']['output'];
  /** Sum of money and inventoryValue for this Player. */
  netWorth: Scalars['Int']['output'];
  /** A list of objectives that were fulfilled by this Player in this Game. */
  objectives: Array<Objective>;
  /** Indicates the participation status of a player for this Game */
  participationStatus: ParticipationStatus;
  /** Player Coordinates on the map */
  position?: Maybe<Coordinates>;
  /** The amount of damage dealt to self. */
  selfdamageDealt: Scalars['Int']['output'];
  /** The amount of damage taken from self. */
  selfdamageTaken: Scalars['Int']['output'];
  /** Number of selfkills (suicides) for this Player in this Game. */
  selfkills: Scalars['Int']['output'];
  /** Number of structures captured by this Player in this Game. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this Player in this Game. */
  structuresDestroyed: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /** The amount of damage dealt to team. */
  teamdamageDealt: Scalars['Int']['output'];
  /** The amount of damage taken from team. */
  teamdamageTaken: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists received by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of unit kills that happened by this Player in this Game (available from version "3.1"). */
  unitKills: Array<UnitKill>;
  /** A list of enemy kills, which were executed with a specific weapon by this Player in this Game. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
};

/** CSGO data points for a Player, aggregated for a Game. */
export type GamePlayerStateCsgo = GamePlayerState & {
  __typename?: 'GamePlayerStateCsgo';
  /** A list of abilities that are owned by this Player in this Game (available from version "1.8"). */
  abilities: Array<DefaultAbility>;
  /** Indicates whether the player is alive (available from version "1.5"). */
  alive: Scalars['Boolean']['output'];
  /** In-game character (ie champion, class) of the Player in this Game */
  character?: Maybe<Character>;
  /** The amount of current armor. */
  currentArmor: Scalars['Int']['output'];
  /** The current health of the player (available from version "1.5"). */
  currentHealth: Scalars['Int']['output'];
  /** The amount of damage dealt. */
  damageDealt: Scalars['Int']['output'];
  /** A list of damage sources (available from version "3.17"). */
  damageDealtSources: Array<DamageDealtSource>;
  /** A list of damage targets (available from version "3.17"). */
  damageDealtTargets: Array<DamageDealtTarget>;
  /** The amount of total damage taken. */
  damageTaken: Scalars['Int']['output'];
  /** Number of deaths for this Player in this Game. */
  deaths: Scalars['Int']['output'];
  /** A list of ExternalLink, containing information about links to externally provided IDs (available from version "2.2"). */
  externalLinks: Array<ExternalLink>;
  /** Indication of player acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this Player. */
  id: Scalars['ID']['output'];
  /** The Player's inventory */
  inventory: PlayerInventory;
  /** Number of enemy kill assists provided by this Player in this Game. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Player in this Game. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists received by this Player in this Game. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Player in this Game. */
  kills: Scalars['Int']['output'];
  /** Total value (worth in money) of this Player’s loadout. */
  loadoutValue: Scalars['Int']['output'];
  /** The max amount of health of the player (available from version "1.5"). */
  maxHealth: Scalars['Int']['output'];
  /**
   * Amount of money this Player is holding in cash.
   * Depending on the Title this may represent in-game gold, credits, gems etc.
   */
  money: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Player in this Game (available from version "1.7"). */
  multikills: Array<Multikill>;
  /** Name of this Player. */
  name: Scalars['String']['output'];
  /** Sum of money and inventoryValue for this Player. */
  netWorth: Scalars['Int']['output'];
  /** A list of objectives that were fulfilled by this Player in this Game. */
  objectives: Array<Objective>;
  /** Indicates the participation status of a player for this Game */
  participationStatus: ParticipationStatus;
  /** Player Coordinates on the map */
  position?: Maybe<Coordinates>;
  /** The amount of damage dealt to self. */
  selfdamageDealt: Scalars['Int']['output'];
  /** The amount of damage taken from self. */
  selfdamageTaken: Scalars['Int']['output'];
  /** Number of selfkills (suicides) for this Player in this Game. */
  selfkills: Scalars['Int']['output'];
  /** Number of structures captured by this Player in this Game. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this Player in this Game. */
  structuresDestroyed: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /** The amount of damage dealt to team. */
  teamdamageDealt: Scalars['Int']['output'];
  /** The amount of damage taken from team. */
  teamdamageTaken: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists received by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of unit kills that happened by this Player in this Game (available from version "3.1"). */
  unitKills: Array<UnitKill>;
  /** A list of enemy kills, which were executed with a specific weapon by this Player in this Game. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
};

/** Default data points for a Player, aggregated for a Game */
export type GamePlayerStateDefault = GamePlayerState & {
  __typename?: 'GamePlayerStateDefault';
  /** A list of abilities that are owned by this Player in this Game (available from version "1.8"). */
  abilities: Array<DefaultAbility>;
  /** In-game character (ie champion, class) of the Player in this Game */
  character?: Maybe<Character>;
  /** Number of deaths for this Player in this Game. */
  deaths: Scalars['Int']['output'];
  /** Indication of player acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this Player. */
  id: Scalars['ID']['output'];
  /** The Player's inventory */
  inventory: PlayerInventory;
  /** Number of enemy kill assists provided by this Player in this Game. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Player in this Game. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists received by this Player in this Game. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Player in this Game. */
  kills: Scalars['Int']['output'];
  /** Total value (worth in money) of this Player’s loadout. */
  loadoutValue: Scalars['Int']['output'];
  /**
   * Amount of money this Player is holding in cash.
   * Depending on the Title this may represent in-game gold, credits, gems etc.
   */
  money: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Player in this Game (available from version "1.7"). */
  multikills: Array<Multikill>;
  /** Name of this Player. */
  name: Scalars['String']['output'];
  /** Sum of money and inventoryValue for this Player. */
  netWorth: Scalars['Int']['output'];
  /** A list of objectives that were fulfilled by this Player in this Game. */
  objectives: Array<Objective>;
  /** Indicates the participation status of a player for this Game */
  participationStatus: ParticipationStatus;
  /** Player Coordinates on the map */
  position?: Maybe<Coordinates>;
  /** Number of selfkills (suicides) for this Player in this Game. */
  selfkills: Scalars['Int']['output'];
  /** Number of structures captured by this Player in this Game. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this Player in this Game. */
  structuresDestroyed: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists received by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of unit kills that happened by this Player in this Game (available from version "3.1"). */
  unitKills: Array<UnitKill>;
  /** A list of enemy kills, which were executed with a specific weapon by this Player in this Game. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
};

/** Dota data points for a Player, aggregated for a Game. */
export type GamePlayerStateDota = GamePlayerState & {
  __typename?: 'GamePlayerStateDota';
  /** A list of abilities that are owned by this Player in this Game (available from version "1.8"). */
  abilities: Array<DefaultAbility>;
  /** Indicates whether the player is alive. */
  alive: Scalars['Boolean']['output'];
  /** In-game character (ie champion, class) of the Player in this Game */
  character?: Maybe<Character>;
  /** The current health of the player (available from version "1.6"). */
  currentHealth: Scalars['Int']['output'];
  /** Number of deaths for this Player in this Game. */
  deaths: Scalars['Int']['output'];
  /** The amount of experience points gathered by this player. */
  experiencePoints: Scalars['Int']['output'];
  /** A list of ExternalLink, containing information about links to externally provided IDs. (available from version "3.6") */
  externalLinks: Array<ExternalLink>;
  /** Indication of player acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this Player. */
  id: Scalars['ID']['output'];
  /** The Player's inventory */
  inventory: PlayerInventory;
  /** Number of enemy kill assists provided by this Player in this Game. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Player in this Game. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists received by this Player in this Game. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Player in this Game. */
  kills: Scalars['Int']['output'];
  /** Total value (worth in money) of this Player’s loadout. */
  loadoutValue: Scalars['Int']['output'];
  /** The max amount of health of the player (available from version "1.6"). */
  maxHealth: Scalars['Int']['output'];
  /**
   * Amount of money this Player is holding in cash.
   * Depending on the Title this may represent in-game gold, credits, gems etc.
   */
  money: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Player in this Game (available from version "1.7"). */
  multikills: Array<Multikill>;
  /** Name of this Player. */
  name: Scalars['String']['output'];
  /** Sum of money and inventoryValue for this Player. */
  netWorth: Scalars['Int']['output'];
  /** A list of objectives that were fulfilled by this Player in this Game. */
  objectives: Array<Objective>;
  /** Indicates the participation status of a player for this Game */
  participationStatus: ParticipationStatus;
  /** Player Coordinates on the map */
  position?: Maybe<Coordinates>;
  /** Number of selfkills (suicides) for this Player in this Game. */
  selfkills: Scalars['Int']['output'];
  /** Number of structures captured by this Player in this Game. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this Player in this Game. */
  structuresDestroyed: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists received by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of unit kills that happened by this Player in this Game (available from version "3.1"). */
  unitKills: Array<UnitKill>;
  /** A list of enemy kills, which were executed with a specific weapon by this Player in this Game. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
};

/** LoL data points for a Player, aggregated for a Game. */
export type GamePlayerStateLol = GamePlayerState & {
  __typename?: 'GamePlayerStateLol';
  /** A list of abilities that are owned by this Player in this Game (available from version "1.8"). */
  abilities: Array<DefaultAbility>;
  /** Indicates whether the player is alive. */
  alive: Scalars['Boolean']['output'];
  /** In-game character (ie champion, class) of the Player in this Game */
  character?: Maybe<Character>;
  /** The amount of current armor. */
  currentArmor: Scalars['Int']['output'];
  /** The current health of the player. */
  currentHealth: Scalars['Int']['output'];
  /** Number of deaths for this Player in this Game. */
  deaths: Scalars['Int']['output'];
  /** The amount of experience points gathered by this player. */
  experiencePoints: Scalars['Int']['output'];
  /** Indication of player acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this Player. */
  id: Scalars['ID']['output'];
  /** The Player's inventory */
  inventory: PlayerInventory;
  /** Number of enemy kill assists provided by this Player in this Game. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Player in this Game. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists received by this Player in this Game. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Player in this Game. */
  kills: Scalars['Int']['output'];
  /** Total value (worth in money) of this Player’s loadout. */
  loadoutValue: Scalars['Int']['output'];
  /** The max amount of health of the player. */
  maxHealth: Scalars['Int']['output'];
  /**
   * Amount of money this Player is holding in cash.
   * Depending on the Title this may represent in-game gold, credits, gems etc.
   */
  money: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Player in this Game (available from version "1.7"). */
  multikills: Array<Multikill>;
  /** Name of this Player. */
  name: Scalars['String']['output'];
  /** Sum of money and inventoryValue for this Player. */
  netWorth: Scalars['Int']['output'];
  /** A list of objectives that were fulfilled by this Player in this Game. */
  objectives: Array<Objective>;
  /** Indicates the participation status of a player for this Game */
  participationStatus: ParticipationStatus;
  /** Player Coordinates on the map */
  position?: Maybe<Coordinates>;
  /** Respawn clock state to indicate when this player respawns (available from version "3.3"). */
  respawnClock: ClockState;
  /** Number of selfkills (suicides) for this Player in this Game. */
  selfkills: Scalars['Int']['output'];
  /** Number of structures captured by this Player in this Game. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this Player in this Game. */
  structuresDestroyed: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists received by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** The total amount of money that was earned by this player (available from version "3.2"). */
  totalMoneyEarned: Scalars['Int']['output'];
  /** A list of unit kills that happened by this Player in this Game (available from version "3.1"). */
  unitKills: Array<UnitKill>;
  /** A list of enemy kills, which were executed with a specific weapon by this Player in this Game. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
};

/** PUBG data points for a Player, aggregated for a Game. */
export type GamePlayerStatePubg = GamePlayerState & {
  __typename?: 'GamePlayerStatePubg';
  /** A list of abilities that are owned by this Player in this Game (available from version "1.8"). */
  abilities: Array<DefaultAbility>;
  /** Indicates whether the player is alive. */
  alive: Scalars['Boolean']['output'];
  /** In-game character (ie champion, class) of the Player in this Game */
  character?: Maybe<Character>;
  /** The current health of the player. */
  currentHealth: Scalars['Int']['output'];
  /** A list of damage sources (available from version "3.17"). */
  damageDealtSources: Array<DamageDealtSource>;
  /** A list of damage targets (available from version "3.17"). */
  damageDealtTargets: Array<DamageDealtTarget>;
  /** Number of deaths for this Player in this Game. */
  deaths: Scalars['Int']['output'];
  /** Indication of player acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this Player. */
  id: Scalars['ID']['output'];
  /** The Player's inventory */
  inventory: PlayerInventory;
  /** Number of enemy kill assists provided by this Player in this Game. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Player in this Game. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists received by this Player in this Game. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Player in this Game. */
  kills: Scalars['Int']['output'];
  /** Total value (worth in money) of this Player’s loadout. */
  loadoutValue: Scalars['Int']['output'];
  /** The max amount of health of the player. */
  maxHealth: Scalars['Int']['output'];
  /**
   * Amount of money this Player is holding in cash.
   * Depending on the Title this may represent in-game gold, credits, gems etc.
   */
  money: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Player in this Game (available from version "1.7"). */
  multikills: Array<Multikill>;
  /** Name of this Player. */
  name: Scalars['String']['output'];
  /** Sum of money and inventoryValue for this Player. */
  netWorth: Scalars['Int']['output'];
  /** A list of objectives that were fulfilled by this Player in this Game. */
  objectives: Array<Objective>;
  /** Indicates the participation status of a player for this Game */
  participationStatus: ParticipationStatus;
  /** Player Coordinates on the map */
  position?: Maybe<Coordinates>;
  /** Number of selfkills (suicides) for this Player in this Game. */
  selfkills: Scalars['Int']['output'];
  /** Number of structures captured by this Player in this Game. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this Player in this Game. */
  structuresDestroyed: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists received by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of unit kills that happened by this Player in this Game (available from version "3.1"). */
  unitKills: Array<UnitKill>;
  /** A list of enemy kills, which were executed with a specific weapon by this Player in this Game. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
};

/** R6 data points for a Player, aggregated for a Game */
export type GamePlayerStateR6 = GamePlayerState & {
  __typename?: 'GamePlayerStateR6';
  /** A list of abilities that are owned by this Player in this Game (available from version "1.8"). */
  abilities: Array<DefaultAbility>;
  /** Indicates whether the player is alive. */
  alive: Scalars['Boolean']['output'];
  /** In-game character (ie champion, class) of the Player in this Game */
  character?: Maybe<Character>;
  /** The current health of the player. */
  currentHealth: Scalars['Int']['output'];
  /** The amount of damage dealt. */
  damageDealt: Scalars['Int']['output'];
  /** A list of damage sources (available from version "3.17"). */
  damageDealtSources: Array<DamageDealtSource>;
  /** A list of damage targets (available from version "3.17"). */
  damageDealtTargets: Array<DamageDealtTarget>;
  /** The amount of total damage taken. */
  damageTaken: Scalars['Int']['output'];
  /** Number of deaths for this Player in this Game. */
  deaths: Scalars['Int']['output'];
  /** Indication of player acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** The amount of healing dealt by team. */
  healingDealt: Scalars['Int']['output'];
  /** The amount of healing received by team. */
  healingReceived: Scalars['Int']['output'];
  /** GRID ID of this Player. */
  id: Scalars['ID']['output'];
  /** The Player's inventory */
  inventory: PlayerInventory;
  /** Number of enemy kill assists provided by this Player in this Game. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Player in this Game. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists received by this Player in this Game. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Player in this Game. */
  kills: Scalars['Int']['output'];
  /** Number of times of knocking down an enemy for this player (available from version "3.9"). */
  knockdownsGiven: Scalars['Int']['output'];
  /** Number of times of being knocked down for this player (available from version "3.9"). */
  knockdownsReceived: Scalars['Int']['output'];
  /** Total value (worth in money) of this Player’s loadout. */
  loadoutValue: Scalars['Int']['output'];
  /** The max amount of health of the player. */
  maxHealth: Scalars['Int']['output'];
  /**
   * Amount of money this Player is holding in cash.
   * Depending on the Title this may represent in-game gold, credits, gems etc.
   */
  money: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Player in this Game (available from version "1.7"). */
  multikills: Array<Multikill>;
  /** Name of this Player. */
  name: Scalars['String']['output'];
  /** Sum of money and inventoryValue for this Player. */
  netWorth: Scalars['Int']['output'];
  /** A list of objectives that were fulfilled by this Player in this Game. */
  objectives: Array<Objective>;
  /** Indicates the participation status of a player for this Game */
  participationStatus: ParticipationStatus;
  /** Player Coordinates on the map */
  position?: Maybe<Coordinates>;
  /** The amount of damage dealt to self. */
  selfdamageDealt: Scalars['Int']['output'];
  /** The amount of damage taken from self. */
  selfdamageTaken: Scalars['Int']['output'];
  /** Number of selfkills (suicides) for this Player in this Game. */
  selfkills: Scalars['Int']['output'];
  /** Number of structures captured by this Player in this Game. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this Player in this Game. */
  structuresDestroyed: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /** The amount of damage dealt to team. */
  teamdamageDealt: Scalars['Int']['output'];
  /** The amount of damage taken from team. */
  teamdamageTaken: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists received by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of unit kills that happened by this Player in this Game (available from version "3.1"). */
  unitKills: Array<UnitKill>;
  /** A list of enemy kills, which were executed with a specific weapon by this Player in this Game. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
};

/** Valorant data points for a Player, aggregated for a Game. */
export type GamePlayerStateValorant = GamePlayerState & {
  __typename?: 'GamePlayerStateValorant';
  /** A list of abilities that are owned by this Player in this Game (available from version "1.8"). */
  abilities: Array<AbilityValorant>;
  /** Indicates whether the player is alive (available from version "1.9"). */
  alive: Scalars['Boolean']['output'];
  /** In-game character (ie champion, class) of the Player in this Game */
  character?: Maybe<Character>;
  /** The amount of current armor (available from version "1.9"). */
  currentArmor: Scalars['Int']['output'];
  /** The current health of the player (available from version "1.9"). */
  currentHealth: Scalars['Int']['output'];
  /** Number of deaths for this Player in this Game. */
  deaths: Scalars['Int']['output'];
  /** Indication of player acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this Player. */
  id: Scalars['ID']['output'];
  /** The Player's inventory */
  inventory: PlayerInventory;
  /** Number of enemy kill assists provided by this Player in this Game. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Player in this Game. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists received by this Player in this Game. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Player in this Game. */
  kills: Scalars['Int']['output'];
  /** Total value (worth in money) of this Player’s loadout. */
  loadoutValue: Scalars['Int']['output'];
  /** The max amount of health of the player (available from version "1.9"). */
  maxHealth: Scalars['Int']['output'];
  /**
   * Amount of money this Player is holding in cash.
   * Depending on the Title this may represent in-game gold, credits, gems etc.
   */
  money: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Player in this Game (available from version "1.7"). */
  multikills: Array<Multikill>;
  /** Name of this Player. */
  name: Scalars['String']['output'];
  /** Sum of money and inventoryValue for this Player. */
  netWorth: Scalars['Int']['output'];
  /** A list of objectives that were fulfilled by this Player in this Game. */
  objectives: Array<Objective>;
  /** Indicates the participation status of a player for this Game */
  participationStatus: ParticipationStatus;
  /** Player Coordinates on the map */
  position?: Maybe<Coordinates>;
  /** Number of selfkills (suicides) for this Player in this Game. */
  selfkills: Scalars['Int']['output'];
  /** Number of structures captured by this Player in this Game. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this Player in this Game. */
  structuresDestroyed: Scalars['Int']['output'];
  /** Number of team headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists received by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** Number of ultimate points of this Player. (available from version "3.20") */
  ultimatePoints: Scalars['Int']['output'];
  /** A list of unit kills that happened by this Player in this Game (available from version "3.1"). */
  unitKills: Array<UnitKill>;
  /** A list of enemy kills, which were executed with a specific weapon by this Player in this Game. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this Player in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
};

/** Data points for a Game. */
export type GameState = {
  __typename?: 'GameState';
  /** Clock state to indicate time of the game (available from version "1.3") */
  clock?: Maybe<ClockState>;
  /** A list of DraftAction, containing information about draft actions in this Game. */
  draftActions: Array<DraftAction>;
  /** Duration of the Game (available from version "3.16"). */
  duration: Scalars['Duration']['output'];
  /** A list of ExternalLink, containing information about links to externally provided IDs (available from version "1.2"). */
  externalLinks: Array<ExternalLink>;
  /** Indicates whether this Game has finished. */
  finished: Scalars['Boolean']['output'];
  /** GRID ID of this Game. */
  id: Scalars['ID']['output'];
  /** Information on the map of this Game. */
  map: MapState;
  /** A list of NonPlayerCharacterState, containing information about the state of NPCs in this Game. */
  nonPlayerCharacters: Array<NonPlayerCharacterState>;
  /** Indicates whether this Game is paused. */
  paused: Scalars['Boolean']['output'];
  /** A list of SegmentStates, containing information of the segments in this Game (available from version "1.4"). */
  segments: Array<SegmentState>;
  /** SequenceNumber of the Game state update. */
  sequenceNumber: Scalars['Int']['output'];
  /** Indicates whether this Game has started. */
  started: Scalars['Boolean']['output'];
  /** DateTime value when this Game was started (available from version "3.7"). */
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  /** A list of StructureState, containing information about the structures that are available in this Game. */
  structures: Array<StructureState>;
  /** A list of GameTeamState, containing information on the teams participating in this Game. */
  teams: Array<GameTeamState>;
  /** titleVersion indicates the game version when available (available from version "3.12") */
  titleVersion?: Maybe<TitleVersion>;
  /** type indicates the game type (available from version "3.21") */
  type?: Maybe<GameType>;
};

/** Generic filter that can be used to query for Games that have/haven’t started and are/aren’t finished. */
export type GameStateFilter = {
  /** Filter on whether a Game has finished. */
  finished?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter on whether a Game has started. */
  started?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Data points for a Team, aggregated for a Game. */
export type GameTeamState = {
  /** Number of deaths for this Team in this Game. */
  deaths: Scalars['Int']['output'];
  /** Indication of team acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** GRID ID of this Team. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this Team in this Game. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Team in this Game. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists from a Player, received by this Team in this Game. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Team in this Game. */
  kills: Scalars['Int']['output'];
  /** Total value (worth in money) of all the loadouts owned by Players that are members of this Team. */
  loadoutValue: Scalars['Int']['output'];
  /**
   * Amount of money this Team is holding in cash.
   * Depending on the Title this may represent in-game gold, credits, gems etc.
   */
  money: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Team in this Game (available from version "1.7"). */
  multikills: Array<Multikill>;
  /** Name of this Team. */
  name: Scalars['String']['output'];
  /** Sum of money and inventoryValue for this Team. */
  netWorth: Scalars['Int']['output'];
  /** A list of objectives that were fulfilled by this Team in this Game. */
  objectives: Array<Objective>;
  /** A list of GamePlayerState, containing information about the Players that are members of this Team. */
  players: Array<GamePlayerState>;
  /** Score for this Team in this Game. This is used in the Score After format. */
  score: Scalars['Int']['output'];
  /** Number of selfkills (suicides) for this Team in this Game. */
  selfkills: Scalars['Int']['output'];
  /** Side that this Team has taken in this Game ie Red or Blue, Terrorists or Counter-Terrorists. */
  side: Scalars['String']['output'];
  /** Number of structures captured by this Team in this Game. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this Team in this Game. */
  structuresDestroyed: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists from a Player, received by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of unit kills that happened by this Team in this Game (available from version "3.1"). */
  unitKills: Array<UnitKill>;
  /** A list of enemy kills, which were executed with a specific weapon by this Team in this Game. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
  /** Indicates whether this Team has won this Game. */
  won: Scalars['Boolean']['output'];
};

/** CS2 data points for a Team, aggregated for a Game. */
export type GameTeamStateCs2 = GameTeamState & {
  __typename?: 'GameTeamStateCs2';
  /** The amount of damage dealt. */
  damageDealt: Scalars['Int']['output'];
  /** A list of damage sources (available from version "3.17"). */
  damageDealtSources: Array<DamageDealtSource>;
  /** A list of damage targets (available from version "3.17"). */
  damageDealtTargets: Array<DamageDealtTarget>;
  /** The amount of total damage taken. */
  damageTaken: Scalars['Int']['output'];
  /** Number of deaths for this Team in this Game. */
  deaths: Scalars['Int']['output'];
  /** Indication of team acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this Team. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this Team in this Game. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Team in this Game. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists from a Player, received by this Team in this Game. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Team in this Game. */
  kills: Scalars['Int']['output'];
  /** Total value (worth in money) of all the loadouts owned by Players that are members of this Team. */
  loadoutValue: Scalars['Int']['output'];
  /**
   * Amount of money this Team is holding in cash.
   * Depending on the Title this may represent in-game gold, credits, gems etc.
   */
  money: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Team in this Game (available from version "1.7"). */
  multikills: Array<Multikill>;
  /** Name of this Team. */
  name: Scalars['String']['output'];
  /** Sum of money and inventoryValue for this Team. */
  netWorth: Scalars['Int']['output'];
  /** A list of objectives that were fulfilled by this Team in this Game. */
  objectives: Array<Objective>;
  /** A list of GamePlayerState, containing information about the Players that are members of this Team. */
  players: Array<GamePlayerState>;
  /** Score for this Team in this Game. This is used in the Score After format. */
  score: Scalars['Int']['output'];
  /** The amount of damage dealt to self. */
  selfdamageDealt: Scalars['Int']['output'];
  /** The amount of damage taken from self. */
  selfdamageTaken: Scalars['Int']['output'];
  /** Number of selfkills (suicides) for this Team in this Game. */
  selfkills: Scalars['Int']['output'];
  /** Side that this Team has taken in this Game ie Red or Blue, Terrorists or Counter-Terrorists. */
  side: Scalars['String']['output'];
  /** Number of structures captured by this Team in this Game. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this Team in this Game. */
  structuresDestroyed: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /** The amount of damage dealt to team. */
  teamdamageDealt: Scalars['Int']['output'];
  /** The amount of damage taken from team. */
  teamdamageTaken: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists from a Player, received by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of unit kills that happened by this Team in this Game (available from version "3.1"). */
  unitKills: Array<UnitKill>;
  /** A list of enemy kills, which were executed with a specific weapon by this Team in this Game. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
  /** Indicates whether this Team has won this Game. */
  won: Scalars['Boolean']['output'];
};

/** CSGO data points for a Team, aggregated for a Game. */
export type GameTeamStateCsgo = GameTeamState & {
  __typename?: 'GameTeamStateCsgo';
  /** The amount of damage dealt. */
  damageDealt: Scalars['Int']['output'];
  /** A list of damage sources (available from version "3.17"). */
  damageDealtSources: Array<DamageDealtSource>;
  /** A list of damage targets (available from version "3.17"). */
  damageDealtTargets: Array<DamageDealtTarget>;
  /** The amount of total damage taken. */
  damageTaken: Scalars['Int']['output'];
  /** Number of deaths for this Team in this Game. */
  deaths: Scalars['Int']['output'];
  /** Indication of team acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this Team. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this Team in this Game. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Team in this Game. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists from a Player, received by this Team in this Game. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Team in this Game. */
  kills: Scalars['Int']['output'];
  /** Total value (worth in money) of all the loadouts owned by Players that are members of this Team. */
  loadoutValue: Scalars['Int']['output'];
  /**
   * Amount of money this Team is holding in cash.
   * Depending on the Title this may represent in-game gold, credits, gems etc.
   */
  money: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Team in this Game (available from version "1.7"). */
  multikills: Array<Multikill>;
  /** Name of this Team. */
  name: Scalars['String']['output'];
  /** Sum of money and inventoryValue for this Team. */
  netWorth: Scalars['Int']['output'];
  /** A list of objectives that were fulfilled by this Team in this Game. */
  objectives: Array<Objective>;
  /** A list of GamePlayerState, containing information about the Players that are members of this Team. */
  players: Array<GamePlayerState>;
  /** Score for this Team in this Game. This is used in the Score After format. */
  score: Scalars['Int']['output'];
  /** The amount of damage dealt to self. */
  selfdamageDealt: Scalars['Int']['output'];
  /** The amount of damage taken from self. */
  selfdamageTaken: Scalars['Int']['output'];
  /** Number of selfkills (suicides) for this Team in this Game. */
  selfkills: Scalars['Int']['output'];
  /** Side that this Team has taken in this Game ie Red or Blue, Terrorists or Counter-Terrorists. */
  side: Scalars['String']['output'];
  /** Number of structures captured by this Team in this Game. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this Team in this Game. */
  structuresDestroyed: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /** The amount of damage dealt to team. */
  teamdamageDealt: Scalars['Int']['output'];
  /** The amount of damage taken from team. */
  teamdamageTaken: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists from a Player, received by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of unit kills that happened by this Team in this Game (available from version "3.1"). */
  unitKills: Array<UnitKill>;
  /** A list of enemy kills, which were executed with a specific weapon by this Team in this Game. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
  /** Indicates whether this Team has won this Game. */
  won: Scalars['Boolean']['output'];
};

export type GameTeamStateDefault = GameTeamState & {
  __typename?: 'GameTeamStateDefault';
  /** Number of deaths for this Team in this Game. */
  deaths: Scalars['Int']['output'];
  /** Indication of team acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this Team. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this Team in this Game. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Team in this Game. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists from a Player, received by this Team in this Game. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Team in this Game. */
  kills: Scalars['Int']['output'];
  /** Total value (worth in money) of all the loadouts owned by Players that are members of this Team. */
  loadoutValue: Scalars['Int']['output'];
  /**
   * Amount of money this Team is holding in cash.
   * Depending on the Title this may represent in-game gold, credits, gems etc.
   */
  money: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Team in this Game (available from version "1.7"). */
  multikills: Array<Multikill>;
  /** Name of this Team. */
  name: Scalars['String']['output'];
  /** Sum of money and inventoryValue for this Team. */
  netWorth: Scalars['Int']['output'];
  /** A list of objectives that were fulfilled by this Team in this Game. */
  objectives: Array<Objective>;
  /** A list of GamePlayerState, containing information about the Players that are members of this Team. */
  players: Array<GamePlayerState>;
  /** Score for this Team in this Game. This is used in the Score After format. */
  score: Scalars['Int']['output'];
  /** Number of selfkills (suicides) for this Team in this Game. */
  selfkills: Scalars['Int']['output'];
  /** Side that this Team has taken in this Game ie Red or Blue, Terrorists or Counter-Terrorists. */
  side: Scalars['String']['output'];
  /** Number of structures captured by this Team in this Game. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this Team in this Game. */
  structuresDestroyed: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists from a Player, received by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of unit kills that happened by this Team in this Game (available from version "3.1"). */
  unitKills: Array<UnitKill>;
  /** A list of enemy kills, which were executed with a specific weapon by this Team in this Game. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
  /** Indicates whether this Team has won this Game. */
  won: Scalars['Boolean']['output'];
};

/** Dota data points for a Team, aggregated for a Game. */
export type GameTeamStateDota = GameTeamState & {
  __typename?: 'GameTeamStateDota';
  /** Number of deaths for this Team in this Game. */
  deaths: Scalars['Int']['output'];
  /** The amount of experience points gathered by this team. */
  experiencePoints: Scalars['Int']['output'];
  /** Indication of team acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this Team. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this Team in this Game. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Team in this Game. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists from a Player, received by this Team in this Game. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Team in this Game. */
  kills: Scalars['Int']['output'];
  /** Total value (worth in money) of all the loadouts owned by Players that are members of this Team. */
  loadoutValue: Scalars['Int']['output'];
  /**
   * Amount of money this Team is holding in cash.
   * Depending on the Title this may represent in-game gold, credits, gems etc.
   */
  money: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Team in this Game (available from version "1.7"). */
  multikills: Array<Multikill>;
  /** Name of this Team. */
  name: Scalars['String']['output'];
  /** Sum of money and inventoryValue for this Team. */
  netWorth: Scalars['Int']['output'];
  /** A list of objectives that were fulfilled by this Team in this Game. */
  objectives: Array<Objective>;
  /** A list of GamePlayerState, containing information about the Players that are members of this Team. */
  players: Array<GamePlayerState>;
  /** Score for this Team in this Game. This is used in the Score After format. */
  score: Scalars['Int']['output'];
  /** Number of selfkills (suicides) for this Team in this Game. */
  selfkills: Scalars['Int']['output'];
  /** Side that this Team has taken in this Game ie Red or Blue, Terrorists or Counter-Terrorists. */
  side: Scalars['String']['output'];
  /** Number of structures captured by this Team in this Game. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this Team in this Game. */
  structuresDestroyed: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists from a Player, received by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of unit kills that happened by this Team in this Game (available from version "3.1"). */
  unitKills: Array<UnitKill>;
  /** A list of enemy kills, which were executed with a specific weapon by this Team in this Game. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
  /** Indicates whether this Team has won this Game. */
  won: Scalars['Boolean']['output'];
};

/** LoL data points for a Team, aggregated for a Game. */
export type GameTeamStateLol = GameTeamState & {
  __typename?: 'GameTeamStateLol';
  /** Number of deaths for this Team in this Game. */
  deaths: Scalars['Int']['output'];
  /** The amount of experience points gathered by this team. */
  experiencePoints: Scalars['Int']['output'];
  /** Indication of team acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this Team. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this Team in this Game. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Team in this Game. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists from a Player, received by this Team in this Game. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Team in this Game. */
  kills: Scalars['Int']['output'];
  /** Total value (worth in money) of all the loadouts owned by Players that are members of this Team. */
  loadoutValue: Scalars['Int']['output'];
  /**
   * Amount of money this Team is holding in cash.
   * Depending on the Title this may represent in-game gold, credits, gems etc.
   */
  money: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Team in this Game (available from version "1.7"). */
  multikills: Array<Multikill>;
  /** Name of this Team. */
  name: Scalars['String']['output'];
  /** Sum of money and inventoryValue for this Team. */
  netWorth: Scalars['Int']['output'];
  /** A list of objectives that were fulfilled by this Team in this Game. */
  objectives: Array<Objective>;
  /** A list of GamePlayerState, containing information about the Players that are members of this Team. */
  players: Array<GamePlayerState>;
  /** Score for this Team in this Game. This is used in the Score After format. */
  score: Scalars['Int']['output'];
  /** Number of selfkills (suicides) for this Team in this Game. */
  selfkills: Scalars['Int']['output'];
  /** Side that this Team has taken in this Game ie Red or Blue, Terrorists or Counter-Terrorists. */
  side: Scalars['String']['output'];
  /** Number of structures captured by this Team in this Game. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this Team in this Game. */
  structuresDestroyed: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists from a Player, received by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** The total amount of money that was earned by this team (available from version "3.2"). */
  totalMoneyEarned: Scalars['Int']['output'];
  /** A list of unit kills that happened by this Team in this Game (available from version "3.1"). */
  unitKills: Array<UnitKill>;
  /** A list of enemy kills, which were executed with a specific weapon by this Team in this Game. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
  /** Indicates whether this Team has won this Game. */
  won: Scalars['Boolean']['output'];
};

/** PUBG data points for a Team, aggregated for a Game. */
export type GameTeamStatePubg = GameTeamState & {
  __typename?: 'GameTeamStatePubg';
  /** A list of damage sources (available from version "3.17"). */
  damageDealtSources: Array<DamageDealtSource>;
  /** A list of damage targets (available from version "3.17"). */
  damageDealtTargets: Array<DamageDealtTarget>;
  /** Number of deaths for this Team in this Game. */
  deaths: Scalars['Int']['output'];
  /** Indication of team acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this Team. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this Team in this Game. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Team in this Game. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists from a Player, received by this Team in this Game. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Team in this Game. */
  kills: Scalars['Int']['output'];
  /** Total value (worth in money) of all the loadouts owned by Players that are members of this Team. */
  loadoutValue: Scalars['Int']['output'];
  /**
   * Amount of money this Team is holding in cash.
   * Depending on the Title this may represent in-game gold, credits, gems etc.
   */
  money: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Team in this Game (available from version "1.7"). */
  multikills: Array<Multikill>;
  /** Name of this Team. */
  name: Scalars['String']['output'];
  /** Sum of money and inventoryValue for this Team. */
  netWorth: Scalars['Int']['output'];
  /** A list of objectives that were fulfilled by this Team in this Game. */
  objectives: Array<Objective>;
  /** A list of GamePlayerState, containing information about the Players that are members of this Team. */
  players: Array<GamePlayerState>;
  /** Score for this Team in this Game. This is used in the Score After format. */
  score: Scalars['Int']['output'];
  /** Number of selfkills (suicides) for this Team in this Game. */
  selfkills: Scalars['Int']['output'];
  /** Side that this Team has taken in this Game ie Red or Blue, Terrorists or Counter-Terrorists. */
  side: Scalars['String']['output'];
  /** Number of structures captured by this Team in this Game. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this Team in this Game. */
  structuresDestroyed: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists from a Player, received by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of unit kills that happened by this Team in this Game (available from version "3.1"). */
  unitKills: Array<UnitKill>;
  /** A list of enemy kills, which were executed with a specific weapon by this Team in this Game. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
  /** Indicates whether this Team has won this Game. */
  won: Scalars['Boolean']['output'];
};

export type GameTeamStateR6 = GameTeamState & {
  __typename?: 'GameTeamStateR6';
  /** The amount of damage dealt. */
  damageDealt: Scalars['Int']['output'];
  /** A list of damage sources (available from version "3.17"). */
  damageDealtSources: Array<DamageDealtSource>;
  /** A list of damage targets (available from version "3.17"). */
  damageDealtTargets: Array<DamageDealtTarget>;
  /** The amount of total damage taken. */
  damageTaken: Scalars['Int']['output'];
  /** Number of deaths for this Team in this Game. */
  deaths: Scalars['Int']['output'];
  /** Indication of team acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** The amount of healing dealt by team. */
  healingDealt: Scalars['Int']['output'];
  /** The amount of healing received by team. */
  healingReceived: Scalars['Int']['output'];
  /** GRID ID of this Team. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this Team in this Game. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Team in this Game. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists from a Player, received by this Team in this Game. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Team in this Game. */
  kills: Scalars['Int']['output'];
  /** Number of times of knocking down an enemy for this team (available from version "3.9"). */
  knockdownsGiven: Scalars['Int']['output'];
  /** Number of times of being knocked down for this team (available from version "3.9"). */
  knockdownsReceived: Scalars['Int']['output'];
  /** Total value (worth in money) of all the loadouts owned by Players that are members of this Team. */
  loadoutValue: Scalars['Int']['output'];
  /**
   * Amount of money this Team is holding in cash.
   * Depending on the Title this may represent in-game gold, credits, gems etc.
   */
  money: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Team in this Game (available from version "1.7"). */
  multikills: Array<Multikill>;
  /** Name of this Team. */
  name: Scalars['String']['output'];
  /** Sum of money and inventoryValue for this Team. */
  netWorth: Scalars['Int']['output'];
  /** A list of objectives that were fulfilled by this Team in this Game. */
  objectives: Array<Objective>;
  /** A list of GamePlayerState, containing information about the Players that are members of this Team. */
  players: Array<GamePlayerState>;
  /** Score for this Team in this Game. This is used in the Score After format. */
  score: Scalars['Int']['output'];
  /** The amount of damage dealt to self. */
  selfdamageDealt: Scalars['Int']['output'];
  /** The amount of damage taken from self. */
  selfdamageTaken: Scalars['Int']['output'];
  /** Number of selfkills (suicides) for this Team in this Game. */
  selfkills: Scalars['Int']['output'];
  /** Side that this Team has taken in this Game ie Red or Blue, Terrorists or Counter-Terrorists. */
  side: Scalars['String']['output'];
  /** Number of structures captured by this Team in this Game. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this Team in this Game. */
  structuresDestroyed: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /** The amount of damage dealt to team. */
  teamdamageDealt: Scalars['Int']['output'];
  /** The amount of damage taken from team. */
  teamdamageTaken: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists from a Player, received by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of unit kills that happened by this Team in this Game (available from version "3.1"). */
  unitKills: Array<UnitKill>;
  /** A list of enemy kills, which were executed with a specific weapon by this Team in this Game. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
  /** Indicates whether this Team has won this Game. */
  won: Scalars['Boolean']['output'];
};

/** Valorant data points for a Team, aggregated for a Game. */
export type GameTeamStateValorant = GameTeamState & {
  __typename?: 'GameTeamStateValorant';
  /** Number of deaths for this Team in this Game. */
  deaths: Scalars['Int']['output'];
  /** Indication of team acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this Team. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this Team in this Game. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Team in this Game. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists from a Player, received by this Team in this Game. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Team in this Game. */
  kills: Scalars['Int']['output'];
  /** Total value (worth in money) of all the loadouts owned by Players that are members of this Team. */
  loadoutValue: Scalars['Int']['output'];
  /**
   * Amount of money this Team is holding in cash.
   * Depending on the Title this may represent in-game gold, credits, gems etc.
   */
  money: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Team in this Game (available from version "1.7"). */
  multikills: Array<Multikill>;
  /** Name of this Team. */
  name: Scalars['String']['output'];
  /** Sum of money and inventoryValue for this Team. */
  netWorth: Scalars['Int']['output'];
  /** A list of objectives that were fulfilled by this Team in this Game. */
  objectives: Array<Objective>;
  /** A list of GamePlayerState, containing information about the Players that are members of this Team. */
  players: Array<GamePlayerState>;
  /** Score for this Team in this Game. This is used in the Score After format. */
  score: Scalars['Int']['output'];
  /** Number of selfkills (suicides) for this Team in this Game. */
  selfkills: Scalars['Int']['output'];
  /** Side that this Team has taken in this Game ie Red or Blue, Terrorists or Counter-Terrorists. */
  side: Scalars['String']['output'];
  /** Number of structures captured by this Team in this Game. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this Team in this Game. */
  structuresDestroyed: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists from a Player, received by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of unit kills that happened by this Team in this Game (available from version "3.1"). */
  unitKills: Array<UnitKill>;
  /** A list of enemy kills, which were executed with a specific weapon by this Team in this Game. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this Team in this Game.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
  /** Indicates whether this Team has won this Game. */
  won: Scalars['Boolean']['output'];
};

/** The type of game. */
export enum GameType {
  /** A competitive non-esports series. */
  Competitive = 'COMPETITIVE',
  /** An esports game. */
  Esports = 'ESPORTS',
  /** A regular non-competitive game. */
  Regular = 'REGULAR',
  /** A practice competitive game. */
  Scrim = 'SCRIM'
}

/** An item stack that is part of a player's inventory. */
export type ItemStack = {
  __typename?: 'ItemStack';
  /** The amount of equipped items. */
  equipped: Scalars['Int']['output'];
  /** GRID ID for this item. */
  id: Scalars['ID']['output'];
  /** The name of this item. */
  name: Scalars['String']['output'];
  /** The amount of items in this stack (includes equipped and stashed items). */
  quantity: Scalars['Int']['output'];
  /** The amount of stashed items. */
  stashed: Scalars['Int']['output'];
};

/** Kill assist information. */
export type KillAssistFromPlayer = {
  __typename?: 'KillAssistFromPlayer';
  /** GRID ID for this assist. */
  id: Scalars['ID']['output'];
  /** Number of kill assists received from the assisting Player. */
  killAssistsReceived: Scalars['Int']['output'];
  /** GRID Player ID assisting. */
  playerId: Scalars['ID']['output'];
};

/** Map information */
export type MapState = {
  __typename?: 'MapState';
  /** Map Bounds information */
  bounds?: Maybe<Bounds>;
  /** GRID Map ID. */
  id: Scalars['String']['output'];
  /** Map name */
  name: Scalars['String']['output'];
};

/** A multikill caused by a player or a team (available from version "1.7"). */
export type Multikill = {
  __typename?: 'Multikill';
  /** Amount of times a specific multikill has happened */
  count: Scalars['Int']['output'];
  /** GRID ID for this multikill */
  id: Scalars['ID']['output'];
  /** The type of multikill */
  numberOfKills: Scalars['Int']['output'];
};

/** Data points for Non Playing Characters (NPCs). */
export type NonPlayerCharacterState = {
  __typename?: 'NonPlayerCharacterState';
  /** Indicates whether the NPC is alive. */
  alive: Scalars['Boolean']['output'];
  /** GRID ID of the NPC. */
  id: Scalars['ID']['output'];
  /** NPC Coordinates on the map. */
  position?: Maybe<Coordinates>;
  /** Respawn clock state to indicate when the NPC respawns (available from version "1.3"). */
  respawnClock?: Maybe<ClockState>;
  /** Side that controls the NPC */
  side: Scalars['String']['output'];
  /** Type of the NPC */
  type: Scalars['String']['output'];
};

/** An objective that shall be finished. */
export type Objective = {
  __typename?: 'Objective';
  /** Mark that the objective was completed for the first time on the current level(from version 3.11). */
  completedFirst: Scalars['Boolean']['output'];
  /** Amount of times this objective was completed. */
  completionCount: Scalars['Int']['output'];
  /** GRID ID for this objective. */
  id: Scalars['ID']['output'];
  /** The objective type. */
  type: Scalars['String']['output'];
};

/** Participation status of an entity (ie Player). */
export enum ParticipationStatus {
  /** Entity (ie Player) actively participating. */
  Active = 'active',
  /** Entity (ie Player) not actively participating anymore. */
  Inactive = 'inactive'
}

/** The inventory of a Player. */
export type PlayerInventory = {
  __typename?: 'PlayerInventory';
  /** The items that are contained in the Player's inventory. */
  items: Array<ItemStack>;
};

/** All available GraphQL Queries. */
export type Query = {
  __typename?: 'Query';
  _service: _Service;
  /** Query the SeriesState of the latest series that this player, given by its ID, has participated in. */
  latestSeriesStateByPlayerId?: Maybe<SeriesState>;
  /** Query the SeriesState of a specified Series ID. */
  seriesState?: Maybe<SeriesState>;
};


/** All available GraphQL Queries. */
export type QueryLatestSeriesStateByPlayerIdArgs = {
  id: Scalars['ID']['input'];
};


/** All available GraphQL Queries. */
export type QuerySeriesStateArgs = {
  id: Scalars['ID']['input'];
};

/** Data points for a Player, aggregated for a Segment (available from version "1.4") */
export type SegmentPlayerState = {
  /** Number of deaths for this Player in this Segment. */
  deaths: Scalars['Int']['output'];
  /** Indication of player acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** GRID ID of this Player. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this Player in this Segment. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Player in this Segment. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists received by this Player in this Segment. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Player in this Segment. */
  kills: Scalars['Int']['output'];
  /** Name of this Player. */
  name: Scalars['String']['output'];
  /** A list of objectives that were fulfilled by this Player in this Segment. */
  objectives: Array<Objective>;
  /** Indicates the participation status of a player for this Segment (available from version "3.8"). */
  participationStatus: ParticipationStatus;
  /** Number of selfkills (suicides) for this Player in this Segment. */
  selfkills: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Player in this Segment.
   * A teamkill is the occurrence of killing an allied member
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Player in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists received by this Player in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Player in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of enemy kills, which were executed with a specific weapon by this Player in this Segment. */
  weaponKills: Array<WeaponKill>;
  /** A list of team kills, which were executed with a specific weapon by this Player in this Segment. */
  weaponTeamkills: Array<WeaponKill>;
};

/** CS2 data points for a Player, aggregated for a Segment. */
export type SegmentPlayerStateCs2 = SegmentPlayerState & {
  __typename?: 'SegmentPlayerStateCs2';
  /** Indicates whether the player is alive. */
  alive: Scalars['Boolean']['output'];
  /** The amount of current armor. */
  currentArmor: Scalars['Int']['output'];
  /** The current health of the player. */
  currentHealth: Scalars['Int']['output'];
  /** The amount of damage dealt. */
  damageDealt: Scalars['Int']['output'];
  /** A list of damage sources (available from version "3.17"). */
  damageDealtSources: Array<DamageDealtSource>;
  /** A list of damage targets (available from version "3.17"). */
  damageDealtTargets: Array<DamageDealtTarget>;
  /** The amount of total damage taken. */
  damageTaken: Scalars['Int']['output'];
  /** Number of deaths for this Player in this Segment. */
  deaths: Scalars['Int']['output'];
  /** A list of ExternalLink, containing information about links to externally provided IDs. */
  externalLinks: Array<ExternalLink>;
  /** Indication of player acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this Player. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this Player in this Segment. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Player in this Segment. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists received by this Player in this Segment. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Player in this Segment. */
  kills: Scalars['Int']['output'];
  /** The max amount of health of the player. */
  maxHealth: Scalars['Int']['output'];
  /** Name of this Player. */
  name: Scalars['String']['output'];
  /** A list of objectives that were fulfilled by this Player in this Segment. */
  objectives: Array<Objective>;
  /** Indicates the participation status of a player for this Segment (available from version "3.8"). */
  participationStatus: ParticipationStatus;
  /** The amount of damage dealt to self. */
  selfdamageDealt: Scalars['Int']['output'];
  /** The amount of damage taken from self. */
  selfdamageTaken: Scalars['Int']['output'];
  /** Number of selfkills (suicides) for this Player in this Segment. */
  selfkills: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /** The amount of damage dealt to team. */
  teamdamageDealt: Scalars['Int']['output'];
  /** The amount of damage taken from team. */
  teamdamageTaken: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Player in this Segment.
   * A teamkill is the occurrence of killing an allied member
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Player in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists received by this Player in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Player in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of enemy kills, which were executed with a specific weapon by this Player in this Segment. */
  weaponKills: Array<WeaponKill>;
  /** A list of team kills, which were executed with a specific weapon by this Player in this Segment. */
  weaponTeamkills: Array<WeaponKill>;
};

/** CSGO data points for a Player, aggregated for a Segment. */
export type SegmentPlayerStateCsgo = SegmentPlayerState & {
  __typename?: 'SegmentPlayerStateCsgo';
  /** Indicates whether the player is alive. */
  alive: Scalars['Boolean']['output'];
  /** The amount of current armor. */
  currentArmor: Scalars['Int']['output'];
  /** The current health of the player. */
  currentHealth: Scalars['Int']['output'];
  /** The amount of damage dealt. */
  damageDealt: Scalars['Int']['output'];
  /** A list of damage sources (available from version "3.17"). */
  damageDealtSources: Array<DamageDealtSource>;
  /** A list of damage targets (available from version "3.17"). */
  damageDealtTargets: Array<DamageDealtTarget>;
  /** The amount of total damage taken. */
  damageTaken: Scalars['Int']['output'];
  /** Number of deaths for this Player in this Segment. */
  deaths: Scalars['Int']['output'];
  /** A list of ExternalLink, containing information about links to externally provided IDs (available from version "2.2"). */
  externalLinks: Array<ExternalLink>;
  /** Indication of player acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this Player. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this Player in this Segment. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Player in this Segment. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists received by this Player in this Segment. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Player in this Segment. */
  kills: Scalars['Int']['output'];
  /** The max amount of health of the player. */
  maxHealth: Scalars['Int']['output'];
  /** Name of this Player. */
  name: Scalars['String']['output'];
  /** A list of objectives that were fulfilled by this Player in this Segment. */
  objectives: Array<Objective>;
  /** Indicates the participation status of a player for this Segment (available from version "3.8"). */
  participationStatus: ParticipationStatus;
  /** The amount of damage dealt to self. */
  selfdamageDealt: Scalars['Int']['output'];
  /** The amount of damage taken from self. */
  selfdamageTaken: Scalars['Int']['output'];
  /** Number of selfkills (suicides) for this Player in this Segment. */
  selfkills: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /** The amount of damage dealt to team. */
  teamdamageDealt: Scalars['Int']['output'];
  /** The amount of damage taken from team. */
  teamdamageTaken: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Player in this Segment.
   * A teamkill is the occurrence of killing an allied member
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Player in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists received by this Player in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Player in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of enemy kills, which were executed with a specific weapon by this Player in this Segment. */
  weaponKills: Array<WeaponKill>;
  /** A list of team kills, which were executed with a specific weapon by this Player in this Segment. */
  weaponTeamkills: Array<WeaponKill>;
};

/** Deftault data points for a Player, aggregated for a Segment */
export type SegmentPlayerStateDefault = SegmentPlayerState & {
  __typename?: 'SegmentPlayerStateDefault';
  /** Number of deaths for this Player in this Segment. */
  deaths: Scalars['Int']['output'];
  /** Indication of player acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this Player. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this Player in this Segment. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Player in this Segment. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists received by this Player in this Segment. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Player in this Segment. */
  kills: Scalars['Int']['output'];
  /** Name of this Player. */
  name: Scalars['String']['output'];
  /** A list of objectives that were fulfilled by this Player in this Segment. */
  objectives: Array<Objective>;
  /** Indicates the participation status of a player for this Segment (available from version "3.8"). */
  participationStatus: ParticipationStatus;
  /** Number of selfkills (suicides) for this Player in this Segment. */
  selfkills: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Player in this Segment.
   * A teamkill is the occurrence of killing an allied member
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Player in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists received by this Player in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Player in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of enemy kills, which were executed with a specific weapon by this Player in this Segment. */
  weaponKills: Array<WeaponKill>;
  /** A list of team kills, which were executed with a specific weapon by this Player in this Segment. */
  weaponTeamkills: Array<WeaponKill>;
};

/** R6 data points for a Player, aggregated for a Segment */
export type SegmentPlayerStateR6 = SegmentPlayerState & {
  __typename?: 'SegmentPlayerStateR6';
  /** Indicates whether the player is alive. */
  alive: Scalars['Boolean']['output'];
  /** The current health of the player. */
  currentHealth: Scalars['Int']['output'];
  /** The amount of damage dealt. */
  damageDealt: Scalars['Int']['output'];
  /** A list of damage sources (available from version "3.17"). */
  damageDealtSources: Array<DamageDealtSource>;
  /** A list of damage targets (available from version "3.17"). */
  damageDealtTargets: Array<DamageDealtTarget>;
  /** The amount of total damage taken. */
  damageTaken: Scalars['Int']['output'];
  /** Number of deaths for this Player in this Segment. */
  deaths: Scalars['Int']['output'];
  /** Indication of player acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** The amount of healing dealt by team. */
  healingDealt: Scalars['Int']['output'];
  /** The amount of healing received by team. */
  healingReceived: Scalars['Int']['output'];
  /** GRID ID of this Player. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this Player in this Segment. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Player in this Segment. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists received by this Player in this Segment. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Player in this Segment. */
  kills: Scalars['Int']['output'];
  /** Number of times of knocking down an enemy for this player (available from version "3.9"). */
  knockdownsGiven: Scalars['Int']['output'];
  /** Number of times of being knocked down for this player (available from version "3.9"). */
  knockdownsReceived: Scalars['Int']['output'];
  /** The max amount of health of the player. */
  maxHealth: Scalars['Int']['output'];
  /** Name of this Player. */
  name: Scalars['String']['output'];
  /** A list of objectives that were fulfilled by this Player in this Segment. */
  objectives: Array<Objective>;
  /** Indicates the participation status of a player for this Segment (available from version "3.8"). */
  participationStatus: ParticipationStatus;
  /** The amount of damage dealt to self. */
  selfdamageDealt: Scalars['Int']['output'];
  /** The amount of damage taken from self. */
  selfdamageTaken: Scalars['Int']['output'];
  /** Number of selfkills (suicides) for this Player in this Segment. */
  selfkills: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /** The amount of damage dealt to team. */
  teamdamageDealt: Scalars['Int']['output'];
  /** The amount of damage taken from team. */
  teamdamageTaken: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Player in this Segment.
   * A teamkill is the occurrence of killing an allied member
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Player in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists received by this Player in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Player in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of enemy kills, which were executed with a specific weapon by this Player in this Segment. */
  weaponKills: Array<WeaponKill>;
  /** A list of team kills, which were executed with a specific weapon by this Player in this Segment. */
  weaponTeamkills: Array<WeaponKill>;
};

/** Valorant data points for a Player, aggregated for a Segment. */
export type SegmentPlayerStateValorant = SegmentPlayerState & {
  __typename?: 'SegmentPlayerStateValorant';
  /** Indicates whether the player is alive (available from version "1.9"). */
  alive: Scalars['Boolean']['output'];
  /** The amount of current armor (available from version "1.9"). */
  currentArmor: Scalars['Int']['output'];
  /** The current health of the player (available from version "1.9"). */
  currentHealth: Scalars['Int']['output'];
  /** Number of deaths for this Player in this Segment. */
  deaths: Scalars['Int']['output'];
  /** Indication of player acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this Player. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this Player in this Segment. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Player in this Segment. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists received by this Player in this Segment. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Player in this Segment. */
  kills: Scalars['Int']['output'];
  /** The max amount of health of the player (available from version "1.9"). */
  maxHealth: Scalars['Int']['output'];
  /** Name of this Player. */
  name: Scalars['String']['output'];
  /** A list of objectives that were fulfilled by this Player in this Segment. */
  objectives: Array<Objective>;
  /** Indicates the participation status of a player for this Segment (available from version "3.8"). */
  participationStatus: ParticipationStatus;
  /** Number of selfkills (suicides) for this Player in this Segment. */
  selfkills: Scalars['Int']['output'];
  /** Number of team headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Player in this Segment.
   * A teamkill is the occurrence of killing an allied member
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Player in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists received by this Player in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Player in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of enemy kills, which were executed with a specific weapon by this Player in this Segment. */
  weaponKills: Array<WeaponKill>;
  /** A list of team kills, which were executed with a specific weapon by this Player in this Segment. */
  weaponTeamkills: Array<WeaponKill>;
};

/** The state of a Segment (e.g. a round) (available from version "1.4"). */
export type SegmentState = {
  __typename?: 'SegmentState';
  /** A list of DraftAction, containing information about draft actions in this Segment. (available from version "2.3") */
  draftActions: Array<DraftAction>;
  /** Duration of the Game (available from version "3.16"). */
  duration: Scalars['Duration']['output'];
  /** Indicates whether this Series has finished. */
  finished: Scalars['Boolean']['output'];
  /** GRID ID of this Segment. */
  id: Scalars['ID']['output'];
  /** A list of SegmentStates, containing information of the segments in this Segment. */
  segments: Array<SegmentState>;
  /** The sequence number of this Segment. */
  sequenceNumber: Scalars['Int']['output'];
  /** Indicates whether this Series has started. */
  started: Scalars['Boolean']['output'];
  /** DateTime value when this Segment was started (available from version "3.12"). */
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  /** A list of SegmentTeamState, containing information on the teams participating in this Segment. */
  teams: Array<SegmentTeamState>;
  /** The type of this Segment. */
  type: Scalars['String']['output'];
};

/** Data points for a Team, aggregated for a Segment (available from version "1.4"). */
export type SegmentTeamState = {
  /** Number of deaths for this Team in this Segment. */
  deaths: Scalars['Int']['output'];
  /** Indication of team acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** GRID ID of this Team. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this Team in this Segment. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Team in this Segment. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists from a Player, received by this Team in this Segment. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Team in this Segment. */
  kills: Scalars['Int']['output'];
  /** Name of this Team. */
  name: Scalars['String']['output'];
  /** A list of objectives that were fulfilled by this Player in this Segment. */
  objectives: Array<Objective>;
  /** A list of SegmentPlayerState, containing information about the Players that are members of this Team. */
  players: Array<SegmentPlayerState>;
  /** Number of selfkills (suicides) for this Team in this Segment. */
  selfkills: Scalars['Int']['output'];
  /** Side that this Team has taken in this Segment ie Red or Blue, Terrorists or Counter-Terrorists. */
  side: Scalars['String']['output'];
  /**
   * Number of teamkill assists provided by this Team in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Team in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists from a Player, received by this Team in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Team in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of enemy kills, which were executed with a specific weapon by this Player in this Segment. */
  weaponKills: Array<WeaponKill>;
  /** A list of team kills, which were executed with a specific weapon by this Team in this Segment. */
  weaponTeamkills: Array<WeaponKill>;
  /** Indicates whether this Team has won this Segment. */
  won: Scalars['Boolean']['output'];
};

/** CS2 data points for a Team, aggregated for a Segment. */
export type SegmentTeamStateCs2 = SegmentTeamState & {
  __typename?: 'SegmentTeamStateCs2';
  /** The amount of damage dealt. */
  damageDealt: Scalars['Int']['output'];
  /** A list of damage sources (available from version "3.17"). */
  damageDealtSources: Array<DamageDealtSource>;
  /** A list of damage targets (available from version "3.17"). */
  damageDealtTargets: Array<DamageDealtTarget>;
  /** The amount of total damage taken. */
  damageTaken: Scalars['Int']['output'];
  /** Number of deaths for this Team in this Segment. */
  deaths: Scalars['Int']['output'];
  /** Indication of team acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this Team. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this Team in this Segment. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Team in this Segment. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists from a Player, received by this Team in this Segment. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Team in this Segment. */
  kills: Scalars['Int']['output'];
  /** Name of this Team. */
  name: Scalars['String']['output'];
  /** A list of objectives that were fulfilled by this Player in this Segment. */
  objectives: Array<Objective>;
  /** A list of SegmentPlayerState, containing information about the Players that are members of this Team. */
  players: Array<SegmentPlayerState>;
  /** The amount of damage dealt to self. */
  selfdamageDealt: Scalars['Int']['output'];
  /** The amount of damage taken from self. */
  selfdamageTaken: Scalars['Int']['output'];
  /** Number of selfkills (suicides) for this Team in this Segment. */
  selfkills: Scalars['Int']['output'];
  /** Side that this Team has taken in this Segment ie Red or Blue, Terrorists or Counter-Terrorists. */
  side: Scalars['String']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /** The amount of damage dealt to team. */
  teamdamageDealt: Scalars['Int']['output'];
  /** The amount of damage taken from team. */
  teamdamageTaken: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Team in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Team in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists from a Player, received by this Team in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Team in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of enemy kills, which were executed with a specific weapon by this Player in this Segment. */
  weaponKills: Array<WeaponKill>;
  /** A list of team kills, which were executed with a specific weapon by this Team in this Segment. */
  weaponTeamkills: Array<WeaponKill>;
  /** If this team won the round, contains the reason for winning - otherwise an empty string. */
  winType: Scalars['String']['output'];
  /** Indicates whether this Team has won this Segment. */
  won: Scalars['Boolean']['output'];
};

/** CSGO data points for a Team, aggregated for a Segment. */
export type SegmentTeamStateCsgo = SegmentTeamState & {
  __typename?: 'SegmentTeamStateCsgo';
  /** The amount of damage dealt. */
  damageDealt: Scalars['Int']['output'];
  /** A list of damage sources (available from version "3.17"). */
  damageDealtSources: Array<DamageDealtSource>;
  /** A list of damage targets (available from version "3.17"). */
  damageDealtTargets: Array<DamageDealtTarget>;
  /** The amount of total damage taken. */
  damageTaken: Scalars['Int']['output'];
  /** Number of deaths for this Team in this Segment. */
  deaths: Scalars['Int']['output'];
  /** Indication of team acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this Team. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this Team in this Segment. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Team in this Segment. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists from a Player, received by this Team in this Segment. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Team in this Segment. */
  kills: Scalars['Int']['output'];
  /** Name of this Team. */
  name: Scalars['String']['output'];
  /** A list of objectives that were fulfilled by this Player in this Segment. */
  objectives: Array<Objective>;
  /** A list of SegmentPlayerState, containing information about the Players that are members of this Team. */
  players: Array<SegmentPlayerState>;
  /** The amount of damage dealt to self. */
  selfdamageDealt: Scalars['Int']['output'];
  /** The amount of damage taken from self. */
  selfdamageTaken: Scalars['Int']['output'];
  /** Number of selfkills (suicides) for this Team in this Segment. */
  selfkills: Scalars['Int']['output'];
  /** Side that this Team has taken in this Segment ie Red or Blue, Terrorists or Counter-Terrorists. */
  side: Scalars['String']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /** The amount of damage dealt to team. */
  teamdamageDealt: Scalars['Int']['output'];
  /** The amount of damage taken from team. */
  teamdamageTaken: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Team in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Team in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists from a Player, received by this Team in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Team in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of enemy kills, which were executed with a specific weapon by this Player in this Segment. */
  weaponKills: Array<WeaponKill>;
  /** A list of team kills, which were executed with a specific weapon by this Team in this Segment. */
  weaponTeamkills: Array<WeaponKill>;
  /** If this team won the round, contains the reason for winning - otherwise an empty string. */
  winType: Scalars['String']['output'];
  /** Indicates whether this Team has won this Segment. */
  won: Scalars['Boolean']['output'];
};

export type SegmentTeamStateDefault = SegmentTeamState & {
  __typename?: 'SegmentTeamStateDefault';
  /** Number of deaths for this Team in this Segment. */
  deaths: Scalars['Int']['output'];
  /** Indication of team acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this Team. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this Team in this Segment. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Team in this Segment. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists from a Player, received by this Team in this Segment. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Team in this Segment. */
  kills: Scalars['Int']['output'];
  /** Name of this Team. */
  name: Scalars['String']['output'];
  /** A list of objectives that were fulfilled by this Player in this Segment. */
  objectives: Array<Objective>;
  /** A list of SegmentPlayerState, containing information about the Players that are members of this Team. */
  players: Array<SegmentPlayerState>;
  /** Number of selfkills (suicides) for this Team in this Segment. */
  selfkills: Scalars['Int']['output'];
  /** Side that this Team has taken in this Segment ie Red or Blue, Terrorists or Counter-Terrorists. */
  side: Scalars['String']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Team in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Team in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists from a Player, received by this Team in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Team in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of enemy kills, which were executed with a specific weapon by this Player in this Segment. */
  weaponKills: Array<WeaponKill>;
  /** A list of team kills, which were executed with a specific weapon by this Team in this Segment. */
  weaponTeamkills: Array<WeaponKill>;
  /** Indicates whether this Team has won this Segment. */
  won: Scalars['Boolean']['output'];
};

export type SegmentTeamStateR6 = SegmentTeamState & {
  __typename?: 'SegmentTeamStateR6';
  /** The amount of damage dealt. */
  damageDealt: Scalars['Int']['output'];
  /** A list of damage sources (available from version "3.17"). */
  damageDealtSources: Array<DamageDealtSource>;
  /** A list of damage targets (available from version "3.17"). */
  damageDealtTargets: Array<DamageDealtTarget>;
  /** The amount of total damage taken. */
  damageTaken: Scalars['Int']['output'];
  /** Number of deaths for this Team in this Segment. */
  deaths: Scalars['Int']['output'];
  /** Indication of team acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** The amount of healing dealt by team. */
  healingDealt: Scalars['Int']['output'];
  /** The amount of healing received by team. */
  healingReceived: Scalars['Int']['output'];
  /** GRID ID of this Team. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this Team in this Segment. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Team in this Segment. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists from a Player, received by this Team in this Segment. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Team in this Segment. */
  kills: Scalars['Int']['output'];
  /** Number of times of knocking down an enemy for this team (available from version "3.9"). */
  knockdownsGiven: Scalars['Int']['output'];
  /** Number of times of being knocked down for this team (available from version "3.9"). */
  knockdownsReceived: Scalars['Int']['output'];
  /** Name of this Team. */
  name: Scalars['String']['output'];
  /** A list of objectives that were fulfilled by this Player in this Segment. */
  objectives: Array<Objective>;
  /** A list of SegmentPlayerState, containing information about the Players that are members of this Team. */
  players: Array<SegmentPlayerState>;
  /** The amount of damage dealt to self. */
  selfdamageDealt: Scalars['Int']['output'];
  /** The amount of damage taken from self. */
  selfdamageTaken: Scalars['Int']['output'];
  /** Number of selfkills (suicides) for this Team in this Segment. */
  selfkills: Scalars['Int']['output'];
  /** Side that this Team has taken in this Segment ie Red or Blue, Terrorists or Counter-Terrorists. */
  side: Scalars['String']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /** The amount of damage dealt to team. */
  teamdamageDealt: Scalars['Int']['output'];
  /** The amount of damage taken from team. */
  teamdamageTaken: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Team in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Team in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists from a Player, received by this Team in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Team in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of enemy kills, which were executed with a specific weapon by this Player in this Segment. */
  weaponKills: Array<WeaponKill>;
  /** A list of team kills, which were executed with a specific weapon by this Team in this Segment. */
  weaponTeamkills: Array<WeaponKill>;
  /** If this team won the round, contains the reason for winning - otherwise an empty string (available from version "3.4"). */
  winType: Scalars['String']['output'];
  /** Indicates whether this Team has won this Segment. */
  won: Scalars['Boolean']['output'];
};

/** Valorant data points for a Team, aggregated for a Segment. */
export type SegmentTeamStateValorant = SegmentTeamState & {
  __typename?: 'SegmentTeamStateValorant';
  /** Number of deaths for this Team in this Segment. */
  deaths: Scalars['Int']['output'];
  /** Indication of team acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this Team. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this Team in this Segment. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Team in this Segment. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists from a Player, received by this Team in this Segment. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Team in this Segment. */
  kills: Scalars['Int']['output'];
  /** Name of this Team. */
  name: Scalars['String']['output'];
  /** A list of objectives that were fulfilled by this Player in this Segment. */
  objectives: Array<Objective>;
  /** A list of SegmentPlayerState, containing information about the Players that are members of this Team. */
  players: Array<SegmentPlayerState>;
  /** Number of selfkills (suicides) for this Team in this Segment. */
  selfkills: Scalars['Int']['output'];
  /** Side that this Team has taken in this Segment ie Red or Blue, Terrorists or Counter-Terrorists. */
  side: Scalars['String']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Team in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Team in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists from a Player, received by this Team in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Team in this Segment.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of enemy kills, which were executed with a specific weapon by this Player in this Segment. */
  weaponKills: Array<WeaponKill>;
  /** A list of team kills, which were executed with a specific weapon by this Team in this Segment. */
  weaponTeamkills: Array<WeaponKill>;
  /** If this team won the round, contains the reason for winning - otherwise an empty string (available from version "1.9"). */
  winType: Scalars['String']['output'];
  /** Indicates whether this Team has won this Segment. */
  won: Scalars['Boolean']['output'];
};

/** Data points for a Player, aggregated for a Series. */
export type SeriesPlayerState = {
  /** Number of deaths for this Player in this Series. */
  deaths: Scalars['Int']['output'];
  /** Indication of player acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** GRID ID of this Player. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this Player in this Series. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Player in this Series. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists received by this Player in this Series. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Player in this Series. */
  kills: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Player in this Series (available from version "1.7") */
  multikills: Array<Multikill>;
  /** Name of this Player. */
  name: Scalars['String']['output'];
  /** A list of objectives that were fulfilled by this Player in this Series. */
  objectives: Array<Objective>;
  /** Indicates the participation status of a player for this Series */
  participationStatus: ParticipationStatus;
  /** Number of selfkills (suicides) for this Player in this Series. */
  selfkills: Scalars['Int']['output'];
  /** Number of structures captured by this Player in this Series. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this Player in this Series. */
  structuresDestroyed: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists received by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of enemy kills, which were executed with a specific weapon by this Player in this Series. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
};

/** CS2 data points for a Player, aggregated for a Series. */
export type SeriesPlayerStateCs2 = SeriesPlayerState & {
  __typename?: 'SeriesPlayerStateCs2';
  /** Number of deaths for this Player in this Series. */
  deaths: Scalars['Int']['output'];
  /** A list of ExternalLink, containing information about links to externally provided IDs. */
  externalLinks: Array<ExternalLink>;
  /** Indication of player acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this Player. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this Player in this Series. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Player in this Series. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists received by this Player in this Series. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Player in this Series. */
  kills: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Player in this Series */
  multikills: Array<Multikill>;
  /** Name of this Player. */
  name: Scalars['String']['output'];
  /** A list of objectives that were fulfilled by this Player in this Series. */
  objectives: Array<Objective>;
  /** Indicates the participation status of a player for this Series */
  participationStatus: ParticipationStatus;
  /** Number of selfkills (suicides) for this Player in this Series. */
  selfkills: Scalars['Int']['output'];
  /** Number of structures captured by this Player in this Series. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this Player in this Series. */
  structuresDestroyed: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists received by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of enemy kills, which were executed with a specific weapon by this Player in this Series. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
};

/** CSGO data points for a Player, aggregated for a Series. */
export type SeriesPlayerStateCsgo = SeriesPlayerState & {
  __typename?: 'SeriesPlayerStateCsgo';
  /** Number of deaths for this Player in this Series. */
  deaths: Scalars['Int']['output'];
  /** A list of ExternalLink, containing information about links to externally provided IDs (available from version "2.2"). */
  externalLinks: Array<ExternalLink>;
  /** Indication of player acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this Player. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this Player in this Series. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Player in this Series. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists received by this Player in this Series. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Player in this Series. */
  kills: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Player in this Series (available from version "1.7") */
  multikills: Array<Multikill>;
  /** Name of this Player. */
  name: Scalars['String']['output'];
  /** A list of objectives that were fulfilled by this Player in this Series. */
  objectives: Array<Objective>;
  /** Indicates the participation status of a player for this Series */
  participationStatus: ParticipationStatus;
  /** Number of selfkills (suicides) for this Player in this Series. */
  selfkills: Scalars['Int']['output'];
  /** Number of structures captured by this Player in this Series. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this Player in this Series. */
  structuresDestroyed: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists received by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of enemy kills, which were executed with a specific weapon by this Player in this Series. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
};

/** Default data points for a Player, aggregated for a Series. */
export type SeriesPlayerStateDefault = SeriesPlayerState & {
  __typename?: 'SeriesPlayerStateDefault';
  /** Number of deaths for this Player in this Series. */
  deaths: Scalars['Int']['output'];
  /** Indication of player acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this Player. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this Player in this Series. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Player in this Series. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists received by this Player in this Series. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Player in this Series. */
  kills: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Player in this Series (available from version "1.7") */
  multikills: Array<Multikill>;
  /** Name of this Player. */
  name: Scalars['String']['output'];
  /** A list of objectives that were fulfilled by this Player in this Series. */
  objectives: Array<Objective>;
  /** Indicates the participation status of a player for this Series */
  participationStatus: ParticipationStatus;
  /** Number of selfkills (suicides) for this Player in this Series. */
  selfkills: Scalars['Int']['output'];
  /** Number of structures captured by this Player in this Series. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this Player in this Series. */
  structuresDestroyed: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists received by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of enemy kills, which were executed with a specific weapon by this Player in this Series. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
};

/** Dota data points for a Player, aggregated for a Series. */
export type SeriesPlayerStateDota = SeriesPlayerState & {
  __typename?: 'SeriesPlayerStateDota';
  /** Number of deaths for this Player in this Series. */
  deaths: Scalars['Int']['output'];
  /** A list of ExternalLink, containing information about links to externally provided IDs. (available from version "3.6") */
  externalLinks: Array<ExternalLink>;
  /** Indication of player acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this Player. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this Player in this Series. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Player in this Series. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists received by this Player in this Series. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Player in this Series. */
  kills: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Player in this Series (available from version "1.7") */
  multikills: Array<Multikill>;
  /** Name of this Player. */
  name: Scalars['String']['output'];
  /** A list of objectives that were fulfilled by this Player in this Series. */
  objectives: Array<Objective>;
  /** Indicates the participation status of a player for this Series */
  participationStatus: ParticipationStatus;
  /** Number of selfkills (suicides) for this Player in this Series. */
  selfkills: Scalars['Int']['output'];
  /** Number of structures captured by this Player in this Series. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this Player in this Series. */
  structuresDestroyed: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists received by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of enemy kills, which were executed with a specific weapon by this Player in this Series. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
};

/** PUBG data points for a Player, aggregated for a Series. */
export type SeriesPlayerStatePubg = SeriesPlayerState & {
  __typename?: 'SeriesPlayerStatePubg';
  /** Number of deaths for this Player in this Series. */
  deaths: Scalars['Int']['output'];
  /** Indication of player acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this Player. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this Player in this Series. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Player in this Series. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists received by this Player in this Series. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Player in this Series. */
  kills: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Player in this Series (available from version "1.7") */
  multikills: Array<Multikill>;
  /** Name of this Player. */
  name: Scalars['String']['output'];
  /** A list of objectives that were fulfilled by this Player in this Series. */
  objectives: Array<Objective>;
  /** Indicates the participation status of a player for this Series */
  participationStatus: ParticipationStatus;
  /** Number of selfkills (suicides) for this Player in this Series. */
  selfkills: Scalars['Int']['output'];
  /** Number of structures captured by this Player in this Series. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this Player in this Series. */
  structuresDestroyed: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists received by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of enemy kills, which were executed with a specific weapon by this Player in this Series. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
};

/** R6 data points for a Player, aggregated for a Series */
export type SeriesPlayerStateR6 = SeriesPlayerState & {
  __typename?: 'SeriesPlayerStateR6';
  /** Number of deaths for this Player in this Series. */
  deaths: Scalars['Int']['output'];
  /** Indication of player acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this Player. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this Player in this Series. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Player in this Series. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists received by this Player in this Series. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Player in this Series. */
  kills: Scalars['Int']['output'];
  /** Number of times of knocking down an enemy for this player (available from version "3.9"). */
  knockdownsGiven: Scalars['Int']['output'];
  /** Number of times of being knocked down for this player (available from version "3.9"). */
  knockdownsReceived: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Player in this Series (available from version "1.7") */
  multikills: Array<Multikill>;
  /** Name of this Player. */
  name: Scalars['String']['output'];
  /** A list of objectives that were fulfilled by this Player in this Series. */
  objectives: Array<Objective>;
  /** Indicates the participation status of a player for this Series */
  participationStatus: ParticipationStatus;
  /** Number of selfkills (suicides) for this Player in this Series. */
  selfkills: Scalars['Int']['output'];
  /** Number of structures captured by this Player in this Series. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this Player in this Series. */
  structuresDestroyed: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists received by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of enemy kills, which were executed with a specific weapon by this Player in this Series. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
};

/** Valorant data points for a Player, aggregated for a Series. */
export type SeriesPlayerStateValorant = SeriesPlayerState & {
  __typename?: 'SeriesPlayerStateValorant';
  /** Number of deaths for this Player in this Series. */
  deaths: Scalars['Int']['output'];
  /** Indication of player acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this Player. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this Player in this Series. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this Player in this Series. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists received by this Player in this Series. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this Player in this Series. */
  kills: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Player in this Series (available from version "1.7") */
  multikills: Array<Multikill>;
  /** Name of this Player. */
  name: Scalars['String']['output'];
  /** A list of objectives that were fulfilled by this Player in this Series. */
  objectives: Array<Objective>;
  /** Indicates the participation status of a player for this Series */
  participationStatus: ParticipationStatus;
  /** Number of selfkills (suicides) for this Player in this Series. */
  selfkills: Scalars['Int']['output'];
  /** Number of structures captured by this Player in this Series. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this Player in this Series. */
  structuresDestroyed: Scalars['Int']['output'];
  /** Number of team headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists received by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of enemy kills, which were executed with a specific weapon by this Player in this Series. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this Player in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
};

/** Data points for a Series. */
export type SeriesState = {
  __typename?: 'SeriesState';
  /** A list of DraftAction, containing information about draft actions in this Series. */
  draftActions: Array<DraftAction>;
  /** Duration of the whole Series (available from version "3.14"). */
  duration: Scalars['Duration']['output'];
  /** Indicates whether this Series has finished. */
  finished: Scalars['Boolean']['output'];
  /** Format of this Series e.g. Best of 3 (Bo3). */
  format: Scalars['String']['output'];
  /** A list of GameState, containing information about the Games in this Series */
  games: Array<GameState>;
  /** GRID ID of this Series. */
  id: Scalars['ID']['output'];
  /** Indicates whether this Series has started. */
  started: Scalars['Boolean']['output'];
  /** DateTime value when this Series was started (available from version "2.1"). */
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  /** A list of SeriesTeamState, containing information about the Teams participating in this Series. */
  teams: Array<SeriesTeamState>;
  /** Esports Title of this Series (available from version "1.1"). */
  title: Title;
  /** DateTime value when this Series data was last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** Indicates whether this Series data is considered accurate. */
  valid: Scalars['Boolean']['output'];
  /** Version of the data model returned. */
  version: Scalars['Version']['output'];
};


/** Data points for a Series. */
export type SeriesStateGamesArgs = {
  filter?: InputMaybe<GameStateFilter>;
};

/** Data points for a Team, aggregated for a Series. */
export type SeriesTeamState = {
  /** Number of deaths for this team in this Series. */
  deaths: Scalars['Int']['output'];
  /** Indication of team acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** GRID ID of this team.. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this team in this Series. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this team in this Series. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists from a Player, received by this Team in this Series. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this team in this Series. */
  kills: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Team in this Series (available from version "1.7"). */
  multikills: Array<Multikill>;
  /** Name of this team. */
  name: Scalars['String']['output'];
  /** A list of objectives that were fulfilled by this team in this Series. */
  objectives: Array<Objective>;
  /** A list of SeriesPlayerState, containing information about the Players that are members of this team. */
  players: Array<SeriesPlayerState>;
  /** Score for this team in this Series. This is used for the Score After format and Best-of (#games won). */
  score: Scalars['Int']['output'];
  /** Number of selfkills (suicides) for this team in this Series. */
  selfkills: Scalars['Int']['output'];
  /** Number of structures captured by this team in this Series. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this team in this Series. */
  structuresDestroyed: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists from a Player, received by this Team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of enemy kills, which were executed with a specific weapon by this team in this Series. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
  /** Indicates whether this team has won this Series. */
  won: Scalars['Boolean']['output'];
};

/** CS2 data points for a Team, aggregated for a Series. */
export type SeriesTeamStateCs2 = SeriesTeamState & {
  __typename?: 'SeriesTeamStateCs2';
  /** Number of deaths for this team in this Series. */
  deaths: Scalars['Int']['output'];
  /** Indication of team acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this team.. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this team in this Series. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this team in this Series. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists from a Player, received by this Team in this Series. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this team in this Series. */
  kills: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Team in this Series (available from version "1.7"). */
  multikills: Array<Multikill>;
  /** Name of this team. */
  name: Scalars['String']['output'];
  /** A list of objectives that were fulfilled by this team in this Series. */
  objectives: Array<Objective>;
  /** A list of SeriesPlayerState, containing information about the Players that are members of this team. */
  players: Array<SeriesPlayerState>;
  /** Score for this team in this Series. This is used for the Score After format and Best-of (#games won). */
  score: Scalars['Int']['output'];
  /** Number of selfkills (suicides) for this team in this Series. */
  selfkills: Scalars['Int']['output'];
  /** Number of structures captured by this team in this Series. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this team in this Series. */
  structuresDestroyed: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists from a Player, received by this Team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of enemy kills, which were executed with a specific weapon by this team in this Series. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
  /** Indicates whether this team has won this Series. */
  won: Scalars['Boolean']['output'];
};

/** CSGO data points for a Team, aggregated for a Series. */
export type SeriesTeamStateCsgo = SeriesTeamState & {
  __typename?: 'SeriesTeamStateCsgo';
  /** Number of deaths for this team in this Series. */
  deaths: Scalars['Int']['output'];
  /** Indication of team acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this team.. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this team in this Series. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this team in this Series. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists from a Player, received by this Team in this Series. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this team in this Series. */
  kills: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Team in this Series (available from version "1.7"). */
  multikills: Array<Multikill>;
  /** Name of this team. */
  name: Scalars['String']['output'];
  /** A list of objectives that were fulfilled by this team in this Series. */
  objectives: Array<Objective>;
  /** A list of SeriesPlayerState, containing information about the Players that are members of this team. */
  players: Array<SeriesPlayerState>;
  /** Score for this team in this Series. This is used for the Score After format and Best-of (#games won). */
  score: Scalars['Int']['output'];
  /** Number of selfkills (suicides) for this team in this Series. */
  selfkills: Scalars['Int']['output'];
  /** Number of structures captured by this team in this Series. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this team in this Series. */
  structuresDestroyed: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists from a Player, received by this Team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of enemy kills, which were executed with a specific weapon by this team in this Series. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
  /** Indicates whether this team has won this Series. */
  won: Scalars['Boolean']['output'];
};

/** ### THESE SHOULD BE IDENTICAL WITH INTERFACES #### */
export type SeriesTeamStateDefault = SeriesTeamState & {
  __typename?: 'SeriesTeamStateDefault';
  /** Number of deaths for this team in this Series. */
  deaths: Scalars['Int']['output'];
  /** Indication of team acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this team.. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this team in this Series. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this team in this Series. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists from a Player, received by this Team in this Series. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this team in this Series. */
  kills: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Team in this Series (available from version "1.7"). */
  multikills: Array<Multikill>;
  /** Name of this team. */
  name: Scalars['String']['output'];
  /** A list of objectives that were fulfilled by this team in this Series. */
  objectives: Array<Objective>;
  /** A list of SeriesPlayerState, containing information about the Players that are members of this team. */
  players: Array<SeriesPlayerState>;
  /** Score for this team in this Series. This is used for the Score After format and Best-of (#games won). */
  score: Scalars['Int']['output'];
  /** Number of selfkills (suicides) for this team in this Series. */
  selfkills: Scalars['Int']['output'];
  /** Number of structures captured by this team in this Series. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this team in this Series. */
  structuresDestroyed: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists from a Player, received by this Team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of enemy kills, which were executed with a specific weapon by this team in this Series. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
  /** Indicates whether this team has won this Series. */
  won: Scalars['Boolean']['output'];
};

/** Dota data points for a Team, aggregated for a Series. */
export type SeriesTeamStateDota = SeriesTeamState & {
  __typename?: 'SeriesTeamStateDota';
  /** Number of deaths for this team in this Series. */
  deaths: Scalars['Int']['output'];
  /** Indication of team acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this team.. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this team in this Series. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this team in this Series. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists from a Player, received by this Team in this Series. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this team in this Series. */
  kills: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Team in this Series (available from version "1.7"). */
  multikills: Array<Multikill>;
  /** Name of this team. */
  name: Scalars['String']['output'];
  /** A list of objectives that were fulfilled by this team in this Series. */
  objectives: Array<Objective>;
  /** A list of SeriesPlayerState, containing information about the Players that are members of this team. */
  players: Array<SeriesPlayerState>;
  /** Score for this team in this Series. This is used for the Score After format and Best-of (#games won). */
  score: Scalars['Int']['output'];
  /** Number of selfkills (suicides) for this team in this Series. */
  selfkills: Scalars['Int']['output'];
  /** Number of structures captured by this team in this Series. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this team in this Series. */
  structuresDestroyed: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists from a Player, received by this Team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of enemy kills, which were executed with a specific weapon by this team in this Series. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
  /** Indicates whether this team has won this Series. */
  won: Scalars['Boolean']['output'];
};

/** PUBG data points for a Team, aggregated for a Series. */
export type SeriesTeamStatePubg = SeriesTeamState & {
  __typename?: 'SeriesTeamStatePubg';
  /** Number of deaths for this team in this Series. */
  deaths: Scalars['Int']['output'];
  /** Indication of team acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this team.. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this team in this Series. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this team in this Series. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists from a Player, received by this Team in this Series. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this team in this Series. */
  kills: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Team in this Series (available from version "1.7"). */
  multikills: Array<Multikill>;
  /** Name of this team. */
  name: Scalars['String']['output'];
  /** A list of objectives that were fulfilled by this team in this Series. */
  objectives: Array<Objective>;
  /** A list of SeriesPlayerState, containing information about the Players that are members of this team. */
  players: Array<SeriesPlayerState>;
  /** Score for this team in this Series. This is used for the Score After format and Best-of (#games won). */
  score: Scalars['Int']['output'];
  /** Number of selfkills (suicides) for this team in this Series. */
  selfkills: Scalars['Int']['output'];
  /** Number of structures captured by this team in this Series. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this team in this Series. */
  structuresDestroyed: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists from a Player, received by this Team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of enemy kills, which were executed with a specific weapon by this team in this Series. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
  /** Indicates whether this team has won this Series. */
  won: Scalars['Boolean']['output'];
};

export type SeriesTeamStateR6 = SeriesTeamState & {
  __typename?: 'SeriesTeamStateR6';
  /** Number of deaths for this team in this Series. */
  deaths: Scalars['Int']['output'];
  /** Indication of player acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** GRID ID of this team.. */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this team in this Series. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this team in this Series. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists from a Player, received by this Team in this Series. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this team in this Series. */
  kills: Scalars['Int']['output'];
  /** Number of times of knocking down an enemy for this team (available from version "3.9"). */
  knockdownsGiven: Scalars['Int']['output'];
  /** Number of times of being knocked down for this team (available from version "3.9"). */
  knockdownsReceived: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Team in this Series (available from version "1.7"). */
  multikills: Array<Multikill>;
  /** Name of this team. */
  name: Scalars['String']['output'];
  /** A list of objectives that were fulfilled by this team in this Series. */
  objectives: Array<Objective>;
  /** A list of SeriesPlayerState, containing information about the Players that are members of this team. */
  players: Array<SeriesPlayerState>;
  /** Score for this team in this Series. This is used for the Score After format and Best-of (#games won). */
  score: Scalars['Int']['output'];
  /** Number of selfkills (suicides) for this team in this Series. */
  selfkills: Scalars['Int']['output'];
  /** Number of structures captured by this team in this Series. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this team in this Series. */
  structuresDestroyed: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists from a Player, received by this Team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of enemy kills, which were executed with a specific weapon by this team in this Series. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
  /** Indicates whether this team has won this Series. */
  won: Scalars['Boolean']['output'];
};

/** Valorant data points for a Team, aggregated for a Series. */
export type SeriesTeamStateValorant = SeriesTeamState & {
  __typename?: 'SeriesTeamStateValorant';
  /** Number of deaths for this team in this Series. */
  deaths: Scalars['Int']['output'];
  /** Indication of team acquiring first kill. */
  firstKill: Scalars['Boolean']['output'];
  /** Number of enemy headshots for this Player. */
  headshots: Scalars['Int']['output'];
  /** ### BASE FIELDS #### */
  id: Scalars['ID']['output'];
  /** Number of enemy kill assists provided by this team in this Series. */
  killAssistsGiven: Scalars['Int']['output'];
  /** Number of enemy kill assists received by this team in this Series. */
  killAssistsReceived: Scalars['Int']['output'];
  /** A list of enemy KillAssistFromPlayer, containing information on kill assists from a Player, received by this Team in this Series. */
  killAssistsReceivedFromPlayer: Array<KillAssistFromPlayer>;
  /** Number of enemy kills for this team in this Series. */
  kills: Scalars['Int']['output'];
  /** A list of multi kills that happened by this Team in this Series (available from version "1.7"). */
  multikills: Array<Multikill>;
  /** Name of this team. */
  name: Scalars['String']['output'];
  /** A list of objectives that were fulfilled by this team in this Series. */
  objectives: Array<Objective>;
  /** A list of SeriesPlayerState, containing information about the Players that are members of this team. */
  players: Array<SeriesPlayerState>;
  /** Score for this team in this Series. This is used for the Score After format and Best-of (#games won). */
  score: Scalars['Int']['output'];
  /** Number of selfkills (suicides) for this team in this Series. */
  selfkills: Scalars['Int']['output'];
  /** Number of structures captured by this team in this Series. */
  structuresCaptured: Scalars['Int']['output'];
  /** Number of structures destroyed by this team in this Series. */
  structuresDestroyed: Scalars['Int']['output'];
  /** Number of allied headshots for this Player. */
  teamHeadshots: Scalars['Int']['output'];
  /**
   * Number of teamkill assists provided by this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsGiven: Scalars['Int']['output'];
  /**
   * Number of teamkill assists received by this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceived: Scalars['Int']['output'];
  /**
   * A list of KillAssistFromPlayer, containing information on teamkill assists from a Player, received by this Team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkillAssistsReceivedFromPlayer: Array<TeamkillAssistFromPlayer>;
  /**
   * Number of teamkills for this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  teamkills: Scalars['Int']['output'];
  /** A list of enemy kills, which were executed with a specific weapon by this team in this Series. */
  weaponKills: Array<WeaponKill>;
  /**
   * A list of teamkills, which were executed with a specific weapon by this team in this Series.
   * A teamkill is the occurrence of killing an allied member.
   */
  weaponTeamkills: Array<WeaponKill>;
  /** Indicates whether this team has won this Series. */
  won: Scalars['Boolean']['output'];
};

/** Data points for Structures in a Game. */
export type StructureState = {
  __typename?: 'StructureState';
  /** The current health of the Structure (available from version "1.6"). */
  currentHealth: Scalars['Int']['output'];
  /** Indicates whether the structure has been destroyed. */
  destroyed: Scalars['Boolean']['output'];
  /** GRID Structure ID. */
  id: Scalars['ID']['output'];
  /** The max amount of health of the Structure (available from version "1.6"). */
  maxHealth: Scalars['Int']['output'];
  /** Structure Coordinates on the map. */
  position?: Maybe<Coordinates>;
  /** Respawn clock state to indicate when a structure respawns (available from version "3.19"). */
  respawnClock?: Maybe<ClockState>;
  /** Side that controls the Structure. */
  side: Scalars['String']['output'];
  /** GRID Team ID that controls the Structure. */
  teamId: Scalars['ID']['output'];
  /** Type of the Structure. */
  type: Scalars['String']['output'];
};

/** Teamkill assist information. */
export type TeamkillAssistFromPlayer = {
  __typename?: 'TeamkillAssistFromPlayer';
  /** GRID ID for this assist. */
  id: Scalars['ID']['output'];
  /** GRID Player ID assisting. */
  playerId: Scalars['ID']['output'];
  /** Number of teamkill assists received from the assisting player. */
  teamkillAssistsReceived: Scalars['Int']['output'];
};

/** An esports Title (available from version "1.1"). */
export type Title = {
  __typename?: 'Title';
  /** Unique, short name description of the esports Title. */
  nameShortened: Scalars['String']['output'];
};

/** Title version information */
export type TitleVersion = {
  __typename?: 'TitleVersion';
  /** Version name */
  name: Scalars['String']['output'];
};

/** A unit kill caused by a player or a team (available from version "3.1"). */
export type UnitKill = {
  __typename?: 'UnitKill';
  /** Amount of times a specific unit was killed */
  count: Scalars['Int']['output'];
  /** GRID ID for this unit kill */
  id: Scalars['ID']['output'];
  /** The name of unit that got killed */
  unitName: Scalars['String']['output'];
};

/** A kill that was executed with the named weapon. */
export type WeaponKill = {
  __typename?: 'WeaponKill';
  /** Amount of times a kill happened with the named weapon. */
  count?: Maybe<Scalars['Int']['output']>;
  /** GRID ID for this weapon kill. */
  id: Scalars['ID']['output'];
  /** Name of the weapon used for this kill. */
  weaponName: Scalars['String']['output'];
};

export type _Service = {
  __typename?: '_Service';
  sdl: Scalars['String']['output'];
};

export type GetCs2SeriesStateQueryVariables = Exact<{
  seriesId: Scalars['ID']['input'];
}>;


export type GetCs2SeriesStateQuery = { __typename?: 'Query', seriesState?: { __typename?: 'SeriesState', id: string, valid: boolean, updatedAt: any, format: string, started: boolean, startedAt?: any | null, finished: boolean, teams: Array<{ __typename?: 'SeriesTeamStateCs2', id: string, name: string, won: boolean, score: number } | { __typename?: 'SeriesTeamStateCsgo', id: string, name: string, won: boolean, score: number } | { __typename?: 'SeriesTeamStateDefault', id: string, name: string, won: boolean, score: number } | { __typename?: 'SeriesTeamStateDota', id: string, name: string, won: boolean, score: number } | { __typename?: 'SeriesTeamStatePubg', id: string, name: string, won: boolean, score: number } | { __typename?: 'SeriesTeamStateR6', id: string, name: string, won: boolean, score: number } | { __typename?: 'SeriesTeamStateValorant', id: string, name: string, won: boolean, score: number }> } | null };


export const GetCs2SeriesStateDocument = gql`
    query GetCS2SeriesState($seriesId: ID!) {
  seriesState(id: $seriesId) {
    id
    valid
    updatedAt
    format
    started
    startedAt
    finished
    teams {
      id
      name
      won
      score
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetCS2SeriesState(variables: GetCs2SeriesStateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCs2SeriesStateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCs2SeriesStateQuery>(GetCs2SeriesStateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetCS2SeriesState', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;