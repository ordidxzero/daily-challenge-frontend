import { useDispatch } from 'react-redux';
import { GET_TODOS } from './utils/graphql';
import {
  getAroundTodosAsync,
  getBeforeTodosAsync,
  getAfterTodosAsync,
} from '../../config/store/main/actions';
import useImperativeQuery from '../common/useImperativeQuery';

const requestType = {
  around: getAroundTodosAsync,
  before: getBeforeTodosAsync,
  after: getAfterTodosAsync,
};

function useGetTodos(type: 'around' | 'before' | 'after') {
  const { request, success, failure } = requestType[type];
  const dispatch = useDispatch();
  const refetch = useImperativeQuery(GET_TODOS, {
    variables: { dateString: '', position: [] as number[] },
  });
  const getTodos = (variables?: { dateString: string; position: number[] }) => {
    dispatch(request());
    refetch(variables)
      .then(
        ({
          data: {
            getTodos: { agenda, error },
          },
        }) => {
          if (error) {
            return dispatch(failure(error));
          } else {
            return dispatch(success(agenda));
          }
        },
      )
      .catch(error => console.log(error));
  };
  return getTodos;
}

export default useGetTodos;
