import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  accessToken: Scalars['String']['output'];
  email: Scalars['String']['output'];
  roleType: RoleType;
  userId: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type RegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type RegisterOutput = {
  __typename?: 'RegisterOutput';
  accessToken: Scalars['String']['output'];
  email: Scalars['String']['output'];
  roleType: RoleType;
  userId: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export enum RoleType {
  Superuser = 'superuser',
  User = 'user'
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "chat_rooms" */
export type Chat_Rooms = {
  __typename?: 'chat_rooms';
  created_at: Scalars['timestamptz']['output'];
  created_by: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  is_public?: Maybe<Scalars['Boolean']['output']>;
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate;
  name: Scalars['String']['output'];
  room_code?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  user: Users;
  /** An array relationship */
  user_chat_rooms: Array<User_Chat_Rooms>;
  /** An aggregate relationship */
  user_chat_rooms_aggregate: User_Chat_Rooms_Aggregate;
};


/** columns and relationships of "chat_rooms" */
export type Chat_RoomsMessagesArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


/** columns and relationships of "chat_rooms" */
export type Chat_RoomsMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


/** columns and relationships of "chat_rooms" */
export type Chat_RoomsUser_Chat_RoomsArgs = {
  distinct_on?: InputMaybe<Array<User_Chat_Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Chat_Rooms_Order_By>>;
  where?: InputMaybe<User_Chat_Rooms_Bool_Exp>;
};


/** columns and relationships of "chat_rooms" */
export type Chat_RoomsUser_Chat_Rooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Chat_Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Chat_Rooms_Order_By>>;
  where?: InputMaybe<User_Chat_Rooms_Bool_Exp>;
};

/** aggregated selection of "chat_rooms" */
export type Chat_Rooms_Aggregate = {
  __typename?: 'chat_rooms_aggregate';
  aggregate?: Maybe<Chat_Rooms_Aggregate_Fields>;
  nodes: Array<Chat_Rooms>;
};

export type Chat_Rooms_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Chat_Rooms_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Chat_Rooms_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Chat_Rooms_Aggregate_Bool_Exp_Count>;
};

export type Chat_Rooms_Aggregate_Bool_Exp_Bool_And = {
  arguments: Chat_Rooms_Select_Column_Chat_Rooms_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Chat_Rooms_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Chat_Rooms_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Chat_Rooms_Select_Column_Chat_Rooms_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Chat_Rooms_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Chat_Rooms_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Chat_Rooms_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Chat_Rooms_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "chat_rooms" */
export type Chat_Rooms_Aggregate_Fields = {
  __typename?: 'chat_rooms_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Chat_Rooms_Max_Fields>;
  min?: Maybe<Chat_Rooms_Min_Fields>;
};


/** aggregate fields of "chat_rooms" */
export type Chat_Rooms_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Chat_Rooms_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "chat_rooms" */
export type Chat_Rooms_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Chat_Rooms_Max_Order_By>;
  min?: InputMaybe<Chat_Rooms_Min_Order_By>;
};

/** input type for inserting array relation for remote table "chat_rooms" */
export type Chat_Rooms_Arr_Rel_Insert_Input = {
  data: Array<Chat_Rooms_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Chat_Rooms_On_Conflict>;
};

/** Boolean expression to filter rows from the table "chat_rooms". All fields are combined with a logical 'AND'. */
export type Chat_Rooms_Bool_Exp = {
  _and?: InputMaybe<Array<Chat_Rooms_Bool_Exp>>;
  _not?: InputMaybe<Chat_Rooms_Bool_Exp>;
  _or?: InputMaybe<Array<Chat_Rooms_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_public?: InputMaybe<Boolean_Comparison_Exp>;
  messages?: InputMaybe<Messages_Bool_Exp>;
  messages_aggregate?: InputMaybe<Messages_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  room_code?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_chat_rooms?: InputMaybe<User_Chat_Rooms_Bool_Exp>;
  user_chat_rooms_aggregate?: InputMaybe<User_Chat_Rooms_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "chat_rooms" */
export enum Chat_Rooms_Constraint {
  /** unique or primary key constraint on columns "id" */
  ChatRoomsPkey = 'chat_rooms_pkey',
  /** unique or primary key constraint on columns "room_code" */
  ChatRoomsRoomCodeKey = 'chat_rooms_room_code_key'
}

/** input type for inserting data into table "chat_rooms" */
export type Chat_Rooms_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_public?: InputMaybe<Scalars['Boolean']['input']>;
  messages?: InputMaybe<Messages_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  room_code?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_chat_rooms?: InputMaybe<User_Chat_Rooms_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Chat_Rooms_Max_Fields = {
  __typename?: 'chat_rooms_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  room_code?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "chat_rooms" */
export type Chat_Rooms_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  room_code?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Chat_Rooms_Min_Fields = {
  __typename?: 'chat_rooms_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  room_code?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "chat_rooms" */
export type Chat_Rooms_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  room_code?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "chat_rooms" */
export type Chat_Rooms_Mutation_Response = {
  __typename?: 'chat_rooms_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Chat_Rooms>;
};

/** input type for inserting object relation for remote table "chat_rooms" */
export type Chat_Rooms_Obj_Rel_Insert_Input = {
  data: Chat_Rooms_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Chat_Rooms_On_Conflict>;
};

/** on_conflict condition type for table "chat_rooms" */
export type Chat_Rooms_On_Conflict = {
  constraint: Chat_Rooms_Constraint;
  update_columns?: Array<Chat_Rooms_Update_Column>;
  where?: InputMaybe<Chat_Rooms_Bool_Exp>;
};

/** Ordering options when selecting data from "chat_rooms". */
export type Chat_Rooms_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_public?: InputMaybe<Order_By>;
  messages_aggregate?: InputMaybe<Messages_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  room_code?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_chat_rooms_aggregate?: InputMaybe<User_Chat_Rooms_Aggregate_Order_By>;
};

/** primary key columns input for table: chat_rooms */
export type Chat_Rooms_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "chat_rooms" */
export enum Chat_Rooms_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  IsPublic = 'is_public',
  /** column name */
  Name = 'name',
  /** column name */
  RoomCode = 'room_code',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "chat_rooms_aggregate_bool_exp_bool_and_arguments_columns" columns of table "chat_rooms" */
export enum Chat_Rooms_Select_Column_Chat_Rooms_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsPublic = 'is_public'
}

/** select "chat_rooms_aggregate_bool_exp_bool_or_arguments_columns" columns of table "chat_rooms" */
export enum Chat_Rooms_Select_Column_Chat_Rooms_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsPublic = 'is_public'
}

