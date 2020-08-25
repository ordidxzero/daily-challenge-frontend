import {
  OperationVariables,
  DocumentNode,
  QueryHookOptions,
} from '@apollo/client';
import { useDispatch } from 'react-redux';
import useImperativeQuery from './useImperativeQuery';
import {
  startLoading,
  successGetData,
  failureGetData,
  finishLoading,
} from '../../config/store/main';

function useImperativeQueryThunk<TData = any, TVariables = OperationVariables>({
  query,
  options = {},
  type,
}: {
  query: DocumentNode;
  options: QueryHookOptions<TData, TVariables>;
  type: 'around' | 'before' | 'after' | 'mold';
}) {
  const keys = {
    around: 'getTodos',
    before: 'getTodos',
    after: 'getTodos',
    mold: 'getTodoMolds',
  };
  const dispatch = useDispatch();
  const refetch = useImperativeQuery(query, options);
  const imperativelyCallQueryThunk = (queryVariables: TVariables) => {
    dispatch(startLoading(type));
    refetch(queryVariables)
      .then(
        ({
          data: {
            [keys[type]]: { data, error },
          },
        }) => {
          if (error) {
            return dispatch(failureGetData({ type, error }));
          } else {
            return dispatch(successGetData({ type, data }));
          }
        },
      )
      .catch(error => dispatch(failureGetData({ type, error })))
      .finally(() => dispatch(finishLoading(type)));
  };

  return imperativelyCallQueryThunk;
}

export default useImperativeQueryThunk;
