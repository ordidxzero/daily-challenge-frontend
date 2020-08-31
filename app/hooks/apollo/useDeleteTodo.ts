import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import { DELETE_TODO } from './utils/graphql';
import {
  deleteTodo as deleteTodoAction,
  failureGetData,
  DeleteTodoData,
} from '../../config/store/main';
import { UDInput, UDTData } from './utils/type';

function useDeleteTodo() {
  const [deleteTodoMutation, { loading }] = useMutation<UDTData, UDInput>(
    DELETE_TODO,
  );
  const dispatch = useDispatch();
  const deleteTodo = useCallback(
    async ({ id, dateString }: DeleteTodoData) => {
      return deleteTodoMutation({ variables: { id } })
        .then(() => dispatch(deleteTodoAction({ id, dateString })))
        .catch(error =>
          dispatch(failureGetData({ type: 'deleteTodo', error })),
        );
    },
    [dispatch],
  );
  return { deleteTodo, loading };
}

export default useDeleteTodo;
