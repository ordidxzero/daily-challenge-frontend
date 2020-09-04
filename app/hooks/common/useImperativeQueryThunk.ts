import {
  OperationVariables,
  DocumentNode,
  QueryHookOptions,
} from '@apollo/client';
import { useDispatch } from 'react-redux';
import useImperativeQuery from './useImperativeQuery';
import { successGetData, failureGetData } from '../../config/store/main';
import { useState } from 'react';

function useImperativeQueryThunk<TVariables = OperationVariables>({
  query,
  options = {},
  type,
}: {
  query: DocumentNode;
  options: QueryHookOptions<any, TVariables>;
  type: 'around' | 'before' | 'after' | 'mold';
}): [(queryVariables: TVariables) => void, boolean] {
  const keys = {
    around: 'getTodos',
    before: 'getTodos',
    after: 'getTodos',
    mold: 'getTodoMolds',
  };
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const refetch = useImperativeQuery(query, options);
  const imperativelyCallQueryThunk = (queryVariables: TVariables) => {
    setLoading(true);
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
      .finally(() => setLoading(false));
  };

  return [imperativelyCallQueryThunk, loading];
}

export default useImperativeQueryThunk;
