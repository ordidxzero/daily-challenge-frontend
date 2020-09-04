import { GET_TODOS } from './utils/graphql';
import useImperativeQueryThunk from '../common/useImperativeQueryThunk';
import { GetTodosInput } from './utils/type';

function useGetTodos(
  type: 'around' | 'before' | 'after',
): [(queryVariables: GetTodosInput) => void, boolean] {
  const [imperativelyCallQueryThunk, loading] = useImperativeQueryThunk<
    GetTodosInput
  >({
    query: GET_TODOS,
    options: {
      variables: { dateString: '', position: [] },
    },
    type,
  });
  return [imperativelyCallQueryThunk, loading];
}

export default useGetTodos;
