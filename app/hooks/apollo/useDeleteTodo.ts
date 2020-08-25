import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import { DELETE_TODO } from './utils/graphql';
import {
  deleteTodo as deleteTodoAction,
  startLoading,
  failureGetData,
  finishLoading,
} from '../../config/store/main';
import { UDInput, UDTData } from './utils/type';

function useDeleteTodo() {
  const [deleteTodoMutation] = useMutation<UDTData, UDInput>(DELETE_TODO);
  const dispatch = useDispatch();
  const deleteTodo = (data: { dateString: string; id: string }) => {
    dispatch(startLoading('deleteTodo'));
    return deleteTodoMutation({ variables: { id: data.id } })
      .then(() => {
        dispatch(deleteTodoAction(data));
      })
      .catch(error => dispatch(failureGetData({ type: 'deleteTodo', error })))
      .finally(() => dispatch(finishLoading('deleteTodo')));
  };
  return deleteTodo;
}

export default useDeleteTodo;
