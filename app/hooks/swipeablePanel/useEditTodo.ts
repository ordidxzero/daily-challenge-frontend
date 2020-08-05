import { useDispatch } from 'react-redux';
import { editTodo as editTodoAction } from '../../config/store/main';
import useInput from '../common/useInput';

function useEditTodo() {
  const dispatch = useDispatch();
  const { softenForm } = useInput();
  const {
    todo: { startDate, title, amount, unit, startTime, endTime },
  } = softenForm;
  const editTodo = (id: string, done: boolean) =>
    dispatch(
      editTodoAction({
        id,
        dateString: startDate,
        title,
        amount,
        unit,
        startTime,
        endTime,
        done,
      }),
    );
  return editTodo;
}

export default useEditTodo;
