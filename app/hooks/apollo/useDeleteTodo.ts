import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import { DELETE_TODO } from './utils/graphql';
import { deleteTodo as deleteTodoAction } from '../../config/store/main';

function useDeleteTodo() {
  const [deleteTodoMutation] = useMutation(DELETE_TODO);
  const dispatch = useDispatch();
  const deleteTodo = (data: { dateString: string; id: string }) => {
    dispatch(deleteTodoAction(data));
    deleteTodoMutation({ variables: { id: data.id } });
  };
  return deleteTodo;
}

export default useDeleteTodo;
