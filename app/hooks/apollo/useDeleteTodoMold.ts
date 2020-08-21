import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import { DELETE_TODO_MOLD } from './utils/graphql';
import {
  deleteTodoMold as deleteTodoMoldAction,
  startLoading,
  failureGetData,
  finishLoading,
} from '../../config/store/main';

function useDeleteTodoMold() {
  const [deleteTodoMoldMutation] = useMutation(DELETE_TODO_MOLD);
  const dispatch = useDispatch();
  const deleteTodoMold = (id: string) => {
    dispatch(startLoading('deleteTodoMold'));
    return deleteTodoMoldMutation({ variables: { id } })
      .then(() => {
        dispatch(deleteTodoMoldAction(id));
      })
      .catch(error =>
        dispatch(failureGetData({ type: 'deleteTodoMold', error })),
      )
      .finally(() => dispatch(finishLoading('deleteTodoMold')));
  };
  return deleteTodoMold;
}

export default useDeleteTodoMold;
