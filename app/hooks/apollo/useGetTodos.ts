import { GET_TODOS } from './utils/graphql';
import useImperativeQueryThunk from '../common/useImperativeQueryThunk';

function useGetTodos(type: 'around' | 'before' | 'after') {
  const refetch = useImperativeQueryThunk({
    query: GET_TODOS,
    options: {
      variables: { dateString: '', position: [] as number[] },
    },
    type,
  });
  const getTodos = refetch();
  return getTodos;
}

export default useGetTodos;
