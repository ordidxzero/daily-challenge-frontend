import { useDispatch } from 'react-redux';
import {
  toggleTodo as toggleTodoAction,
  ToggledTodoData,
  startLoading,
  failureGetData,
  finishLoading,
} from '../../config/store/main';
import { useCallback } from 'react';
import { useMutation } from '@apollo/client';
import { TOGGLE_TODO } from './utils/graphql';

function useToggleTodo() {
  const dispatch = useDispatch();
  const [toggleTodoMutation] = useMutation(TOGGLE_TODO);
  const toggleTodo = useCallback(
    ({ dateString, id, done }: ToggledTodoData & { done: boolean }) => {
      dispatch(startLoading('toggleTodo'));
      return toggleTodoMutation({ variables: { id, done: !done } })
        .then(() => dispatch(toggleTodoAction({ dateString, id })))
        .catch(error => dispatch(failureGetData({ type: 'toggleTodo', error })))
        .finally(() => dispatch(finishLoading('toggleTodo')));
    },
    [dispatch],
  );
  return toggleTodo;
}

export default useToggleTodo;
