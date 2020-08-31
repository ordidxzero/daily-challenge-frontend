import { useDispatch } from 'react-redux';
import {
  toggleTodo as toggleTodoAction,
  ToggledTodoData,
  failureGetData,
} from '../../config/store/main';
import { useCallback } from 'react';
import { useMutation } from '@apollo/client';
import { TOGGLE_TODO } from './utils/graphql';
import { ToggleTodoData, ToggleTodoInput } from './utils/type';

function useToggleTodo() {
  const dispatch = useDispatch();
  const [toggleTodoMutation, { loading }] = useMutation<
    ToggleTodoData,
    ToggleTodoInput
  >(TOGGLE_TODO);
  const toggleTodo = useCallback(
    async ({ dateString, id, done }: ToggledTodoData) =>
      toggleTodoMutation({ variables: { id, done: !done } })
        .then(() => dispatch(toggleTodoAction({ dateString, id, done: !done })))
        .catch(error =>
          dispatch(failureGetData({ type: 'toggleTodo', error })),
        ),
    [dispatch],
  );
  return { toggleTodo, loading };
}

export default useToggleTodo;
