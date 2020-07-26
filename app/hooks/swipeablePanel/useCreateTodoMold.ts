import { useCallback } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_TODO_MOLD } from './graphql';
import useInput from '../common/useInput';
import useSelectWeekdays from './useSelectWeekdays';

function useCreateTodoMold() {
  const { dayNameToRepeat } = useSelectWeekdays();
  const { form } = useInput();
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
  } = form.todo;
  const checkIsNumber = useCallback((text: string) => parseInt(text) || 0, []);
  const createTodoMold = () =>
    createTodoMoldMutation({
      variables: {
        startDate,
        endDate: endDate || startDate,
        startTime: startTime || '99:99',
        endTime: endTime || '99:99',
        title,
        unit: unit || '개',
        dayNameToRepeat,
        currentAmount: checkIsNumber(amount),
        weekDifference: checkIsNumber(weekDifference),
        dateDifference: checkIsNumber(dateDifference),
        amountDifference: checkIsNumber(amountDifference),
        amountChangeInterval: checkIsNumber(amountChangeInterval),
      },
    });
  return createTodoMold;
}

export default useCreateTodoMold;
