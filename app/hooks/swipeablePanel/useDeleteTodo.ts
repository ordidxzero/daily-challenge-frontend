import { useDispatch } from 'react-redux';
import { deleteTodo as deleteTodoAction } from '../../config/store/main';

function useDeleteTodo() {
  const dispatch = useDispatch();
  const deleteTodo = (data: { dateString: string; id: string }) =>
    dispatch(deleteTodoAction(data));
  return deleteTodo;
}

export default useDeleteTodo;
