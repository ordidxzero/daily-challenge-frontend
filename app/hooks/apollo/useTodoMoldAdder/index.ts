import { useCallback } from 'react';
import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { CREATE_TODO_MOLD } from '../utils/graphql';
import useInput from '../../common/useInput';
import { addData } from '../../../config/store/main';
import { generateData } from './utils';

function useTodoMoldAdder() {
  const dispatch = useDispatch();
  const { softenForm } = useInput();
  const [createTodoMoldMutation] = useMutation(CREATE_TODO_MOLD);
  const { amount, ...data } = softenForm.todo;

  const fakeData = useCallback(
    (id: string) => generateData(softenForm.todo, id),
    [softenForm.todo],
  );

  const createTodoMold = () =>
    createTodoMoldMutation({
      variables: { ...data, currentAmount: amount },
    }).then(
      ({
        data: {
          createTodoMold: { todoMoldId },
        },
      }) => {
        dispatch(addData(fakeData(todoMoldId)));
      },
    );

  return createTodoMold;
}

export default useTodoMoldAdder;
