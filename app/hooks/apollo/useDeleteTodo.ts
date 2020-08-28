import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import { DELETE_TODO } from './utils/graphql';
import {
  deleteTodo as deleteTodoAction,
  startLoading,
  failureGetData,
  finishLoading,
  DeleteTodoData,
} from '../../config/store/main';
import { UDInput, UDTData } from './utils/type';

function useDeleteTodo() {
  const [deleteTodoMutation] = useMutation<UDTData, UDInput>(DELETE_TODO);
  const dispatch = useDispatch();
  const deleteTodo = useCallback(
    ({ id, dateString }: DeleteTodoData) => {
      dispatch(startLoading('deleteTodo'));
      return deleteTodoMutation({ variables: { id } })
        .then(() => dispatch(deleteTodoAction({ id, dateString })))
        .catch(error => dispatch(failureGetData({ type: 'deleteTodo', error })))
        .finally(() => dispatch(finishLoading('deleteTodo')));
    },
    [dispatch],
  );
  return deleteTodo;
}

export default useDeleteTodo;
