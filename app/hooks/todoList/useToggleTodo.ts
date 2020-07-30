import { useDispatch } from 'react-redux';
import {
  toggleTodo as toggleTodoAction,
  ToggledTodoData,
} from '../../config/store/main';
import { useCallback } from 'react';

function useToggleTodo() {
  const dispatch = useDispatch();
  const toggleTodo = useCallback(
    ({ dateString, id }: ToggledTodoData) =>
      dispatch(toggleTodoAction({ dateString, id })),
    [dispatch],
  );
  return toggleTodo;
}

export default useToggleTodo;
