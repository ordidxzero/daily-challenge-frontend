import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import { DELETE_TODO_MOLD } from './utils/graphql';
import { deleteTodoMold as deleteTodoMoldAction } from '../../config/store/main';

function useDeleteTodo() {
  const [deleteTodoMoldMutation] = useMutation(DELETE_TODO_MOLD);
  const dispatch = useDispatch();
  const deleteTodoMold = (id: string) => {
    dispatch(deleteTodoMoldAction(id));
    deleteTodoMoldMutation({ variables: { id } });
  };
  return deleteTodoMold;
}

export default useDeleteTodo;
