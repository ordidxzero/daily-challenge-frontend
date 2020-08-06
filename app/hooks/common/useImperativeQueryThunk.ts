import {
  OperationVariables,
  DocumentNode,
  QueryHookOptions,
} from '@apollo/client';
import { useDispatch } from 'react-redux';
import useImperativeQuery from './useImperativeQuery';

function useImperativeQueryThunk<TVariables = OperationVariables>({
  query,
  options = {},
  action,
}: {
  query: DocumentNode;
  options: QueryHookOptions<any, TVariables>;
  action: any;
}) {
  const dispatch = useDispatch();
  const refetch = useImperativeQuery(query, options);
  const { request, success, failure } = action;
  const imperativelyCallQueryThunk = (key: any) => (
    queryVariables: TVariables,
  ) => {
    dispatch(request());
    refetch(queryVariables)
      .then(
        ({
          data: {
            [key]: { data, error },
          },
        }) => {
          if (error) {
            return dispatch(failure(error));
          } else {
            return dispatch(success(data));
          }
        },
      )
      .catch(error => console.log(error));
  };

  return imperativelyCallQueryThunk;
}

export default useImperativeQueryThunk;
