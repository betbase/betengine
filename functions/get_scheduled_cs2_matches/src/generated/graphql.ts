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
  Cursor: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  Url: { input: any; output: any; }
};

/** Boolean filter for true/false fields. */
export type BooleanFilter = {
  /** Value to look for, can be nullable. */
  equals?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A content catalog entity. */
export type ContentCatalogEntity = {
  /** The content catalog version this entity appears in. */
  contentCatalogVersion: ContentCatalogVersion;
  /** The ID of the content catalog entity. */
  id: Scalars['ID']['output'];
  /** The URL to the content catalog entity's image */
  imageUrl: Scalars['Url']['output'];
  /** The name of the content catalog entity. */
  name: Scalars['String']['output'];
  /** The visibility of this entity to other users. */
  private?: Maybe<Scalars['Boolean']['output']>;
};

/** The result of querying list of content catalog entities, which provides additional information. */
export type ContentCatalogEntityConnection = {
  __typename?: 'ContentCatalogEntityConnection';
  /** All content catalog entities edges for a query on a given page. */
  edges: Array<ContentCatalogEntityEdge>;
  /** Information about the current page being pulled with a query. */
  pageInfo: PageInfo;
  /** Total count of content catalog entities matching the filtering in the API. */
  totalCount: Scalars['Int']['output'];
};

/** Content catalog entity and cursor information. */
export type ContentCatalogEntityEdge = {
  __typename?: 'ContentCatalogEntityEdge';
  /** Content catalog entity cursor value for the edge. */
  cursor: Scalars['Cursor']['output'];
  /** A content catalog entity. */
  node: ContentCatalogEntity;
};

/** Content catalog entity selection filter. */
export type ContentCatalogEntityFilter = {
  /** Filter by content catalog entity type. */
  entityType?: InputMaybe<ContentCatalogEntityTypeFilter>;
  /** Filter by content catalog entity id. */
  id?: InputMaybe<IdFilter>;
  /** Filter by content catalog entity name. */
  name?: InputMaybe<StringFilter>;
  /** Filter by entity visibility. */
  private?: InputMaybe<BooleanFilter>;
  /** Filter by content catalog entity title. */
  title?: InputMaybe<ContentCatalogEntityTitleFilter>;
};

/** Filter by content catalog entity title. */
export type ContentCatalogEntityTitleFilter = {
  /** Filter by content catalog entity title id. */
  id?: InputMaybe<IdFilter>;
};

/** The type of a content catalog entity. */
export enum ContentCatalogEntityType {
  /** Content catalog item. */
  Item = 'ITEM'
}

/** Filter by content catalog entity type. */
export type ContentCatalogEntityTypeFilter = {
  /** Filter by content catalog entity type. */
  in: Array<ContentCatalogEntityType>;
};

/** A content catalog item. */
export type ContentCatalogItem = ContentCatalogEntity & {
  __typename?: 'ContentCatalogItem';
  /** The content catalog version this entity appears in. */
  contentCatalogVersion: ContentCatalogVersion;
  /** The cost of an item. When not set, defaults to 0. */
  cost: Scalars['Float']['output'];
  /** The content catalog entity version external IDs and providers. */
  externalLinks: Array<ExternalLink>;
  /** The ID of the content catalog entity. */
  id: Scalars['ID']['output'];
  /** The URL to the content catalog entity's image. */
  imageUrl: Scalars['Url']['output'];
  /** The name of the content catalog entity. */
  name: Scalars['String']['output'];
  /** The visibility of this entity to other users. */
  private?: Maybe<Scalars['Boolean']['output']>;
};

/** A content catalog version. */
export type ContentCatalogVersion = {
  __typename?: 'ContentCatalogVersion';
  /** The content catalog version external IDs and providers. */
  externalLinks: Array<ExternalLink>;
  /** The unique identifier of the content catalog version. */
  id: Scalars['ID']['output'];
  /** The unique name of the content catalog version. E.g. 7.34. */
  name: Scalars['String']['output'];
  /** The visibility of this version to other users. */
  private?: Maybe<Scalars['Boolean']['output']>;
  /** The date and time when the content catalog version becomes effective. */
  publishedOn: Scalars['DateTime']['output'];
  /** The title which the content catalog version belongs to. */
  title: Title;
};

/** The result of querying list of content catalog versions, which provides additional information. */
export type ContentCatalogVersionConnection = {
  __typename?: 'ContentCatalogVersionConnection';
  /** All content catalog version edges for a query on a given page. */
  edges: Array<ContentCatalogVersionEdge>;
  /** Information about the current page being pulled with a query. */
  pageInfo: PageInfo;
  /** Total count of content catalog versions matching the filtering in the API. */
  totalCount: Scalars['Int']['output'];
};

/** Content catalog version and cursor information. */
export type ContentCatalogVersionEdge = {
  __typename?: 'ContentCatalogVersionEdge';
  /** Content catalog version cursor value for the edge. */
  cursor: Scalars['Cursor']['output'];
  /** A content catalog version. */
  node: ContentCatalogVersion;
};

/** Filter by a content catalog version. */
export type ContentCatalogVersionFilter = {
  /** Filter by content catalog version name. */
  name?: InputMaybe<StringFilter>;
  /** Filter by version visibility. */
  private?: InputMaybe<BooleanFilter>;
  /** Filter by content catalog version published date. */
  publishedOn?: InputMaybe<DateTimeFilter>;
  /** Filter by content catalog title. */
  title?: InputMaybe<ContentCatalogVersionTitleFilter>;
};

/** Ordering options for content catalog versions results. */
export type ContentCatalogVersionOrder = {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order the content catalog entities versions by. */
  field: ContentCatalogVersionOrderField;
};

/** The field which the result will be ordered by. */
export enum ContentCatalogVersionOrderField {
  /** Order by publishedOn. */
  PublishedOn = 'PUBLISHED_ON',
  /** Order by title name. */
  Title = 'TITLE'
}

/** Filter by a content catalog version title. */
export type ContentCatalogVersionTitleFilter = {
  /** Filter by title ID. */
  id?: InputMaybe<IdFilter>;
};

/** The fields used to create a new content catalog item or a version of an existing item. */
export type CreateContentCatalogItemInput = {
  /** The version of the content catalog the item should be linked to. */
  contentCatalogVersionId: Scalars['ID']['input'];
  /** The cost of the item. When not provided, it defaults to 0. */
  cost?: InputMaybe<Scalars['Float']['input']>;
  /** The external item IDs. */
  externalLinks?: InputMaybe<Array<ExternalLinkInput>>;
  /**
   * The UUID of an existing item to create a new version of it.
   * If not passed, a new item will be created.
   */
  id?: InputMaybe<Scalars['ID']['input']>;
  /**
   * The image encoded as base64 string.
   * If not provided, it defaults to a placeholder image.
   */
  imageData?: InputMaybe<Scalars['String']['input']>;
  /**
   * The name of the item.
   * Optional if creating a version of an existing item.
   */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The visibility of this entity to other users. */
  private?: InputMaybe<Scalars['Boolean']['input']>;
};

/** The response for the createContentCatalogItem mutation. */
export type CreateContentCatalogItemPayload = {
  __typename?: 'CreateContentCatalogItemPayload';
  /** The created content catalog version information. */
  createdContentCatalogItem: ContentCatalogItem;
};

/** The fields used to create a content catalog version. */
export type CreateContentCatalogVersionInput = {
  /** The external content catalog version ids. */
  externalLinks?: Array<ExternalLinkInput>;
  /** The UNIQUE name of the content catalog version. */
  name: Scalars['String']['input'];
  /** The visibility of this entity to other users. */
  private?: InputMaybe<Scalars['Boolean']['input']>;
  /** The date and time when the catalog version becomes effective. */
  publishedOn: Scalars['DateTime']['input'];
  /** The ID of the title for the content catalog version. */
  titleId: Scalars['ID']['input'];
};

/** The response for the createContentCatalogVersion mutation. */
export type CreateContentCatalogVersionPayload = {
  __typename?: 'CreateContentCatalogVersionPayload';
  /** The created content catalog version information. */
  createdContentCatalogVersion: ContentCatalogVersion;
};

/** The fields used to create a player. */
export type CreatePlayerInput = {
  /** The external player IDs. */
  externalLinks?: Array<ExternalLinkInput>;
  /** The nickname of the player. Must be unique and limited to 100 characters. */
  nickname: Scalars['String']['input'];
  /** The visibility of this entity to other users. */
  private?: InputMaybe<Scalars['Boolean']['input']>;
  /** The team the player belongs to. */
  team: CreatePlayerTeamInput;
  /** The title the player participates in. */
  title: CreatePlayerTitleInput;
};

/** The response for the createPlayer mutation. */
export type CreatePlayerPayload = {
  __typename?: 'CreatePlayerPayload';
  /** The created player information. */
  createdPlayer: Player;
};

/** The team field used to create a player. */
export type CreatePlayerTeamInput = {
  /** The ID of the team for the player. */
  teamId: Scalars['ID']['input'];
};

/** The title field used to create a player. */
export type CreatePlayerTitleInput = {
  /** The ID of the title for the player. */
  titleId: Scalars['ID']['input'];
};

/** The format fields used to create a series. */
export type CreateSeriesFormatInput = {
  /** The series format identifier. Check available formats via SeriesFormat query. */
  id: Scalars['ID']['input'];
};

/** The fields used to create a series. */
export type CreateSeriesInput = {
  /** The external series IDs. */
  externalLinks?: Array<ExternalLinkInput>;
  /** The series format i.a. best-of-3 (Bo3), score-after-2 (SA2). Referenced by ID. */
  format: CreateSeriesFormatInput;
  /** The visibility of this entity to other users. */
  private?: InputMaybe<Scalars['Boolean']['input']>;
  /** The start time in UTC of this series, formatted as an ISO date string. For example: 2023-04-12T12:12:37-03:00. */
  startTimeScheduled: Scalars['DateTime']['input'];
  /** The teams playing in the series. */
  teams: Array<CreateSeriesTeamInput>;
  /** The title for the series. */
  title: CreateSeriesTitleInput;
  /** The tournament for the series. */
  tournament: CreateSeriesTournamentInput;
};

/** The response for the createSeries mutation. */
export type CreateSeriesPayload = {
  __typename?: 'CreateSeriesPayload';
  /** The created series information. */
  createdSeries: Series;
};

/** The team fields used to create a series. */
export type CreateSeriesTeamInput = {
  /** The score advantage for the team in this series. */
  scoreAdvantage?: Scalars['Int']['input'];
  /** The ID of the team playing in the series. */
  teamId: Scalars['ID']['input'];
};

/** The title fields used to create a series. */
export type CreateSeriesTitleInput = {
  /** The ID of the title for the series. */
  titleId: Scalars['ID']['input'];
};

/** The tournament fields used to create a series. */
export type CreateSeriesTournamentInput = {
  /** The ID of the tournament for the series. */
  tournamentId: Scalars['ID']['input'];
};

/** The fields used to create a team. */
export type CreateTeamInput = {
  /** The team's primary color in hexadecimal. Defaults to grey. */
  colorPrimary?: Scalars['HexColor']['input'];
  /** The team's secondary color in hexadecimal. Defaults to white. */
  colorSecondary?: Scalars['HexColor']['input'];
  /** The external team IDs. */
  externalLinks?: Array<ExternalLinkInput>;
  /** The logo of the team. Has to be a Base64 encoded image, supported types: image/jpg, image/jpeg, image/png, image/gif, image/svg+xml, image/webp. */
  logoData?: InputMaybe<Scalars['String']['input']>;
  /** The name of the team. Must be unique and limited to 100 characters. */
  name: Scalars['String']['input'];
  /** The shortened name of the team. It's limited to 20 characters and it's not unique. */
  nameShortened?: InputMaybe<Scalars['String']['input']>;
  /** The visibility of this entity to other users. */
  private?: InputMaybe<Scalars['Boolean']['input']>;
  /** The title the team participates in. */
  title: CreateTeamTitleInput;
};

/** The response for the createTeam mutation. */
export type CreateTeamPayload = {
  __typename?: 'CreateTeamPayload';
  /** The created team information. */
  createdTeam: Team;
};

/** The title fields used to create a team. */
export type CreateTeamTitleInput = {
  /** The ID of the title for the team. */
  titleId: Scalars['ID']['input'];
};

/** The fields used to create a tournament. */
export type CreateTournamentInput = {
  /** The end date of the tournament formatted as ISO 8601 i.e. yyyy-MM-dd */
  endDate?: InputMaybe<DateInput>;
  /** The external tournament IDs. */
  externalLinks?: Array<ExternalLinkInput>;
  /** The logo of the tournament. Has to be a Base64 encoded image, supported types: image/jpg, image/jpeg, image/png, image/gif, image/svg+xml, image/webp. */
  logoData?: InputMaybe<Scalars['String']['input']>;
  /** The name of the tournament. Must be unique and limited to 150 characters. */
  name: Scalars['String']['input'];
  /** The short name of the tournament. Must be unique and limited to 30 characters. */
  nameShortened: Scalars['String']['input'];
  /** The parent tournament of the tournament */
  parent?: InputMaybe<CreateTournamentParentInput>;
  /** The visibility of this entity to other users. */
  private?: InputMaybe<Scalars['Boolean']['input']>;
  /** The prize pool of the tournament in USD. */
  prizePool?: InputMaybe<MoneyInput>;
  /** The start date of the tournament formatted as ISO 8601 i.e. yyyy-MM-dd */
  startDate?: InputMaybe<DateInput>;
  /** The participating teams of the tournament. */
  teams?: Array<CreateTournamentTeamInput>;
  /** The titles being played in the tournament. */
  titles?: Array<CreateTournamentTitleInput>;
};

/** The parent tournament fields used to create a tournament together with a parent. */
export type CreateTournamentParentInput = {
  /** The ID of the parent tournament */
  tournamentId: Scalars['ID']['input'];
};

/** The response for the createTournament mutation. */
export type CreateTournamentPayload = {
  __typename?: 'CreateTournamentPayload';
  /** The created tournament information. */
  createdTournament: Tournament;
};

/** The team fields used to update a tournament. */
export type CreateTournamentTeamInput = {
  /** The ID of the team for the tournament. */
  teamId: Scalars['ID']['input'];
};

/** The title fields used to create a tournament. */
export type CreateTournamentTitleInput = {
  /** The ID of the title for the tournament. */
  titleId: Scalars['ID']['input'];
};

/** A data provider which provides external entity IDs. */
export type DataProvider = {
  __typename?: 'DataProvider';
  /** Description of the data provider. */
  description?: Maybe<Scalars['String']['output']>;
  /** The name of the external data provider. */
  name: Scalars['String']['output'];
};

export type DateInput = {
  /** ISO 8601 formatted date i.e. yyyy-MM-dd */
  date?: InputMaybe<Scalars['Date']['input']>;
};

/** Filter by a datetime range. */
export type DateTimeFilter = {
  /** DateTime for the beginning of the time range (optional), formatted as an ISO date string. Time window includes the given value. */
  gte?: InputMaybe<Scalars['String']['input']>;
  /** DateTime for the end of the time range (optional), formatted as an ISO date string. Time window includes the given value. */
  lte?: InputMaybe<Scalars['String']['input']>;
};

/** The response for the deleteContentCatalogEntity mutation. */
export type DeleteContentCatalogEntityPayload = {
  __typename?: 'DeleteContentCatalogEntityPayload';
  /** The version of the deleted content catalog entity. */
  contentCatalogVersionId: Scalars['ID']['output'];
  /** The ID of the deleted content catalog entity. */
  id: Scalars['ID']['output'];
};

/** The response for the deleteContentCatalogVersion mutation. */
export type DeleteContentCatalogVersionPayload = {
  __typename?: 'DeleteContentCatalogVersionPayload';
  /** The ID of the deleted content catalog version. */
  id: Scalars['ID']['output'];
};

/** The ID of the player to delete. */
export type DeletePlayerInput = {
  /** The player ID. */
  id: Scalars['ID']['input'];
};

/** The ID of the removed player. */
export type DeletePlayerPayload = {
  __typename?: 'DeletePlayerPayload';
  /** The player ID. */
  id: Scalars['ID']['output'];
};

/** The ID of the series to delete. */
export type DeleteSeriesInput = {
  /** The series ID. */
  id: Scalars['ID']['input'];
};

/** The ID of the removed series. */
export type DeleteSeriesPayload = {
  __typename?: 'DeleteSeriesPayload';
  /** The series ID. */
  id: Scalars['ID']['output'];
};

/** The ID of the team to delete. */
export type DeleteTeamInput = {
  /** The team ID. */
  id: Scalars['ID']['input'];
};

/** The ID of the removed team. */
export type DeleteTeamPayload = {
  __typename?: 'DeleteTeamPayload';
  /** The team ID. */
  id: Scalars['ID']['output'];
};

/** The ID of the tournament to delete. */
export type DeleteTournamentInput = {
  /** The tournament ID. */
  id: Scalars['ID']['input'];
};

/** The ID of the removed tournament. */
export type DeleteTournamentPayload = {
  __typename?: 'DeleteTournamentPayload';
  /** The tournament ID. */
  id: Scalars['ID']['output'];
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

/** Information provided by the external data provider. */
export type ExternalEntity = {
  __typename?: 'ExternalEntity';
  /** The ID used by the external data provider. */
  id: Scalars['ID']['output'];
};

/** The field for the external ID value. */
export type ExternalEntityInput = {
  /** The external ID value.  */
  id: Scalars['ID']['input'];
};

/** Linking information for an external data provider. */
export type ExternalLink = {
  __typename?: 'ExternalLink';
  /** The external data provider. */
  dataProvider: DataProvider;
  /** The external information. */
  externalEntity: ExternalEntity;
};

/** The fields the external entity consist of. */
export type ExternalLinkInput = {
  /** The data provider name. Strict control over possible values. */
  dataProviderName: Scalars['String']['input'];
  /** The external id value. */
  externalEntityInput: ExternalEntityInput;
};

/** Filter for series by game data points. */
export type GameFilter = {
  /** Filter by game IDs. */
  id?: InputMaybe<IdFilter>;
  /** Filter by game map. */
  map?: InputMaybe<MapFilter>;
};

/** ID filter for entity identifiers. */
export type IdFilter = {
  /** Array of IDs to look for. */
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Filter for map data points. */
export type MapFilter = {
  /** Filter by map name. */
  name?: InputMaybe<StringFilter>;
};

/** A monetary value. */
export type Money = {
  __typename?: 'Money';
  /** The amount in USD. */
  amount: Scalars['Decimal']['output'];
};

export type MoneyInput = {
  /** The amount of the prize pool. */
  amount?: InputMaybe<Scalars['Decimal']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a new version for a content catalog item. */
  createContentCatalogItem: CreateContentCatalogItemPayload;
  /** Creates a new content catalog version. */
  createContentCatalogVersion: CreateContentCatalogVersionPayload;
  /** Creates a new GRID player. */
  createPlayer: CreatePlayerPayload;
  /** Creates a new GRID Series. */
  createSeries: CreateSeriesPayload;
  /** Creates a new GRID team. */
  createTeam: CreateTeamPayload;
  /** Creates a new GRID tournament. */
  createTournament: CreateTournamentPayload;
  /** Deletes a specific version of a content catalog entity. */
  deleteContentCatalogEntity: DeleteContentCatalogEntityPayload;
  /** Deletes a specific content catalog version. */
  deleteContentCatalogVersion: DeleteContentCatalogVersionPayload;
  /** Deletes an existing GRID player. */
  deletePlayer: DeletePlayerPayload;
  /** Deletes an existing GRID Series. */
  deleteSeries: DeleteSeriesPayload;
  /** Deletes an existing GRID team. */
  deleteTeam: DeleteTeamPayload;
  /** Deletes an existing GRID tournament. */
  deleteTournament: DeleteTournamentPayload;
  /** Updates a specific version of a content catalog item. */
  updateContentCatalogItem: UpdateContentCatalogItemPayload;
  /** Updates a specific content catalog version */
  updateContentCatalogVersion: UpdateContentCatalogVersionPayload;
  /** Updates an existing GRID player. */
  updatePlayer: UpdatePlayerPayload;
  /** Updates an existing GRID Series. */
  updateSeries: UpdateSeriesPayload;
  /** Updates an existing GRID team. */
  updateTeam: UpdateTeamPayload;
  /** Updates an existing GRID tournament. */
  updateTournament: UpdateTournamentPayload;
};


export type MutationCreateContentCatalogItemArgs = {
  createContentCatalogItemInput: CreateContentCatalogItemInput;
};


export type MutationCreateContentCatalogVersionArgs = {
  createContentCatalogVersionInput: CreateContentCatalogVersionInput;
};


export type MutationCreatePlayerArgs = {
  createPlayerInput: CreatePlayerInput;
};


export type MutationCreateSeriesArgs = {
  createSeriesInput: CreateSeriesInput;
};


export type MutationCreateTeamArgs = {
  createTeamInput: CreateTeamInput;
};


export type MutationCreateTournamentArgs = {
  createTournamentInput: CreateTournamentInput;
};


export type MutationDeleteContentCatalogEntityArgs = {
  contentCatalogVersionId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationDeleteContentCatalogVersionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePlayerArgs = {
  deletePlayerInput: DeletePlayerInput;
};


export type MutationDeleteSeriesArgs = {
  deleteSeriesInput: DeleteSeriesInput;
};


export type MutationDeleteTeamArgs = {
  deleteTeamInput: DeleteTeamInput;
};


export type MutationDeleteTournamentArgs = {
  deleteTournamentInput: DeleteTournamentInput;
};


export type MutationUpdateContentCatalogItemArgs = {
  updateContentCatalogItemInput: UpdateContentCatalogItemInput;
};


export type MutationUpdateContentCatalogVersionArgs = {
  updateContentCatalogVersionInput: UpdateContentCatalogVersionInput;
};


export type MutationUpdatePlayerArgs = {
  updatePlayerInput: UpdatePlayerInput;
};


export type MutationUpdateSeriesArgs = {
  updateSeriesInput: UpdateSeriesInput;
};


export type MutationUpdateTeamArgs = {
  updateTeamInput: UpdateTeamInput;
};


export type MutationUpdateTournamentArgs = {
  updateTournamentInput: UpdateTournamentInput;
};

/** Filter by a date range. If both 'gte' and 'lte' are null, it'll fetch the entities for which the field the filter is applied to is null. */
export type NullableDateFilter = {
  /** Date for the beginning of the time range (optional), formatted as an ISO date string. Time window includes the given value. */
  gte?: InputMaybe<Scalars['Date']['input']>;
  /** Date for the end of the time range (optional), formatted as an ISO date string. Time window includes the given value. */
  lte?: InputMaybe<Scalars['Date']['input']>;
};

/** ID filter with nullable value. */
export type NullableIdFilter = {
  /** ID to look for, can be nullable. */
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Order in which the results will be provided. */
export enum OrderDirection {
  /** Orders the results ascending. */
  Asc = 'ASC',
  /** Orders the results descending. */
  Desc = 'DESC'
}

/** An organization. */
export type Organization = OrganizationInterface & {
  __typename?: 'Organization';
  /** The ID of the organization. */
  id: Scalars['ID']['output'];
  /** The name of the organization. */
  name: Scalars['String']['output'];
  /** The visibility status of the organization. */
  private: Scalars['Boolean']['output'];
  /** The teams that belong to the organization. */
  teams?: Maybe<Array<TeamRelation>>;
};

/** The result of querying a list of organizations. It provides pagination information. */
export type OrganizationConnection = {
  __typename?: 'OrganizationConnection';
  /** All players edges for query on a given page. */
  edges: Array<OrganizationEdge>;
  /** Information about current page being pulled with query. */
  pageInfo: PageInfo;
  /** Total count of players in the API. */
  totalCount: Scalars['Int']['output'];
};

/** Organization and cursor information. */
export type OrganizationEdge = {
  __typename?: 'OrganizationEdge';
  /** Organizations cursor value for the edge. */
  cursor: Scalars['Cursor']['output'];
  /** Organizations. */
  node: Organization;
};

/** Filter for organization by data points. */
export type OrganizationFilter = {
  /** Limits results by string filter of organization's name. */
  name?: InputMaybe<StringFilter>;
  /** Filter by organization visibility. */
  private?: InputMaybe<BooleanFilter>;
};

/** An interface for organization types. */
export type OrganizationInterface = {
  /** The ID of the organization. */
  id: Scalars['ID']['output'];
  /** The name of the organization. */
  name: Scalars['String']['output'];
};

/** An organization relation. Removes connection to Teams from the Organization. */
export type OrganizationRelation = OrganizationInterface & {
  __typename?: 'OrganizationRelation';
  /** The ID of the organization. */
  id: Scalars['ID']['output'];
  /** The name of the organization. */
  name: Scalars['String']['output'];
};

/** Information about current paginated data set position. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** The cursor of the last edge of the page. */
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  /** If there is a page after the one being returned. */
  hasNextPage: Scalars['Boolean']['output'];
  /** If there is a page before the one being returned. */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** The cursor of the first edge of the page. */
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

/** A player. */
export type Player = {
  __typename?: 'Player';
  /** The external player IDs and providers. */
  externalLinks: Array<ExternalLink>;
  /** The ID of a player */
  id: Scalars['ID']['output'];
  /** The name of the player. */
  nickname: Scalars['String']['output'];
  /** The visibility status of the player. */
  private: Scalars['Boolean']['output'];
  /** The team the player is currently playing. */
  team?: Maybe<Team>;
  /** The title the player is currently playing. */
  title: Title;
};

/** The result of querying a list of players. It provides pagination information. */
export type PlayerConnection = {
  __typename?: 'PlayerConnection';
  /** All players edges for query on a given page. */
  edges: Array<PlayerEdge>;
  /** Information about current page being pulled with query. */
  pageInfo: PageInfo;
  /** Total count of players in the API. */
  totalCount: Scalars['Int']['output'];
};

/** Player and cursor information. */
export type PlayerEdge = {
  __typename?: 'PlayerEdge';
  /** Players cursor value for the edge. */
  cursor: Scalars['Cursor']['output'];
  /** Players. */
  node: Player;
};

/** Filter for player data points. */
export type PlayerFilter = {
  /** Filter by the player's nickname. */
  nickname?: InputMaybe<StringFilter>;
  /** Filter by player visibility. */
  private?: InputMaybe<BooleanFilter>;
  /** Filter by a specific team ID. If this is null, no filter will be applied. If `teamId.id` is null, then players without team will be fetched. */
  teamIdFilter?: InputMaybe<NullableIdFilter>;
  /** Filter by a specific title ID. */
  titleId?: InputMaybe<Scalars['ID']['input']>;
};

/** The availability of a product for a given series. */
export type ProductServiceLevel = {
  __typename?: 'ProductServiceLevel';
  /** The name of the product. */
  productName: Scalars['String']['output'];
  /** The availability level for the product. */
  serviceLevel: ServiceLevel;
};

/** Filters for series by product and/or by service level. */
export type ProductServiceLevelFilter = {
  /** The name of the product to filter by. */
  productName: Scalars['String']['input'];
  /** The availability level to filter by. */
  serviceLevel: ServiceLevel;
};

export type Query = {
  __typename?: 'Query';
  /** Get multiple series by query specifications. */
  allSeries: SeriesConnection;
  /** Get multiple content catalog entities by query specification. */
  contentCatalogEntities: ContentCatalogEntityConnection;
  /** Get a Content Catalog Entity by ID. */
  contentCatalogEntity?: Maybe<ContentCatalogEntity>;
  /** Get the GRID Content Catalog Entity ID by an external ID. */
  contentCatalogEntityIdByExternalId?: Maybe<Scalars['ID']['output']>;
  /** Get a Content Catalog Version by ID. */
  contentCatalogVersion?: Maybe<ContentCatalogVersion>;
  /** Get the GRID Content Catalog Version ID by an external ID. */
  contentCatalogVersionIdByExternalId?: Maybe<Scalars['ID']['output']>;
  /** Get multiple content catalog versions by query specification. */
  contentCatalogVersions: ContentCatalogVersionConnection;
  /** Get supported data providers. */
  dataProviders: Array<DataProvider>;
  /** Get the GRID Game ID by an external ID. */
  gameIdByExternalId?: Maybe<Scalars['ID']['output']>;
  /** Get an organization by ID. */
  organization?: Maybe<Organization>;
  /** Get multiple organizations by query specifications. */
  organizations?: Maybe<OrganizationConnection>;
  /** Get a player by ID. */
  player?: Maybe<Player>;
  /** Get the GRID Player ID by an external ID. */
  playerIdByExternalId?: Maybe<Scalars['ID']['output']>;
  /** Get multiple players by query specifications. */
  players?: Maybe<PlayerConnection>;
  /** Get a series by ID. */
  series?: Maybe<Series>;
  /**
   * @deprecated(reason: 'Use seriesIdByExternalId instead') Get a series by its external ID.
   * @deprecated Use seriesIdByExternalId instead
   */
  seriesByExternalSeries?: Maybe<Series>;
  /** Get supported series formats. */
  seriesFormats: Array<SeriesFormat>;
  /** Get the GRID Series ID by an external ID. */
  seriesIdByExternalId?: Maybe<Scalars['ID']['output']>;
  /** Get a team by ID. */
  team?: Maybe<Team>;
  /** Get the GRID Team ID by an external ID. */
  teamIdByExternalId?: Maybe<Scalars['ID']['output']>;
  /** Get multiple teams by query specifications. */
  teams: TeamConnection;
  /** Get a title by ID. */
  title?: Maybe<Title>;
  /** Get all titles. */
  titles: Array<Title>;
  /** Get a tournament by ID. */
  tournament?: Maybe<Tournament>;
  /** Get the GRID Tournament ID by an external ID. */
  tournamentIdByExternalId?: Maybe<Scalars['ID']['output']>;
  /** Get multiple tournaments by query specifications. */
  tournaments: TournamentConnection;
};


export type QueryAllSeriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<SeriesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: SeriesOrderBy;
  orderDirection?: OrderDirection;
};


export type QueryContentCatalogEntitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  contentCatalogVersionId?: InputMaybe<Scalars['ID']['input']>;
  filter?: InputMaybe<ContentCatalogEntityFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryContentCatalogEntityArgs = {
  contentCatalogVersionId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
};


export type QueryContentCatalogEntityIdByExternalIdArgs = {
  contentCatalogVersionId?: InputMaybe<Scalars['ID']['input']>;
  dataProviderName: Scalars['String']['input'];
  externalEntityId: Scalars['ID']['input'];
};


export type QueryContentCatalogVersionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryContentCatalogVersionIdByExternalIdArgs = {
  dataProviderName: Scalars['String']['input'];
  externalEntityId: Scalars['ID']['input'];
};


export type QueryContentCatalogVersionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ContentCatalogVersionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContentCatalogVersionOrder>>;
};


export type QueryGameIdByExternalIdArgs = {
  dataProviderName: Scalars['String']['input'];
  externalGameId: Scalars['ID']['input'];
};


export type QueryOrganizationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrganizationsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OrganizationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPlayerArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPlayerIdByExternalIdArgs = {
  dataProviderName: Scalars['String']['input'];
  externalPlayerId: Scalars['ID']['input'];
  titleId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPlayersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PlayerFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySeriesArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySeriesByExternalSeriesArgs = {
  dataProviderName: Scalars['String']['input'];
  externalSeriesId: Scalars['String']['input'];
};


export type QuerySeriesIdByExternalIdArgs = {
  dataProviderName: Scalars['String']['input'];
  externalSeriesId: Scalars['ID']['input'];
};


export type QueryTeamArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTeamIdByExternalIdArgs = {
  dataProviderName: Scalars['String']['input'];
  externalTeamId: Scalars['ID']['input'];
  titleId: Scalars['ID']['input'];
};


export type QueryTeamsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<TeamFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTitleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTitlesArgs = {
  filter?: InputMaybe<TitleFilter>;
};


export type QueryTournamentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTournamentIdByExternalIdArgs = {
  dataProviderName: Scalars['String']['input'];
  externalTournamentId: Scalars['ID']['input'];
};


export type QueryTournamentsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<TournamentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** A series. */
export type Series = {
  __typename?: 'Series';
  /** The external series IDs and providers. */
  externalLinks: Array<ExternalLink>;
  /** The format of the series. */
  format: SeriesFormat;
  /** The ID of a series. */
  id: Scalars['ID']['output'];
  /** The visibility status of the series. */
  private: Scalars['Boolean']['output'];
  /** The service level for the series. */
  productServiceLevels: Array<ProductServiceLevel>;
  /** The scheduled start time of the series. */
  startTimeScheduled: Scalars['DateTime']['output'];
  /** The list of stream URLs available for the series. */
  streams: Array<VideoStream>;
  /** The teams participating in the series. */
  teams: Array<TeamParticipant>;
  /** The title being played in the series. */
  title: Title;
  /** The tournament in which the series is being played. */
  tournament: Tournament;
  /** The type of the series. */
  type: SeriesType;
};

/** The result of querying a list of series. It provides pagination information. */
export type SeriesConnection = {
  __typename?: 'SeriesConnection';
  /** All series edges for query on a given page. */
  edges: Array<SeriesEdge>;
  /** Information about current page being pulled with query. */
  pageInfo: PageInfo;
  /** Total count of series in the API. */
  totalCount: Scalars['Int']['output'];
};

/** Series and cursor information. */
export type SeriesEdge = {
  __typename?: 'SeriesEdge';
  /** Series cursor value for the edge. */
  cursor: Scalars['Cursor']['output'];
  /** Series. */
  node: Series;
};

/** Filter for series data points. */
export type SeriesFilter = {
  /** Filter by live data points. */
  live?: InputMaybe<SeriesLiveFilter>;
  /** Filter by participating player IDs. */
  livePlayerIds?: InputMaybe<IdFilter>;
  /** Filter by series visibility. */
  private?: InputMaybe<BooleanFilter>;
  /** Filter by product service levels. */
  productServiceLevels?: InputMaybe<ProductServiceLevelFilter>;
  /** Filter by a time range. */
  startTimeScheduled?: InputMaybe<DateTimeFilter>;
  /** @deprecated('Use teamIds filter instead.') Filter by team ID. */
  teamId?: InputMaybe<Scalars['ID']['input']>;
  /** Filter by team IDs. */
  teamIds?: InputMaybe<IdFilter>;
  /** @deprecated('Use titleIds filter instead.') Filter by title ID. */
  titleId?: InputMaybe<Scalars['ID']['input']>;
  /** Filter by title IDs. */
  titleIds?: InputMaybe<IdFilter>;
  /** Filter by tournament data points. */
  tournament?: InputMaybe<SeriesTournamentFilter>;
  /** @deprecated('Use the tournament filter instead.') Filter by tournament ID. */
  tournamentId?: InputMaybe<Scalars['ID']['input']>;
  /** @deprecated('Use the tournament filter instead.') Filter by tournament IDs. */
  tournamentIds?: InputMaybe<IdFilter>;
  /** @deprecated('Use types filter instead.') Filter by series type. */
  type?: InputMaybe<SeriesType>;
  /** Filter by series types. */
  types?: InputMaybe<Array<SeriesType>>;
};

/** The format of the series, such as: BO1, BO3, SA2. */
export type SeriesFormat = {
  __typename?: 'SeriesFormat';
  /** The ID of the format. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The name of a format. */
  name: Scalars['String']['output'];
  /** The shortened name of a format (max. 5 characters). */
  nameShortened: Scalars['String']['output'];
};

/** Filter for series by live data points. */
export type SeriesLiveFilter = {
  /** Filter by game. */
  games?: InputMaybe<GameFilter>;
};

/** Field to order results by. */
export enum SeriesOrderBy {
  /** Orders the series result by ID. */
  Id = 'ID',
  /** Orders the series result by the scheduled start time. */
  StartTimeScheduled = 'StartTimeScheduled'
}

/** Filter for series by tournament data points. */
export type SeriesTournamentFilter = {
  /** Filter by tournament end date. */
  endDate?: InputMaybe<NullableDateFilter>;
  /** Filter by tournament IDs. */
  id?: InputMaybe<IdFilter>;
  /** Include children tournaments in the filter. */
  includeChildren?: InputMaybe<BooleanFilter>;
  /** Filter by tournament name. */
  name?: InputMaybe<StringFilter>;
  /** Filter by tournament shortened name. */
  nameShortened?: InputMaybe<StringFilter>;
  /** Filter by tournament start date. */
  startDate?: InputMaybe<NullableDateFilter>;
  /** Filter by tournament titles data points. */
  title?: InputMaybe<SeriesTournamentTitleFilter>;
};

/** Filter for series by the tournament title data points. */
export type SeriesTournamentTitleFilter = {
  /** Array of IDs to look for. */
  id?: InputMaybe<IdFilter>;
};

/** The type of series being returned. */
export enum SeriesType {
  /** A competitive non-esports series. */
  Competitive = 'COMPETITIVE',
  /** A competitive series. */
  Esports = 'ESPORTS',
  /** A GRID test game that gets played repeatedly in a loop. */
  Loopfeed = 'LOOPFEED',
  /** A practice series. */
  Scrim = 'SCRIM'
}

/** The availability level for a given product. */
export enum ServiceLevel {
  /** The product service is fully available. */
  Full = 'FULL',
  /** Some functionalities of the product service may be limited or unavailable. */
  Limited = 'LIMITED',
  /** The product service is not available. */
  None = 'NONE'
}

/** String filter for character-based fields. */
export type StringFilter = {
  /** Case-insensitive string filter to match field containing it. */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** Case-insensitive string filter to match field exactly it. */
  equals?: InputMaybe<Scalars['String']['input']>;
};

/** A team. */
export type Team = TeamInterface & {
  __typename?: 'Team';
  /** The primary color of the team. */
  colorPrimary: Scalars['HexColor']['output'];
  /** The secondary color of the team. */
  colorSecondary: Scalars['HexColor']['output'];
  /** The external team IDs and providers. */
  externalLinks: Array<ExternalLink>;
  /** The ID of a team. */
  id: Scalars['ID']['output'];
  /** The team logo URL. */
  logoUrl: Scalars['Url']['output'];
  /** The name of the team. */
  name: Scalars['String']['output'];
  /** The shortened name of a team. */
  nameShortened?: Maybe<Scalars['String']['output']>;
  /** The organization the team plays for. */
  organization?: Maybe<OrganizationRelation>;
  /** The visibility status of the team. */
  private: Scalars['Boolean']['output'];
  /** Title the team is related to. 'titles' field will be removed soon and every team will have a single title. */
  title: Title;
  /** @deprecated('Use title field instead.') The titles the team is related to. */
  titles: Array<Title>;
};

/** The result of querying a list of teams. It provides pagination information. */
export type TeamConnection = {
  __typename?: 'TeamConnection';
  /** All team edges for query on a given page. */
  edges: Array<TeamEdge>;
  /** Information about current page being pulled with query. */
  pageInfo: PageInfo;
  /** Total count of teams in the API. */
  totalCount: Scalars['Int']['output'];
};

/** Team and cursor information. */
export type TeamEdge = {
  __typename?: 'TeamEdge';
  /** Team cursor value cursor value for the edge. */
  cursor: Scalars['Cursor']['output'];
  /** Team. */
  node: Team;
};

/** Filter for team data points. */
export type TeamFilter = {
  /** Filter by the team's name. */
  name?: InputMaybe<StringFilter>;
  /** Filter by the team's shortened name. */
  nameShortened?: InputMaybe<StringFilter>;
  /** Filter by a specific organization. */
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  /** Filter by team visibility. */
  private?: InputMaybe<BooleanFilter>;
  /** Filter by a specific title. */
  titleId?: InputMaybe<Scalars['ID']['input']>;
};

/** An interface for team types. */
export type TeamInterface = {
  /** The primary color of the team. */
  colorPrimary: Scalars['HexColor']['output'];
  /** The secondary color of the team. */
  colorSecondary: Scalars['HexColor']['output'];
  /** The ID of the team. */
  id: Scalars['ID']['output'];
  /** The team logo URL. */
  logoUrl: Scalars['Url']['output'];
  /** The name of the team. */
  name: Scalars['String']['output'];
  /** The shortened name of a team. */
  nameShortened?: Maybe<Scalars['String']['output']>;
  /** The titles the team is related to. */
  titles: Array<Title>;
};

/** Team participating in the series. */
export type TeamParticipant = {
  __typename?: 'TeamParticipant';
  /** The team base information. */
  baseInfo: Team;
  /** The team score advantage for the team in the series. */
  scoreAdvantage: Scalars['Int']['output'];
};

/** A team relation. Removes connection to Organization from the Team. */
export type TeamRelation = TeamInterface & {
  __typename?: 'TeamRelation';
  /** The primary color of the team. */
  colorPrimary: Scalars['HexColor']['output'];
  /** The secondary color of the team. */
  colorSecondary: Scalars['HexColor']['output'];
  /** The ID of the team. */
  id: Scalars['ID']['output'];
  /** The team logo URL. */
  logoUrl: Scalars['Url']['output'];
  /** The name of the team. */
  name: Scalars['String']['output'];
  /** The shortened name of a team. */
  nameShortened?: Maybe<Scalars['String']['output']>;
  /** The titles the team is related to. */
  titles: Array<Title>;
};

/** A title. */
export type Title = {
  __typename?: 'Title';
  /** The ID of the title. */
  id: Scalars['ID']['output'];
  /** The name of the title. */
  name: Scalars['String']['output'];
  /** The shortened name of the title (max. 20 characters). */
  nameShortened: Scalars['String']['output'];
  /** The visibility status of the title. */
  private?: Maybe<Scalars['Boolean']['output']>;
};

/** Filter for titles. */
export type TitleFilter = {
  /** Filter by title visibility. */
  private?: InputMaybe<BooleanFilter>;
};

/** A tournament. */
export type Tournament = {
  __typename?: 'Tournament';
  /** The children tournament of the tournament. */
  children: Array<Tournament>;
  /** The end date of the tournament. */
  endDate?: Maybe<Scalars['Date']['output']>;
  /** The external tournament IDs and providers. */
  externalLinks: Array<ExternalLink>;
  /** The ID of a tournament. */
  id: Scalars['ID']['output'];
  /** The tournament logo URL. */
  logoUrl: Scalars['Url']['output'];
  /** The name of the tournament. */
  name: Scalars['String']['output'];
  /** The shortened name of the tournament (max. 30 characters). */
  nameShortened: Scalars['String']['output'];
  /** The parent tournament of the tournament. */
  parent?: Maybe<Tournament>;
  /** The visibility status of the tournament. */
  private: Scalars['Boolean']['output'];
  /** The tournament prize pool in USD. */
  prizePool?: Maybe<Money>;
  /** The start date of the tournament. */
  startDate?: Maybe<Scalars['Date']['output']>;
  /** The teams linked to the tournament. */
  teams: Array<Team>;
  /** The titles linked to the tournament. */
  titles: Array<Title>;
};

/** The result of querying a list of tournaments. It provides pagination information. */
export type TournamentConnection = {
  __typename?: 'TournamentConnection';
  /** All tournament edges for query on a given page. */
  edges: Array<TournamentEdge>;
  /** Information about current page being pulled with query. */
  pageInfo: PageInfo;
  /** Total count of tournaments in the API. */
  totalCount: Scalars['Int']['output'];
};

/** Tournament and cursor information. */
export type TournamentEdge = {
  __typename?: 'TournamentEdge';
  /** Tournament cursor value for the edge. */
  cursor: Scalars['Cursor']['output'];
  /** Tournament. */
  node: Tournament;
};

/** Filter for tournament data points. */
export type TournamentFilter = {
  /** Filter by tournament end date. */
  endDate?: InputMaybe<NullableDateFilter>;
  /** Filter tournaments that have children. If false, only tournaments at the bottom-most level of the hierarchy are returned. */
  hasChildren?: InputMaybe<BooleanFilter>;
  /** Filter tournaments that have parents. If false, only tournaments at the top-most level of the hierarchy are returned. */
  hasParent?: InputMaybe<BooleanFilter>;
  /** Filter by tournament name. */
  name?: InputMaybe<StringFilter>;
  /** Filter by tournament short name. */
  nameShortened?: InputMaybe<StringFilter>;
  /** Filter by tournaments visibility. */
  private?: InputMaybe<BooleanFilter>;
  /** Filter by tournament start date. */
  startDate?: InputMaybe<NullableDateFilter>;
  /** Filter by tournament titles. */
  title?: InputMaybe<TournamentTitleFilter>;
  /** @deprecated('Use the titles filter instead.') Limits results to specific title. */
  titleId?: InputMaybe<Scalars['ID']['input']>;
};

/** Filter for tournaments by title data points. */
export type TournamentTitleFilter = {
  /** Filter by tournament IDs. */
  id?: InputMaybe<IdFilter>;
};

/** The fields used to create a new content catalog item or a version of an existing item. */
export type UpdateContentCatalogItemInput = {
  /** The content catalog version. */
  contentCatalogVersionId: Scalars['ID']['input'];
  /** The new cost of the item. */
  cost?: InputMaybe<Scalars['Float']['input']>;
  /** The external item IDs. Overrides all previous values. */
  externalLinks?: InputMaybe<Array<ExternalLinkInput>>;
  /** The UUID of an existing item. */
  id: Scalars['ID']['input'];
  /** The new base64 encoded image of the item. */
  imageData?: InputMaybe<Scalars['String']['input']>;
  /** The new name of the item. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The visibility of this entity to other users. */
  private?: InputMaybe<Scalars['Boolean']['input']>;
};

/** The response for the updateContentCatalogItem mutation. */
export type UpdateContentCatalogItemPayload = {
  __typename?: 'UpdateContentCatalogItemPayload';
  /** The updated content catalog version information. */
  updatedContentCatalogItem: ContentCatalogItem;
};

/** The fields used to update a content catalog version. */
export type UpdateContentCatalogVersionInput = {
  /** The unique identifier of the content catalog version. */
  contentCatalogVersionId: Scalars['ID']['input'];
  /** The visibility of this entity to other users. */
  private?: InputMaybe<Scalars['Boolean']['input']>;
};

/** The fields used to update item's owners */
export type UpdateContentCatalogVersionOwnerInput = {
  /** The owner's ID. */
  ownerId: Scalars['ID']['input'];
};

/** The response for the updateContentCatalogVersion mutation. */
export type UpdateContentCatalogVersionPayload = {
  __typename?: 'UpdateContentCatalogVersionPayload';
  /** The updated content catalog version information. */
  updatedContentCatalogVersion: ContentCatalogVersion;
};

/** The fields used to update a player. */
export type UpdatePlayerInput = {
  /** The external player IDs. Overrides all previous values. */
  externalLinks?: InputMaybe<Array<ExternalLinkInput>>;
  /** The ID of the player. */
  id: Scalars['ID']['input'];
  /** The nickname of the player. Must be unique and limited to 100 characters. */
  nickname?: InputMaybe<Scalars['String']['input']>;
  /** The visibility of this entity to other users. */
  private?: InputMaybe<Scalars['Boolean']['input']>;
  /** The team the player belongs to. Overrides previous value. */
  team?: InputMaybe<UpdatePlayerTeamInput>;
  /** The title the player participates in. Overrides previous value. */
  title?: InputMaybe<UpdatePlayerTitleInput>;
};

/** The response for the updatePlayer mutation. */
export type UpdatePlayerPayload = {
  __typename?: 'UpdatePlayerPayload';
  /** The updated player information. */
  updatedPlayer: Player;
};

/** The team field used to update a player. */
export type UpdatePlayerTeamInput = {
  /** The ID of the team for the player. */
  teamId?: InputMaybe<Scalars['ID']['input']>;
};

/** The title field used to update a player. */
export type UpdatePlayerTitleInput = {
  /** The ID of the title for the player. */
  titleId: Scalars['ID']['input'];
};

/** The format fields used to update a series. */
export type UpdateSeriesFormatInput = {
  /** The series format identifier. Check available formats via SeriesFormat query. */
  id: Scalars['ID']['input'];
};

/** The fields used to update a series. */
export type UpdateSeriesInput = {
  /** The external series IDs. Overrides all previous values. */
  externalLinks?: InputMaybe<Array<ExternalLinkInput>>;
  /** The new series format i.a. best-of-3 (Bo3), score-after-2 (SA2). Referenced by ID. */
  format?: InputMaybe<UpdateSeriesFormatInput>;
  /** The ID of the series. */
  id: Scalars['ID']['input'];
  /** The visibility of this entity to other users. */
  private?: InputMaybe<Scalars['Boolean']['input']>;
  /** The new start time in UTC of this series, formatted as an ISO date string. For example: 2023-04-12T12:12:37-03:00. */
  startTimeScheduled?: InputMaybe<Scalars['DateTime']['input']>;
  /** The new teams for the series. Overrides the previous value. */
  teams?: InputMaybe<Array<UpdateSeriesTeamInput>>;
  /** The new title for the series. */
  title?: InputMaybe<UpdateSeriesTitleInput>;
  /** The new tournament for the series. */
  tournament?: InputMaybe<UpdateSeriesTournamentInput>;
};

/** The response for the updateSeries mutation. */
export type UpdateSeriesPayload = {
  __typename?: 'UpdateSeriesPayload';
  /** The updated series information. */
  updatedSeries: Series;
};

/** The team fields used to update a series. */
export type UpdateSeriesTeamInput = {
  /** The score advantage for the team in this series. */
  scoreAdvantage?: Scalars['Int']['input'];
  /** The ID of the team playing in the series. */
  teamId: Scalars['ID']['input'];
};

/** The title fields used to update a series. */
export type UpdateSeriesTitleInput = {
  /** The ID of the title for the series. */
  titleId: Scalars['ID']['input'];
};

/** The tournament fields used to update a series. */
export type UpdateSeriesTournamentInput = {
  /** The ID of the tournament for the series. */
  tournamentId: Scalars['ID']['input'];
};

/** The fields used to update a team. */
export type UpdateTeamInput = {
  /** The new team's primary color in hexadecimal. Defaults to grey. */
  colorPrimary?: InputMaybe<Scalars['HexColor']['input']>;
  /** The new team's secondary color in hexadecimal. Defaults to white. */
  colorSecondary?: InputMaybe<Scalars['HexColor']['input']>;
  /** The external team IDs. Overrides all previous values. */
  externalLinks?: InputMaybe<Array<ExternalLinkInput>>;
  /** The ID of the team. */
  id: Scalars['ID']['input'];
  /** The new logo of the team. Has to be a Base64 encoded image, supported types: image/jpg, image/jpeg, image/png, image/gif, image/svg+xml, image/webp. */
  logoData?: InputMaybe<Scalars['String']['input']>;
  /** The new name of the team. Must be unique and limited to 100 characters. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The new shortened name of the team. It's limited to 20 characters and it's not unique. */
  nameShortened?: InputMaybe<Scalars['String']['input']>;
  /** The visibility of this entity to other users. */
  private?: InputMaybe<Scalars['Boolean']['input']>;
  /** The title the team participates in. Overrides previous value. */
  title?: InputMaybe<UpdateTeamTitleInput>;
};

/** The response for the updateTeam mutation. */
export type UpdateTeamPayload = {
  __typename?: 'UpdateTeamPayload';
  /** The updated team information. */
  updatedTeam: Team;
};

/** The title fields used to update a team. */
export type UpdateTeamTitleInput = {
  /** The ID of the title for the team. */
  titleId: Scalars['ID']['input'];
};

/** The fields used to update a tournament. */
export type UpdateTournamentInput = {
  /** The end date of the tournament formatted as ISO 8601 i.e. yyyy-MM-dd */
  endDate?: InputMaybe<DateInput>;
  /** The external tournament IDs. Overrides all previous values. */
  externalLinks?: InputMaybe<Array<ExternalLinkInput>>;
  /** The ID of the tournament. */
  id: Scalars['ID']['input'];
  /** The new logo of the tournament. Has to be a Base64 encoded image, supported types: image/jpg, image/jpeg, image/png, image/gif, image/svg+xml, image/webp. */
  logoData?: InputMaybe<Scalars['String']['input']>;
  /** The new name of the tournament. Must be unique and limited to 150 characters. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The new short name of the tournament. Must be unique and limited to 30 characters. */
  nameShortened?: InputMaybe<Scalars['String']['input']>;
  /** The parent tournament of the tournament */
  parent?: InputMaybe<UpdateTournamentParentInput>;
  /** The visibility of this entity to other users. */
  private?: InputMaybe<Scalars['Boolean']['input']>;
  /** The prize pool of the tournament in USD. */
  prizePool?: InputMaybe<MoneyInput>;
  /** The start date of the tournament formatted as ISO 8601 i.e. yyyy-MM-dd */
  startDate?: InputMaybe<DateInput>;
  /** The new teams that will be playing in the tournament. Overrides previous value. */
  teams?: InputMaybe<Array<UpdateTournamentTeamInput>>;
  /** The new titles being played in the tournament. Overrides previous value. */
  titles?: InputMaybe<Array<UpdateTournamentTitleInput>>;
};

/** The parent tournament fields used to create a tournament together with a parent. */
export type UpdateTournamentParentInput = {
  tournamentId?: InputMaybe<Scalars['ID']['input']>;
};

/** The response for the updateTournament mutation. */
export type UpdateTournamentPayload = {
  __typename?: 'UpdateTournamentPayload';
  /** The updated tournament information. */
  updatedTournament: Tournament;
};

/** The team fields used to update a tournament. */
export type UpdateTournamentTeamInput = {
  /** The ID of the team for the tournament. */
  teamId: Scalars['ID']['input'];
};

/** The title fields used to update a tournament. */
export type UpdateTournamentTitleInput = {
  /** The ID of the title for the tournament. */
  titleId: Scalars['ID']['input'];
};

/** Live video stream details. */
export type VideoStream = {
  __typename?: 'VideoStream';
  /** URL link to live video stream. */
  url: Scalars['String']['output'];
};

export type GetScheduledCs2SeriesNext2WeeksQueryVariables = Exact<{
  filter?: InputMaybe<SeriesFilter>;
  after?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type GetScheduledCs2SeriesNext2WeeksQuery = { __typename?: 'Query', allSeries: { __typename?: 'SeriesConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: any | null, endCursor?: any | null }, edges: Array<{ __typename?: 'SeriesEdge', cursor: any, node: { __typename?: 'Series', id: string, startTimeScheduled: any, title: { __typename?: 'Title', name: string, nameShortened: string }, tournament: { __typename?: 'Tournament', name: string, nameShortened: string, id: string, logoUrl: any, endDate?: any | null, startDate?: any | null }, format: { __typename?: 'SeriesFormat', name: string, nameShortened: string }, teams: Array<{ __typename?: 'TeamParticipant', scoreAdvantage: number, baseInfo: { __typename?: 'Team', name: string, logoUrl: any, id: string } }> } }> } };


export const GetScheduledCs2SeriesNext2WeeksDocument = gql`
    query GetScheduledCS2SeriesNext2Weeks($filter: SeriesFilter, $after: Cursor) {
  allSeries(filter: $filter, orderBy: StartTimeScheduled, after: $after) {
    totalCount
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        id
        title {
          name
          nameShortened
        }
        tournament {
          name
          nameShortened
          id
          logoUrl
          endDate
          startDate
        }
        startTimeScheduled
        format {
          name
          nameShortened
        }
        teams {
          baseInfo {
            name
            logoUrl
            id
          }
          scoreAdvantage
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetScheduledCS2SeriesNext2Weeks(variables?: GetScheduledCs2SeriesNext2WeeksQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetScheduledCs2SeriesNext2WeeksQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetScheduledCs2SeriesNext2WeeksQuery>(GetScheduledCs2SeriesNext2WeeksDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetScheduledCS2SeriesNext2Weeks', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;