import { useDispatch } from 'react-redux';
import { selectTodo as selectTodoAction } from '../../config/store/main';

function useSelectedTodo() {
  const dispatch = useDispatch();
  const selectTodo = (id: string) => dispatch(selectTodoAction(id));
  return selectTodo;
}

export default useSelectedTodo;
