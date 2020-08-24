import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { EDIT_TODO } from './utils/graphql';
import useInput from '../common/useInput';
import {
  editTodo as editTodoAction,
  startLoading,
  failureGetData,
  finishLoading,
} from '../../config/store/main';

function useEditTodo(id: string) {
  const dispatch = useDispatch();
  const { softenForm } = useInput();
  const [editTodoMutation] = useMutation(EDIT_TODO);
  const {
    startDate,
    title,
    amount,
    unit,
    startTime,
    endTime,
  } = softenForm.todo;

  const data = {
    id,
    title,
    dateString: startDate,
    amount,
    unit,
    startTime,
    endTime,
  };

  const editTodo = () => {
    dispatch(startLoading('editTodo'));
    return editTodoMutation({
      variables: data,
    })
      .then(() => {
        dispatch(editTodoAction(data));
      })
      .catch(error => dispatch(failureGetData({ type: 'editTodo', error })))
      .finally(() => dispatch(finishLoading('editTodo')));
  };
  return editTodo;
}

export default useEditTodo;
