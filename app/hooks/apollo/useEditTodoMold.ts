import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import { EDIT_TODO_MOLD } from './utils/graphql';
import useInput from '../common/useInput';
import {
  editTodoMold as editTodoMoldAction,
  addData,
  startLoading,
  failureGetData,
  finishLoading,
} from '../../config/store/main';
import { generateData } from './useTodoMoldAdder/utils';
import { EditTodoMoldData, EditTodoMoldInput } from './utils/type';

function useEditTodoMold() {
  const [editTodoMoldMutation] = useMutation<
    EditTodoMoldData,
    EditTodoMoldInput
  >(EDIT_TODO_MOLD);
  const { softenForm } = useInput();
  const dispatch = useDispatch();
  const {
    todo: { startDate, amount, ...inputData },
  } = softenForm;

  const editTodoMold = (id: string) => {
    dispatch(startLoading('editTodoMold'));
    return editTodoMoldMutation({
      variables: {
        id,
        ...inputData,
        restartDate: startDate,
        newAmount: amount,
      },
    })
      .then(({ data }) => {
        if (data) {
          const { newTodoMold, oldTodoMoldId, todoIds } = data.editTodoMold;
          if (newTodoMold && oldTodoMoldId && todoIds) {
            const { id, amount } = newTodoMold;
            dispatch(
              editTodoMoldAction({
                oldTodoMoldId,
                newTodoMoldId: id,
                restartDate: startDate,
              }),
            );
            return dispatch(
              addData(
                generateData({
                  data: {
                    ...softenForm.todo,
                    amount,
                  },
                  todoMoldId: id,
                  todoIds,
                }),
              ),
            );
          }
        }
        throw Error('Data does not returned..');
      })
      .catch(error => dispatch(failureGetData({ type: 'editTodoMold', error })))
      .finally(() => dispatch(finishLoading('editTodoMold')));
  };
  return editTodoMold;
}

export default useEditTodoMold;
