import { useMutation } from '@apollo/client';
import { CREATE_TODO_MOLD } from './utils/graphql';
import useInput from '../common/useInput';

function useCreateTodoMold() {
  const { softenForm } = useInput();
  const [createTodoMoldMutation] = useMutation(CREATE_TODO_MOLD);
  const {
    startDate,
    endDate,
    startTime,
    endTime,
    title,
    unit,
    amount,
    weekDifference,
    dateDifference,
    amountDifference,
    amountChangeInterval,
    dayNameToRepeat,
  } = softenForm.todo;
  const createTodoMold = () =>
    createTodoMoldMutation({
      variables: {
        startDate,
        endDate,
        startTime,
        endTime,
        title,
        unit,
        dayNameToRepeat,
        currentAmount: amount,
        weekDifference,
        dateDifference,
        amountDifference,
        amountChangeInterval,
      },
    });
  return createTodoMold;
}

export default useCreateTodoMold;
