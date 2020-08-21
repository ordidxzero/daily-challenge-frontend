import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import { EDIT_TODO_MOLD } from './utils/graphql';
import useInput from '../common/useInput';
import {
  editTodoMold as editTodoMoldAction,
  startLoading,
  failureGetData,
  finishLoading,
} from '../../config/store/main';
import { generateTodoData } from './useTodoMoldAdder/utils';

function useEditTodoMold() {
  const [editTodoMoldMutation] = useMutation(EDIT_TODO_MOLD);
  const { softenForm } = useInput();
  const dispatch = useDispatch();
  const {
    todo: { startDate, ...inputData },
  } = softenForm;

  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    todo: { amount: a, startDate: b, unit: c, ...editData },
  } = softenForm;

  const fakeTodoData = useCallback(
    (id: string, amount: number) =>
      generateTodoData({ ...softenForm.todo, amount }, id),
    [softenForm.todo],
  );

  const editTodoMold = (id: string) => {
    dispatch(startLoading('editTodoMold'));
    return editTodoMoldMutation({
      variables: {
        id,
        ...inputData,
        restartDate: startDate,
        newAmount: inputData.amountDifference,
      },
    })
      .then(
        ({
          data: {
            editTodoMold: {
              undeletedLastTodo: { amount },
            },
          },
        }) => {
          dispatch(
            editTodoMoldAction({
              id,
              data: editData,
              todoData: fakeTodoData(id, amount + editData.amountDifference),
            }),
          );
        },
      )
      .catch(error => dispatch(failureGetData({ type: 'editTodoMold', error })))
      .finally(() => dispatch(finishLoading('editTodoMold')));
  };
  return editTodoMold;
}

export default useEditTodoMold;
