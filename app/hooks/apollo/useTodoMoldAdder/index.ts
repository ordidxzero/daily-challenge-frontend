import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { CREATE_TODO_MOLD } from '../utils/graphql';
import useInput from '../../common/useInput';
import { addTodos } from '../../../config/store/main';
import { generateTodoData } from './utils';
import { useMemo } from 'react';

function useTodoMoldAdder() {
  const dispatch = useDispatch();
  const { softenForm } = useInput();
  const [createTodoMoldMutation] = useMutation(CREATE_TODO_MOLD);
  const { amount, ...data } = softenForm.todo;

  const fakeData = useMemo(() => generateTodoData(softenForm.todo), [
    softenForm.todo,
  ]);

  const createTodoMold = () =>
    createTodoMoldMutation({
      variables: { ...data, currentAmount: amount },
    }).then(() => dispatch(addTodos(fakeData)));

  return createTodoMold;
}

export default useTodoMoldAdder;
