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
import { ToggleTodoData, ToggleTodoInput } from './utils/type';
import useReduxState from '../common/useReduxState';

function useToggleTodo() {
  const {
    main: {
      loading: { toggleTodo: loading },
    },
  } = useReduxState();
  const dispatch = useDispatch();
  const [toggleTodoMutation] = useMutation<ToggleTodoData, ToggleTodoInput>(
    TOGGLE_TODO,
  );
  const toggleTodo = useCallback(
    ({ dateString, id, done }: ToggledTodoData & { done: boolean }) => {
      dispatch(startLoading('toggleTodo'));
      return toggleTodoMutation({ variables: { id, done: !done } })
        .then(() => dispatch(toggleTodoAction({ dateString, id, done: !done })))
        .catch(error => dispatch(failureGetData({ type: 'toggleTodo', error })))
        .finally(() => dispatch(finishLoading('toggleTodo')));
    },
    [dispatch],
  );
  return { toggleTodo, loading };
}

export default useToggleTodo;
