import {
  OperationVariables,
  DocumentNode,
  QueryHookOptions,
  useQuery,
  QueryResult,
} from '@apollo/client';

function useImperativeQuery<TData = any, TVariables = OperationVariables>(
  query: DocumentNode,
  options: QueryHookOptions<TData, TVariables> = {},
): QueryResult<TData, TVariables>['refetch'] {
  const { refetch } = useQuery<TData, TVariables>(query, {
    ...options,
    skip: true,
  });
  const imperativelyCallQuery = (queryVariables: TVariables) => {
    return refetch(queryVariables);
  };

  return imperativelyCallQuery;
}

export default useImperativeQuery;
