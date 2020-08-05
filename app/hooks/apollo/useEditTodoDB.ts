import { useMutation } from '@apollo/client';
import { EDIT_TODO } from './utils/graphql';
import useInput from '../common/useInput';

function useEditTodoDB() {
  const [editTodoMutation] = useMutation(EDIT_TODO);
  const { softenForm } = useInput();
  const {
    todo: { startDate, title, amount, unit, startTime, endTime },
  } = softenForm;
  const editTodo = (id: string) =>
    editTodoMutation({
      variables: {
        id,
        title,
        dateString: startDate,
        amount,
        unit,
        startTime,
        endTime,
      },
    });
  return editTodo;
}

export default useEditTodoDB;
