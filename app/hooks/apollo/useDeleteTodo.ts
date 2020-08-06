import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import { DELETE_TODO } from './utils/graphql';
import { deleteTodo as deleteTodoAction } from '../../config/store/main';

function useDeleteTodo() {
  const [deleteTodoMutation] = useMutation(DELETE_TODO);
  const dispatch = useDispatch();
  const deleteTodoFront = (data: { dateString: string; id: string }) =>
    dispatch(deleteTodoAction(data));
  const deleteTodoBack = (id: string) =>
    deleteTodoMutation({ variables: { id } });
  return { deleteTodoBack, deleteTodoFront };
}

export default useDeleteTodo;
