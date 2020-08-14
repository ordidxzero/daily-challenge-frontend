import { useMutation } from '@apollo/client';
import { EDIT_TODO } from './utils/graphql';
import useInput from '../common/useInput';
import { editTodo as editTodoAction } from '../../config/store/main';
import { useDispatch } from 'react-redux';

function useEditTodo() {
  const [editTodoMutation] = useMutation(EDIT_TODO);
  const { softenForm } = useInput();
  const {
    todo: { startDate, title, amount, unit, startTime, endTime },
  } = softenForm;
  const dispatch = useDispatch();

  const editTodo = (id: string) => {
    const data = {
      id,
      title,
      dateString: startDate,
      amount,
      unit,
      startTime,
      endTime,
    };
    dispatch(editTodoAction(data));
    editTodoMutation({
      variables: data,
    });
  };
  return editTodo;
}

export default useEditTodo;
