import { useDispatch } from 'react-redux';
import useInput from '../../common/useInput';
import {
  checkOverRange,
  getDateStringArray,
  filterByDateDifference,
  filterByDayName,
} from './dayjsUtils';
import { addTodos } from '../../../config/store/main';

function useTodoAdder() {
  const dispatch = useDispatch();
  const { softenForm } = useInput();
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

  let amountAccumulator = amount;

  const dateStringArray = checkOverRange({
    end: endDate,
    target: getDateStringArray({ start: startDate }),
  });

  const validDates = dateDifference
    ? filterByDateDifference(dateDifference, dateStringArray)
    : filterByDayName(dayNameToRepeat, weekDifference, dateStringArray);

  const data = validDates.map((dateString, index) => {
    const hasChanged = index % amountChangeInterval === 0;
    amountAccumulator = hasChanged
      ? amount + (index / amountChangeInterval) * amountDifference
      : amountAccumulator;
    return {
      dateString,
      todo: {
        title,
        amount: amountAccumulator,
        unit,
        startTime,
        endTime,
        done: false,
      },
    };
  });

  const addFakeTodo = () => dispatch(addTodos(data));

  return addFakeTodo;
}

export default useTodoAdder;