/** input type for updating data in table "chat_rooms" */
export type Chat_Rooms_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_public?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  room_code?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "chat_rooms" */
export type Chat_Rooms_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Chat_Rooms_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Chat_Rooms_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_public?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  room_code?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "chat_rooms" */
export enum Chat_Rooms_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  IsPublic = 'is_public',
  /** column name */
  Name = 'name',
  /** column name */
  RoomCode = 'room_code',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Chat_Rooms_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Chat_Rooms_Set_Input>;
  /** filter the rows which have to be updated */
  where: Chat_Rooms_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "messages" */
export type Messages = {
  __typename?: 'messages';
  /** An object relationship */
  chat_room: Chat_Rooms;
  chat_room_id: Scalars['uuid']['output'];
  content?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "messages" */
export type Messages_Aggregate = {
  __typename?: 'messages_aggregate';
  aggregate?: Maybe<Messages_Aggregate_Fields>;
  nodes: Array<Messages>;
};

export type Messages_Aggregate_Bool_Exp = {
  count?: InputMaybe<Messages_Aggregate_Bool_Exp_Count>;
};

export type Messages_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Messages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Messages_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "messages" */
export type Messages_Aggregate_Fields = {
  __typename?: 'messages_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Messages_Max_Fields>;
  min?: Maybe<Messages_Min_Fields>;
};


/** aggregate fields of "messages" */
export type Messages_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Messages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "messages" */
export type Messages_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Messages_Max_Order_By>;
  min?: InputMaybe<Messages_Min_Order_By>;
};

/** input type for inserting array relation for remote table "messages" */
export type Messages_Arr_Rel_Insert_Input = {
  data: Array<Messages_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Messages_On_Conflict>;
};

