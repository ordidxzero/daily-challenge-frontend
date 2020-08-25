import { GET_TODOS } from './utils/graphql';
import useImperativeQueryThunk from '../common/useImperativeQueryThunk';
import { GetTodosData, GetTodosInput } from './utils/type';

function useGetTodos(type: 'around' | 'before' | 'after') {
  const refetch = useImperativeQueryThunk<GetTodosData, GetTodosInput>({
    query: GET_TODOS,
    options: {
      variables: { dateString: '', position: [] },
    },
    type,
  });
  return refetch;
}

export default useGetTodos;
