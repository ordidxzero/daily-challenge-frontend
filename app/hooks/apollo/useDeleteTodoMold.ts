import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import { DELETE_TODO_MOLD } from './utils/graphql';
import {
  deleteTodoMold as deleteTodoMoldAction,
  failureGetData,
} from '../../config/store/main';
import { UDTData, UDInput } from './utils/type';

function useDeleteTodoMold() {
  const [deleteTodoMoldMutation, { loading }] = useMutation<UDTData, UDInput>(
    DELETE_TODO_MOLD,
  );
  const dispatch = useDispatch();
  const deleteTodoMold = async (id: string) => {
    return deleteTodoMoldMutation({ variables: { id } })
      .then(() => dispatch(deleteTodoMoldAction(id)))
      .catch(error =>
        dispatch(failureGetData({ type: 'deleteTodoMold', error })),
      );
  };
  return { deleteTodoMold, loading };
}

export default useDeleteTodoMold;
