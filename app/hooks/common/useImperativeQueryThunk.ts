import {
  OperationVariables,
  DocumentNode,
  QueryHookOptions,
} from '@apollo/client';
import { useDispatch } from 'react-redux';
import useImperativeQuery from './useImperativeQuery';
import { getDataAsync } from '../../config/store/main';

function useImperativeQueryThunk<TVariables = OperationVariables>({
  query,
  options = {},
  type,
}: {
  query: DocumentNode;
  options: QueryHookOptions<any, TVariables>;
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
  const { request, success, failure } = getDataAsync;
  const imperativelyCallQueryThunk = (queryVariables: TVariables) => {
    dispatch(request(type));
    refetch(queryVariables).then(
      ({
        data: {
          [keys[type]]: { data, error },
        },
      }) => {
        if (error) {
          return dispatch(failure({ type, error }));
        } else {
          return dispatch(success({ type, data }));
        }
      },
    );
  };

  return imperativelyCallQueryThunk;
}

export default useImperativeQueryThunk;