/** Boolean expression to filter rows from the table "messages". All fields are combined with a logical 'AND'. */
export type Messages_Bool_Exp = {
  _and?: InputMaybe<Array<Messages_Bool_Exp>>;
  _not?: InputMaybe<Messages_Bool_Exp>;
  _or?: InputMaybe<Array<Messages_Bool_Exp>>;
  chat_room?: InputMaybe<Chat_Rooms_Bool_Exp>;
  chat_room_id?: InputMaybe<Uuid_Comparison_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "messages" */
export enum Messages_Constraint {
  /** unique or primary key constraint on columns "id" */
  MessagesPkey = 'messages_pkey'
}

/** input type for inserting data into table "messages" */
export type Messages_Insert_Input = {
  chat_room?: InputMaybe<Chat_Rooms_Obj_Rel_Insert_Input>;
  chat_room_id?: InputMaybe<Scalars['uuid']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Messages_Max_Fields = {
  __typename?: 'messages_max_fields';
  chat_room_id?: Maybe<Scalars['uuid']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "messages" */
export type Messages_Max_Order_By = {
  chat_room_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Messages_Min_Fields = {
  __typename?: 'messages_min_fields';
  chat_room_id?: Maybe<Scalars['uuid']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "messages" */
export type Messages_Min_Order_By = {
  chat_room_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "messages" */
export type Messages_Mutation_Response = {
  __typename?: 'messages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Messages>;
};

/** on_conflict condition type for table "messages" */
export type Messages_On_Conflict = {
  constraint: Messages_Constraint;
  update_columns?: Array<Messages_Update_Column>;
  where?: InputMaybe<Messages_Bool_Exp>;
};

/** Ordering options when selecting data from "messages". */
export type Messages_Order_By = {
  chat_room?: InputMaybe<Chat_Rooms_Order_By>;
  chat_room_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: messages */
export type Messages_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "messages" */
export enum Messages_Select_Column {
  /** column name */
  ChatRoomId = 'chat_room_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "messages" */
export type Messages_Set_Input = {
  chat_room_id?: InputMaybe<Scalars['uuid']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "messages" */
export type Messages_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Messages_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Messages_Stream_Cursor_Value_Input = {
  chat_room_id?: InputMaybe<Scalars['uuid']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "messages" */
export enum Messages_Update_Column {
  /** column name */
  ChatRoomId = 'chat_room_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

export type Messages_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Messages_Set_Input>;
  /** filter the rows which have to be updated */
  where: Messages_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "chat_rooms" */
  delete_chat_rooms?: Maybe<Chat_Rooms_Mutation_Response>;
  /** delete single row from the table: "chat_rooms" */
  delete_chat_rooms_by_pk?: Maybe<Chat_Rooms>;
  /** delete data from the table: "messages" */
  delete_messages?: Maybe<Messages_Mutation_Response>;
  /** delete single row from the table: "messages" */
  delete_messages_by_pk?: Maybe<Messages>;
  /** delete data from the table: "roles" */
  delete_roles?: Maybe<Roles_Mutation_Response>;
  /** delete single row from the table: "roles" */
  delete_roles_by_pk?: Maybe<Roles>;
  /** delete data from the table: "user_chat_rooms" */
  delete_user_chat_rooms?: Maybe<User_Chat_Rooms_Mutation_Response>;
  /** delete single row from the table: "user_chat_rooms" */
  delete_user_chat_rooms_by_pk?: Maybe<User_Chat_Rooms>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "chat_rooms" */
  insert_chat_rooms?: Maybe<Chat_Rooms_Mutation_Response>;
  /** insert a single row into the table: "chat_rooms" */
  insert_chat_rooms_one?: Maybe<Chat_Rooms>;
  /** insert data into the table: "messages" */
  insert_messages?: Maybe<Messages_Mutation_Response>;
  /** insert a single row into the table: "messages" */
  insert_messages_one?: Maybe<Messages>;
  /** insert data into the table: "roles" */
  insert_roles?: Maybe<Roles_Mutation_Response>;
  /** insert a single row into the table: "roles" */
  insert_roles_one?: Maybe<Roles>;
  /** insert data into the table: "user_chat_rooms" */
  insert_user_chat_rooms?: Maybe<User_Chat_Rooms_Mutation_Response>;
  /** insert a single row into the table: "user_chat_rooms" */
  insert_user_chat_rooms_one?: Maybe<User_Chat_Rooms>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  login?: Maybe<LoginOutput>;
  register: RegisterOutput;
  /** update data of the table: "chat_rooms" */
  update_chat_rooms?: Maybe<Chat_Rooms_Mutation_Response>;
  /** update single row of the table: "chat_rooms" */
  update_chat_rooms_by_pk?: Maybe<Chat_Rooms>;
  /** update multiples rows of table: "chat_rooms" */
  update_chat_rooms_many?: Maybe<Array<Maybe<Chat_Rooms_Mutation_Response>>>;
  /** update data of the table: "messages" */
  update_messages?: Maybe<Messages_Mutation_Response>;
  /** update single row of the table: "messages" */
  update_messages_by_pk?: Maybe<Messages>;
  /** update multiples rows of table: "messages" */
  update_messages_many?: Maybe<Array<Maybe<Messages_Mutation_Response>>>;
  /** update data of the table: "roles" */
  update_roles?: Maybe<Roles_Mutation_Response>;
  /** update single row of the table: "roles" */
  update_roles_by_pk?: Maybe<Roles>;
  /** update multiples rows of table: "roles" */
  update_roles_many?: Maybe<Array<Maybe<Roles_Mutation_Response>>>;
  /** update data of the table: "user_chat_rooms" */
  update_user_chat_rooms?: Maybe<User_Chat_Rooms_Mutation_Response>;
  /** update single row of the table: "user_chat_rooms" */
  update_user_chat_rooms_by_pk?: Maybe<User_Chat_Rooms>;
  /** update multiples rows of table: "user_chat_rooms" */
  update_user_chat_rooms_many?: Maybe<Array<Maybe<User_Chat_Rooms_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Chat_RoomsArgs = {
  where: Chat_Rooms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Chat_Rooms_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_MessagesArgs = {
  where: Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Messages_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_RolesArgs = {
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Roles_By_PkArgs = {
  role_id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_Chat_RoomsArgs = {
  where: User_Chat_Rooms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Chat_Rooms_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Chat_RoomsArgs = {
  objects: Array<Chat_Rooms_Insert_Input>;
  on_conflict?: InputMaybe<Chat_Rooms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_Rooms_OneArgs = {
  object: Chat_Rooms_Insert_Input;
  on_conflict?: InputMaybe<Chat_Rooms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MessagesArgs = {
  objects: Array<Messages_Insert_Input>;
  on_conflict?: InputMaybe<Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Messages_OneArgs = {
  object: Messages_Insert_Input;
  on_conflict?: InputMaybe<Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RolesArgs = {
  objects: Array<Roles_Insert_Input>;
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Roles_OneArgs = {
  object: Roles_Insert_Input;
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Chat_RoomsArgs = {
  objects: Array<User_Chat_Rooms_Insert_Input>;
  on_conflict?: InputMaybe<User_Chat_Rooms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Chat_Rooms_OneArgs = {
  object: User_Chat_Rooms_Insert_Input;
  on_conflict?: InputMaybe<User_Chat_Rooms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  credentials: LoginInput;
};


/** mutation root */
export type Mutation_RootRegisterArgs = {
  credentials: RegisterInput;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_RoomsArgs = {
  _set?: InputMaybe<Chat_Rooms_Set_Input>;
  where: Chat_Rooms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_Rooms_By_PkArgs = {
  _set?: InputMaybe<Chat_Rooms_Set_Input>;
  pk_columns: Chat_Rooms_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_Rooms_ManyArgs = {
  updates: Array<Chat_Rooms_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MessagesArgs = {
  _set?: InputMaybe<Messages_Set_Input>;
  where: Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Messages_By_PkArgs = {
  _set?: InputMaybe<Messages_Set_Input>;
  pk_columns: Messages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Messages_ManyArgs = {
  updates: Array<Messages_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RolesArgs = {
  _set?: InputMaybe<Roles_Set_Input>;
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Roles_By_PkArgs = {
  _set?: InputMaybe<Roles_Set_Input>;
  pk_columns: Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Roles_ManyArgs = {
  updates: Array<Roles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_Chat_RoomsArgs = {
  _set?: InputMaybe<User_Chat_Rooms_Set_Input>;
  where: User_Chat_Rooms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Chat_Rooms_By_PkArgs = {
  _set?: InputMaybe<User_Chat_Rooms_Set_Input>;
  pk_columns: User_Chat_Rooms_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Chat_Rooms_ManyArgs = {
  updates: Array<User_Chat_Rooms_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  chat_rooms: Array<Chat_Rooms>;
  /** An aggregate relationship */
  chat_rooms_aggregate: Chat_Rooms_Aggregate;
  /** fetch data from the table: "chat_rooms" using primary key columns */
  chat_rooms_by_pk?: Maybe<Chat_Rooms>;
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** An array relationship */
  user_chat_rooms: Array<User_Chat_Rooms>;
  /** An aggregate relationship */
  user_chat_rooms_aggregate: User_Chat_Rooms_Aggregate;
  /** fetch data from the table: "user_chat_rooms" using primary key columns */
  user_chat_rooms_by_pk?: Maybe<User_Chat_Rooms>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootChat_RoomsArgs = {
  distinct_on?: InputMaybe<Array<Chat_Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chat_Rooms_Order_By>>;
  where?: InputMaybe<Chat_Rooms_Bool_Exp>;
};


export type Query_RootChat_Rooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chat_Rooms_Order_By>>;
  where?: InputMaybe<Chat_Rooms_Bool_Exp>;
};


export type Query_RootChat_Rooms_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMessagesArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Query_RootMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Query_RootMessages_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRolesArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Query_RootRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Query_RootRoles_By_PkArgs = {
  role_id: Scalars['String']['input'];
};


export type Query_RootUser_Chat_RoomsArgs = {
  distinct_on?: InputMaybe<Array<User_Chat_Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Chat_Rooms_Order_By>>;
  where?: InputMaybe<User_Chat_Rooms_Bool_Exp>;
};


export type Query_RootUser_Chat_Rooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Chat_Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Chat_Rooms_Order_By>>;
  where?: InputMaybe<User_Chat_Rooms_Bool_Exp>;
};


export type Query_RootUser_Chat_Rooms_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "roles" */
export type Roles = {
  __typename?: 'roles';
  description?: Maybe<Scalars['String']['output']>;
  role_id: Scalars['String']['output'];
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
};


/** columns and relationships of "roles" */
export type RolesUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** columns and relationships of "roles" */
export type RolesUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "roles" */
export type Roles_Aggregate = {
  __typename?: 'roles_aggregate';
  aggregate?: Maybe<Roles_Aggregate_Fields>;
  nodes: Array<Roles>;
};

/** aggregate fields of "roles" */
export type Roles_Aggregate_Fields = {
  __typename?: 'roles_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Roles_Max_Fields>;
  min?: Maybe<Roles_Min_Fields>;
};


/** aggregate fields of "roles" */
export type Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "roles". All fields are combined with a logical 'AND'. */
export type Roles_Bool_Exp = {
  _and?: InputMaybe<Array<Roles_Bool_Exp>>;
  _not?: InputMaybe<Roles_Bool_Exp>;
  _or?: InputMaybe<Array<Roles_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  role_id?: InputMaybe<String_Comparison_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
  users_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "roles" */
export enum Roles_Constraint {
  /** unique or primary key constraint on columns "role_id" */
  RolesPkey = 'roles_pkey'
}

export enum Roles_Enum {
  /** Super User have access to all rooms and can send images and messages to all rooms and terminate any user */
  SuperAdmin = 'super_admin',
  /** Normal User which have access to rooms which he is the member */
  User = 'user'
}

/** Boolean expression to compare columns of type "roles_enum". All fields are combined with logical 'AND'. */
export type Roles_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Roles_Enum>;
  _in?: InputMaybe<Array<Roles_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Roles_Enum>;
  _nin?: InputMaybe<Array<Roles_Enum>>;
};

/** input type for inserting data into table "roles" */
export type Roles_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  role_id?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Roles_Max_Fields = {
  __typename?: 'roles_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  role_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Roles_Min_Fields = {
  __typename?: 'roles_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  role_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "roles" */
export type Roles_Mutation_Response = {
  __typename?: 'roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Roles>;
};

/** input type for inserting object relation for remote table "roles" */
export type Roles_Obj_Rel_Insert_Input = {
  data: Roles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};

/** on_conflict condition type for table "roles" */
export type Roles_On_Conflict = {
  constraint: Roles_Constraint;
  update_columns?: Array<Roles_Update_Column>;
  where?: InputMaybe<Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "roles". */
export type Roles_Order_By = {
  description?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: roles */
export type Roles_Pk_Columns_Input = {
  role_id: Scalars['String']['input'];
};

/** select columns of table "roles" */
export enum Roles_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  RoleId = 'role_id'
}

/** input type for updating data in table "roles" */
export type Roles_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  role_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "roles" */
export type Roles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Roles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Roles_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  role_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "roles" */
export enum Roles_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  RoleId = 'role_id'
}

export type Roles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Roles_Set_Input>;
  /** filter the rows which have to be updated */
  where: Roles_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  chat_rooms: Array<Chat_Rooms>;
  /** An aggregate relationship */
  chat_rooms_aggregate: Chat_Rooms_Aggregate;
  /** fetch data from the table: "chat_rooms" using primary key columns */
  chat_rooms_by_pk?: Maybe<Chat_Rooms>;
  /** fetch data from the table in a streaming manner: "chat_rooms" */
  chat_rooms_stream: Array<Chat_Rooms>;
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>;
  /** fetch data from the table in a streaming manner: "messages" */
  messages_stream: Array<Messages>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table in a streaming manner: "roles" */
  roles_stream: Array<Roles>;
  /** An array relationship */
  user_chat_rooms: Array<User_Chat_Rooms>;
  /** An aggregate relationship */
  user_chat_rooms_aggregate: User_Chat_Rooms_Aggregate;
  /** fetch data from the table: "user_chat_rooms" using primary key columns */
  user_chat_rooms_by_pk?: Maybe<User_Chat_Rooms>;
  /** fetch data from the table in a streaming manner: "user_chat_rooms" */
  user_chat_rooms_stream: Array<User_Chat_Rooms>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootChat_RoomsArgs = {
  distinct_on?: InputMaybe<Array<Chat_Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chat_Rooms_Order_By>>;
  where?: InputMaybe<Chat_Rooms_Bool_Exp>;
};


export type Subscription_RootChat_Rooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chat_Rooms_Order_By>>;
  where?: InputMaybe<Chat_Rooms_Bool_Exp>;
};


export type Subscription_RootChat_Rooms_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootChat_Rooms_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Chat_Rooms_Stream_Cursor_Input>>;
  where?: InputMaybe<Chat_Rooms_Bool_Exp>;
};


export type Subscription_RootMessagesArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Subscription_RootMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Subscription_RootMessages_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMessages_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Messages_Stream_Cursor_Input>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Subscription_RootRolesArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Subscription_RootRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Subscription_RootRoles_By_PkArgs = {
  role_id: Scalars['String']['input'];
};


export type Subscription_RootRoles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Roles_Stream_Cursor_Input>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Subscription_RootUser_Chat_RoomsArgs = {
  distinct_on?: InputMaybe<Array<User_Chat_Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Chat_Rooms_Order_By>>;
  where?: InputMaybe<User_Chat_Rooms_Bool_Exp>;
};


export type Subscription_RootUser_Chat_Rooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Chat_Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Chat_Rooms_Order_By>>;
  where?: InputMaybe<User_Chat_Rooms_Bool_Exp>;
};


export type Subscription_RootUser_Chat_Rooms_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_Chat_Rooms_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Chat_Rooms_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Chat_Rooms_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "user_chat_rooms" */
export type User_Chat_Rooms = {
  __typename?: 'user_chat_rooms';
  /** An object relationship */
  chat_room: Chat_Rooms;
  chat_room_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  joined_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "user_chat_rooms" */
export type User_Chat_Rooms_Aggregate = {
  __typename?: 'user_chat_rooms_aggregate';
  aggregate?: Maybe<User_Chat_Rooms_Aggregate_Fields>;
  nodes: Array<User_Chat_Rooms>;
};

export type User_Chat_Rooms_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Chat_Rooms_Aggregate_Bool_Exp_Count>;
};

export type User_Chat_Rooms_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Chat_Rooms_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Chat_Rooms_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_chat_rooms" */
export type User_Chat_Rooms_Aggregate_Fields = {
  __typename?: 'user_chat_rooms_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<User_Chat_Rooms_Max_Fields>;
  min?: Maybe<User_Chat_Rooms_Min_Fields>;
};


/** aggregate fields of "user_chat_rooms" */
export type User_Chat_Rooms_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Chat_Rooms_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_chat_rooms" */
export type User_Chat_Rooms_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Chat_Rooms_Max_Order_By>;
  min?: InputMaybe<User_Chat_Rooms_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_chat_rooms" */
export type User_Chat_Rooms_Arr_Rel_Insert_Input = {
  data: Array<User_Chat_Rooms_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Chat_Rooms_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_chat_rooms". All fields are combined with a logical 'AND'. */
export type User_Chat_Rooms_Bool_Exp = {
  _and?: InputMaybe<Array<User_Chat_Rooms_Bool_Exp>>;
  _not?: InputMaybe<User_Chat_Rooms_Bool_Exp>;
  _or?: InputMaybe<Array<User_Chat_Rooms_Bool_Exp>>;
  chat_room?: InputMaybe<Chat_Rooms_Bool_Exp>;
  chat_room_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  joined_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_chat_rooms" */
export enum User_Chat_Rooms_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserChatRoomsPkey = 'user_chat_rooms_pkey'
}

/** input type for inserting data into table "user_chat_rooms" */
export type User_Chat_Rooms_Insert_Input = {
  chat_room?: InputMaybe<Chat_Rooms_Obj_Rel_Insert_Input>;
  chat_room_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  joined_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type User_Chat_Rooms_Max_Fields = {
  __typename?: 'user_chat_rooms_max_fields';
  chat_room_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  joined_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "user_chat_rooms" */
export type User_Chat_Rooms_Max_Order_By = {
  chat_room_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  joined_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Chat_Rooms_Min_Fields = {
  __typename?: 'user_chat_rooms_min_fields';
  chat_room_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  joined_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "user_chat_rooms" */
export type User_Chat_Rooms_Min_Order_By = {
  chat_room_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  joined_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_chat_rooms" */
export type User_Chat_Rooms_Mutation_Response = {
  __typename?: 'user_chat_rooms_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Chat_Rooms>;
};

/** on_conflict condition type for table "user_chat_rooms" */
export type User_Chat_Rooms_On_Conflict = {
  constraint: User_Chat_Rooms_Constraint;
  update_columns?: Array<User_Chat_Rooms_Update_Column>;
  where?: InputMaybe<User_Chat_Rooms_Bool_Exp>;
};

/** Ordering options when selecting data from "user_chat_rooms". */
export type User_Chat_Rooms_Order_By = {
  chat_room?: InputMaybe<Chat_Rooms_Order_By>;
  chat_room_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  joined_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_chat_rooms */
export type User_Chat_Rooms_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "user_chat_rooms" */
export enum User_Chat_Rooms_Select_Column {
  /** column name */
  ChatRoomId = 'chat_room_id',
  /** column name */
  Id = 'id',
  /** column name */
  JoinedAt = 'joined_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_chat_rooms" */
export type User_Chat_Rooms_Set_Input = {
  chat_room_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  joined_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "user_chat_rooms" */
export type User_Chat_Rooms_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Chat_Rooms_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Chat_Rooms_Stream_Cursor_Value_Input = {
  chat_room_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  joined_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "user_chat_rooms" */
export enum User_Chat_Rooms_Update_Column {
  /** column name */
  ChatRoomId = 'chat_room_id',
  /** column name */
  Id = 'id',
  /** column name */
  JoinedAt = 'joined_at',
  /** column name */
  UserId = 'user_id'
}

export type User_Chat_Rooms_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Chat_Rooms_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Chat_Rooms_Bool_Exp;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  chat_rooms: Array<Chat_Rooms>;
  /** An aggregate relationship */
  chat_rooms_aggregate: Chat_Rooms_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  email: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate;
  password_hash: Scalars['String']['output'];
  /** An object relationship */
  role: Roles;
  role_type: Roles_Enum;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An array relationship */
  user_chat_rooms: Array<User_Chat_Rooms>;
  /** An aggregate relationship */
  user_chat_rooms_aggregate: User_Chat_Rooms_Aggregate;
  username?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "users" */
export type UsersChat_RoomsArgs = {
  distinct_on?: InputMaybe<Array<Chat_Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chat_Rooms_Order_By>>;
  where?: InputMaybe<Chat_Rooms_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersChat_Rooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chat_Rooms_Order_By>>;
  where?: InputMaybe<Chat_Rooms_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersMessagesArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_Chat_RoomsArgs = {
  distinct_on?: InputMaybe<Array<User_Chat_Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Chat_Rooms_Order_By>>;
  where?: InputMaybe<User_Chat_Rooms_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_Chat_Rooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Chat_Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Chat_Rooms_Order_By>>;
  where?: InputMaybe<User_Chat_Rooms_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Bool_Exp = {
  count?: InputMaybe<Users_Aggregate_Bool_Exp_Count>;
};

export type Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  chat_rooms?: InputMaybe<Chat_Rooms_Bool_Exp>;
  chat_rooms_aggregate?: InputMaybe<Chat_Rooms_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  messages?: InputMaybe<Messages_Bool_Exp>;
  messages_aggregate?: InputMaybe<Messages_Aggregate_Bool_Exp>;
  password_hash?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<Roles_Bool_Exp>;
  role_type?: InputMaybe<Roles_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_chat_rooms?: InputMaybe<User_Chat_Rooms_Bool_Exp>;
  user_chat_rooms_aggregate?: InputMaybe<User_Chat_Rooms_Aggregate_Bool_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  chat_rooms?: InputMaybe<Chat_Rooms_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  messages?: InputMaybe<Messages_Arr_Rel_Insert_Input>;
  password_hash?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Roles_Obj_Rel_Insert_Input>;
  role_type?: InputMaybe<Roles_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_chat_rooms?: InputMaybe<User_Chat_Rooms_Arr_Rel_Insert_Input>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  password_hash?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  password_hash?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  password_hash?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  password_hash?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  chat_rooms_aggregate?: InputMaybe<Chat_Rooms_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  messages_aggregate?: InputMaybe<Messages_Aggregate_Order_By>;
  password_hash?: InputMaybe<Order_By>;
  role?: InputMaybe<Roles_Order_By>;
  role_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_chat_rooms_aggregate?: InputMaybe<User_Chat_Rooms_Aggregate_Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  RoleType = 'role_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  password_hash?: InputMaybe<Scalars['String']['input']>;
  role_type?: InputMaybe<Roles_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  password_hash?: InputMaybe<Scalars['String']['input']>;
  role_type?: InputMaybe<Roles_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  RoleType = 'role_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type CreateChatRoomMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CreateChatRoomMutation = { __typename?: 'mutation_root', insert_chat_rooms_one?: { __typename?: 'chat_rooms', id: any, name: string } | null };

export type JoinChatRoomMutationVariables = Exact<{
  chat_room_id: Scalars['uuid']['input'];
}>;


export type JoinChatRoomMutation = { __typename?: 'mutation_root', insert_user_chat_rooms_one?: { __typename?: 'user_chat_rooms', id: any, chat_room_id: any, joined_at: any } | null };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'mutation_root', login?: { __typename?: 'LoginOutput', userId: string, email: string, accessToken: string, username: string, roleType: RoleType } | null };

export type RegisterMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
}>;


export type RegisterMutation = { __typename?: 'mutation_root', register: { __typename?: 'RegisterOutput', email: string, accessToken: string, roleType: RoleType, userId: string, username: string } };

export type SendMessageToChatRoomMutationVariables = Exact<{
  chat_room_id?: InputMaybe<Scalars['uuid']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
}>;


export type SendMessageToChatRoomMutation = { __typename?: 'mutation_root', insert_messages_one?: { __typename?: 'messages', chat_room_id: any, content?: string | null, created_at: any, id: any } | null };

export type GetChatRoomsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetChatRoomsQuery = { __typename?: 'query_root', chat_rooms: Array<{ __typename?: 'chat_rooms', id: any, name: string, user: { __typename?: 'users', username?: string | null } }> };

export type GetChatRoomMessagesSubscriptionVariables = Exact<{
  chatRoomId: Scalars['uuid']['input'];
}>;


export type GetChatRoomMessagesSubscription = { __typename?: 'subscription_root', messages: Array<{ __typename?: 'messages', id: any, user_id: any, created_at: any, content?: string | null, user: { __typename?: 'users', username?: string | null } }> };

export type GetJoinedChatRoomsSubscriptionVariables = Exact<{
  user_id: Scalars['uuid']['input'];
}>;


export type GetJoinedChatRoomsSubscription = { __typename?: 'subscription_root', chat_rooms: Array<{ __typename?: 'chat_rooms', id: any, name: string, created_by: any }> };


export const CreateChatRoomDocument = gql`
    mutation createChatRoom($name: String!) {
  insert_chat_rooms_one(object: {name: $name}) {
    id
    name
  }
}
    `;
export type CreateChatRoomMutationFn = Apollo.MutationFunction<CreateChatRoomMutation, CreateChatRoomMutationVariables>;

/**
 * __useCreateChatRoomMutation__
 *
 * To run a mutation, you first call `useCreateChatRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChatRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChatRoomMutation, { data, loading, error }] = useCreateChatRoomMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateChatRoomMutation(baseOptions?: Apollo.MutationHookOptions<CreateChatRoomMutation, CreateChatRoomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateChatRoomMutation, CreateChatRoomMutationVariables>(CreateChatRoomDocument, options);
      }
export type CreateChatRoomMutationHookResult = ReturnType<typeof useCreateChatRoomMutation>;
export type CreateChatRoomMutationResult = Apollo.MutationResult<CreateChatRoomMutation>;
export type CreateChatRoomMutationOptions = Apollo.BaseMutationOptions<CreateChatRoomMutation, CreateChatRoomMutationVariables>;
export const JoinChatRoomDocument = gql`
    mutation joinChatRoom($chat_room_id: uuid!) {
  insert_user_chat_rooms_one(object: {chat_room_id: $chat_room_id}) {
    id
    chat_room_id
    joined_at
  }
}
    `;
export type JoinChatRoomMutationFn = Apollo.MutationFunction<JoinChatRoomMutation, JoinChatRoomMutationVariables>;

/**
 * __useJoinChatRoomMutation__
 *
 * To run a mutation, you first call `useJoinChatRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinChatRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinChatRoomMutation, { data, loading, error }] = useJoinChatRoomMutation({
 *   variables: {
 *      chat_room_id: // value for 'chat_room_id'
 *   },
 * });
 */
export function useJoinChatRoomMutation(baseOptions?: Apollo.MutationHookOptions<JoinChatRoomMutation, JoinChatRoomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<JoinChatRoomMutation, JoinChatRoomMutationVariables>(JoinChatRoomDocument, options);
      }
export type JoinChatRoomMutationHookResult = ReturnType<typeof useJoinChatRoomMutation>;
export type JoinChatRoomMutationResult = Apollo.MutationResult<JoinChatRoomMutation>;
export type JoinChatRoomMutationOptions = Apollo.BaseMutationOptions<JoinChatRoomMutation, JoinChatRoomMutationVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(credentials: {email: $email, password: $password}) {
    userId
    email
    accessToken
    username
    roleType
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation register($email: String!, $password: String!, $username: String!) {
  register(credentials: {email: $email, password: $password, username: $username}) {
    email
    accessToken
    roleType
    userId
    username
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const SendMessageToChatRoomDocument = gql`
    mutation sendMessageToChatRoom($chat_room_id: uuid = "", $content: String = "") {
  insert_messages_one(object: {content: $content, chat_room_id: $chat_room_id}) {
    chat_room_id
    content
    created_at
    id
  }
}
    `;
export type SendMessageToChatRoomMutationFn = Apollo.MutationFunction<SendMessageToChatRoomMutation, SendMessageToChatRoomMutationVariables>;

/**
 * __useSendMessageToChatRoomMutation__
 *
 * To run a mutation, you first call `useSendMessageToChatRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageToChatRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageToChatRoomMutation, { data, loading, error }] = useSendMessageToChatRoomMutation({
 *   variables: {
 *      chat_room_id: // value for 'chat_room_id'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useSendMessageToChatRoomMutation(baseOptions?: Apollo.MutationHookOptions<SendMessageToChatRoomMutation, SendMessageToChatRoomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendMessageToChatRoomMutation, SendMessageToChatRoomMutationVariables>(SendMessageToChatRoomDocument, options);
      }
export type SendMessageToChatRoomMutationHookResult = ReturnType<typeof useSendMessageToChatRoomMutation>;
export type SendMessageToChatRoomMutationResult = Apollo.MutationResult<SendMessageToChatRoomMutation>;
export type SendMessageToChatRoomMutationOptions = Apollo.BaseMutationOptions<SendMessageToChatRoomMutation, SendMessageToChatRoomMutationVariables>;
export const GetChatRoomsDocument = gql`
    query getChatRooms {
  chat_rooms {
    id
    name
    user {
      username
    }
  }
}
    `;

/**
 * __useGetChatRoomsQuery__
 *
 * To run a query within a React component, call `useGetChatRoomsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChatRoomsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChatRoomsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetChatRoomsQuery(baseOptions?: Apollo.QueryHookOptions<GetChatRoomsQuery, GetChatRoomsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChatRoomsQuery, GetChatRoomsQueryVariables>(GetChatRoomsDocument, options);
      }
export function useGetChatRoomsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChatRoomsQuery, GetChatRoomsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChatRoomsQuery, GetChatRoomsQueryVariables>(GetChatRoomsDocument, options);
        }
export function useGetChatRoomsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetChatRoomsQuery, GetChatRoomsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetChatRoomsQuery, GetChatRoomsQueryVariables>(GetChatRoomsDocument, options);
        }
export type GetChatRoomsQueryHookResult = ReturnType<typeof useGetChatRoomsQuery>;
export type GetChatRoomsLazyQueryHookResult = ReturnType<typeof useGetChatRoomsLazyQuery>;
export type GetChatRoomsSuspenseQueryHookResult = ReturnType<typeof useGetChatRoomsSuspenseQuery>;
export type GetChatRoomsQueryResult = Apollo.QueryResult<GetChatRoomsQuery, GetChatRoomsQueryVariables>;
export const GetChatRoomMessagesDocument = gql`
    subscription getChatRoomMessages($chatRoomId: uuid!) {
  messages(
    where: {chat_room_id: {_eq: $chatRoomId}}
    order_by: {created_at: desc}
  ) {
    id
    user_id
    created_at
    content
    user {
      username
    }
  }
}
    `;

/**
 * __useGetChatRoomMessagesSubscription__
 *
 * To run a query within a React component, call `useGetChatRoomMessagesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetChatRoomMessagesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChatRoomMessagesSubscription({
 *   variables: {
 *      chatRoomId: // value for 'chatRoomId'
 *   },
 * });
 */
export function useGetChatRoomMessagesSubscription(baseOptions: Apollo.SubscriptionHookOptions<GetChatRoomMessagesSubscription, GetChatRoomMessagesSubscriptionVariables> & ({ variables: GetChatRoomMessagesSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetChatRoomMessagesSubscription, GetChatRoomMessagesSubscriptionVariables>(GetChatRoomMessagesDocument, options);
      }
export type GetChatRoomMessagesSubscriptionHookResult = ReturnType<typeof useGetChatRoomMessagesSubscription>;
export type GetChatRoomMessagesSubscriptionResult = Apollo.SubscriptionResult<GetChatRoomMessagesSubscription>;
export const GetJoinedChatRoomsDocument = gql`
    subscription getJoinedChatRooms($user_id: uuid!) {
  chat_rooms(where: {user_chat_rooms: {user_id: {_eq: $user_id}}}) {
    id
    name
    created_by
  }
}
    `;

/**
 * __useGetJoinedChatRoomsSubscription__
 *
 * To run a query within a React component, call `useGetJoinedChatRoomsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetJoinedChatRoomsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJoinedChatRoomsSubscription({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetJoinedChatRoomsSubscription(baseOptions: Apollo.SubscriptionHookOptions<GetJoinedChatRoomsSubscription, GetJoinedChatRoomsSubscriptionVariables> & ({ variables: GetJoinedChatRoomsSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetJoinedChatRoomsSubscription, GetJoinedChatRoomsSubscriptionVariables>(GetJoinedChatRoomsDocument, options);
      }
export type GetJoinedChatRoomsSubscriptionHookResult = ReturnType<typeof useGetJoinedChatRoomsSubscription>;
export type GetJoinedChatRoomsSubscriptionResult = Apollo.SubscriptionResult<GetJoinedChatRoomsSubscription>;