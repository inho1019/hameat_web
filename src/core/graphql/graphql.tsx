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
};

export type BoardDto = {
  __typename?: 'BoardDTO';
  boardSeq: Scalars['ID']['output'];
  content: Scalars['String']['output'];
  fav: Scalars['String']['output'];
  hit: Scalars['Int']['output'];
  logTime: Scalars['String']['output'];
  secret: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  type: Scalars['Int']['output'];
  url: Scalars['String']['output'];
  userSeq?: Maybe<Scalars['ID']['output']>;
};

export type BoardWriteDto = {
  content: Scalars['String']['input'];
  fav: Scalars['String']['input'];
  hit: Scalars['Int']['input'];
  secret: Scalars['Int']['input'];
  title: Scalars['String']['input'];
  type: Scalars['Int']['input'];
  url: Scalars['String']['input'];
  userSeq: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  boardWrite: BoardDto;
};


export type MutationBoardWriteArgs = {
  boardDTO: BoardWriteDto;
};

export type Query = {
  __typename?: 'Query';
  boardList?: Maybe<Array<Maybe<BoardDto>>>;
  boardListType?: Maybe<Array<Maybe<BoardDto>>>;
  boardView?: Maybe<BoardDto>;
};


export type QueryBoardListTypeArgs = {
  type: Scalars['Int']['input'];
};


export type QueryBoardViewArgs = {
  boardSeq: Scalars['ID']['input'];
};

export type GetBoardListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBoardListQuery = { __typename?: 'Query', boardList?: Array<{ __typename?: 'BoardDTO', boardSeq: string, title: string, url: string, fav: string, hit: number, logTime: string } | null> | null };

export type GetBoardListTypeQueryVariables = Exact<{
  type: Scalars['Int']['input'];
}>;


export type GetBoardListTypeQuery = { __typename?: 'Query', boardListType?: Array<{ __typename?: 'BoardDTO', boardSeq: string, title: string, url: string, fav: string, hit: number, logTime: string } | null> | null };

export type GetBoardViewQueryVariables = Exact<{
  boardSeq: Scalars['ID']['input'];
}>;


export type GetBoardViewQuery = { __typename?: 'Query', boardView?: { __typename?: 'BoardDTO', title: string, content: string, fav: string, hit: number, logTime: string } | null };


export const GetBoardListDocument = gql`
    query GetBoardList {
  boardList {
    boardSeq
    title
    url
    fav
    hit
    logTime
  }
}
    `;

/**
 * __useGetBoardListQuery__
 *
 * To run a query within a React component, call `useGetBoardListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBoardListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBoardListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBoardListQuery(baseOptions?: Apollo.QueryHookOptions<GetBoardListQuery, GetBoardListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBoardListQuery, GetBoardListQueryVariables>(GetBoardListDocument, options);
      }
export function useGetBoardListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBoardListQuery, GetBoardListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBoardListQuery, GetBoardListQueryVariables>(GetBoardListDocument, options);
        }
export function useGetBoardListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBoardListQuery, GetBoardListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBoardListQuery, GetBoardListQueryVariables>(GetBoardListDocument, options);
        }
export type GetBoardListQueryHookResult = ReturnType<typeof useGetBoardListQuery>;
export type GetBoardListLazyQueryHookResult = ReturnType<typeof useGetBoardListLazyQuery>;
export type GetBoardListSuspenseQueryHookResult = ReturnType<typeof useGetBoardListSuspenseQuery>;
export type GetBoardListQueryResult = Apollo.QueryResult<GetBoardListQuery, GetBoardListQueryVariables>;
export const GetBoardListTypeDocument = gql`
    query GetBoardListType($type: Int!) {
  boardListType(type: $type) {
    boardSeq
    title
    url
    fav
    hit
    logTime
  }
}
    `;

/**
 * __useGetBoardListTypeQuery__
 *
 * To run a query within a React component, call `useGetBoardListTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBoardListTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBoardListTypeQuery({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function useGetBoardListTypeQuery(baseOptions: Apollo.QueryHookOptions<GetBoardListTypeQuery, GetBoardListTypeQueryVariables> & ({ variables: GetBoardListTypeQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBoardListTypeQuery, GetBoardListTypeQueryVariables>(GetBoardListTypeDocument, options);
      }
export function useGetBoardListTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBoardListTypeQuery, GetBoardListTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBoardListTypeQuery, GetBoardListTypeQueryVariables>(GetBoardListTypeDocument, options);
        }
export function useGetBoardListTypeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBoardListTypeQuery, GetBoardListTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBoardListTypeQuery, GetBoardListTypeQueryVariables>(GetBoardListTypeDocument, options);
        }
export type GetBoardListTypeQueryHookResult = ReturnType<typeof useGetBoardListTypeQuery>;
export type GetBoardListTypeLazyQueryHookResult = ReturnType<typeof useGetBoardListTypeLazyQuery>;
export type GetBoardListTypeSuspenseQueryHookResult = ReturnType<typeof useGetBoardListTypeSuspenseQuery>;
export type GetBoardListTypeQueryResult = Apollo.QueryResult<GetBoardListTypeQuery, GetBoardListTypeQueryVariables>;
export const GetBoardViewDocument = gql`
    query getBoardView($boardSeq: ID!) {
  boardView(boardSeq: $boardSeq) {
    title
    content
    fav
    hit
    logTime
  }
}
    `;

/**
 * __useGetBoardViewQuery__
 *
 * To run a query within a React component, call `useGetBoardViewQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBoardViewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBoardViewQuery({
 *   variables: {
 *      boardSeq: // value for 'boardSeq'
 *   },
 * });
 */
export function useGetBoardViewQuery(baseOptions: Apollo.QueryHookOptions<GetBoardViewQuery, GetBoardViewQueryVariables> & ({ variables: GetBoardViewQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBoardViewQuery, GetBoardViewQueryVariables>(GetBoardViewDocument, options);
      }
export function useGetBoardViewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBoardViewQuery, GetBoardViewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBoardViewQuery, GetBoardViewQueryVariables>(GetBoardViewDocument, options);
        }
export function useGetBoardViewSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBoardViewQuery, GetBoardViewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBoardViewQuery, GetBoardViewQueryVariables>(GetBoardViewDocument, options);
        }
export type GetBoardViewQueryHookResult = ReturnType<typeof useGetBoardViewQuery>;
export type GetBoardViewLazyQueryHookResult = ReturnType<typeof useGetBoardViewLazyQuery>;
export type GetBoardViewSuspenseQueryHookResult = ReturnType<typeof useGetBoardViewSuspenseQuery>;
export type GetBoardViewQueryResult = Apollo.QueryResult<GetBoardViewQuery, GetBoardViewQueryVariables>;