import { useCallback } from 'react';
import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { CREATE_TODO_MOLD } from '../utils/graphql';
import useInput from '../../common/useInput';
import {
  addData,
  startLoading,
  finishLoading,
} from '../../../config/store/main';
import { generateData } from './utils';
import { CreateTodoMoldData, CreateTodoMoldInput } from '../utils/type';
import { FakeDataParams } from './types';

function useTodoMoldAdder() {
  const dispatch = useDispatch();
  const { softenForm } = useInput();
  const [createTodoMoldMutation] = useMutation<
    CreateTodoMoldData,
    CreateTodoMoldInput
  >(CREATE_TODO_MOLD);
  const { amount, ...data } = softenForm.todo;

  const fakeData = useCallback(
    ({ todoMoldId, todoIds }: FakeDataParams) =>
      generateData({ data: softenForm.todo, todoMoldId, todoIds }),
    [softenForm.todo],
  );

  const createTodoMold = () => {
    dispatch(startLoading('createMold'));
    return createTodoMoldMutation({
      variables: {
        ...data,
        endDate: data.isRepeat ? data.endDate : data.startDate,
        currentAmount: amount,
      },
    })
      .then(({ data }) => {
        if (data) {
          const { todoMoldId, todoIds } = data.createTodoMold;
          if (todoIds) {
            dispatch(addData(fakeData({ todoMoldId, todoIds })));
          }
        }
      })
      .finally(() => dispatch(finishLoading('createMold')));
  };

  return createTodoMold;
}

export default useTodoMoldAdder;
