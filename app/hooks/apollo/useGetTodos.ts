import { GET_TODOS } from './utils/graphql';
import {
  getAroundTodosAsync,
  getBeforeTodosAsync,
  getAfterTodosAsync,
} from '../../config/store/main/actions';
import useImperativeQueryThunk from '../common/useImperativeQueryThunk';

const requestType = {
  around: getAroundTodosAsync,
  before: getBeforeTodosAsync,
  after: getAfterTodosAsync,
};

function useGetTodos(type: 'around' | 'before' | 'after') {
  const refetch = useImperativeQueryThunk({
    query: GET_TODOS,
    options: {
      variables: { dateString: '', position: [] as number[] },
    },
    action: requestType[type],
  });
  const getTodos = refetch('getTodos');
  return getTodos;
}

export default useGetTodos;
