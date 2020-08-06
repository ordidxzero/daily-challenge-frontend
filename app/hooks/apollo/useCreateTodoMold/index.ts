import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { CREATE_TODO_MOLD } from '../utils/graphql';
import useInput from '../../common/useInput';
import { addTodos } from '../../../config/store/main';
import { generateID } from './utils';
import {
  checkOverRange,
  getDateStringArray,
  filterByDateDifference,
  filterByDayName,
} from './dayjsUtils';
import { useMemo } from 'react';

function useCreateTodoMold() {
  const dispatch = useDispatch();
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

  let amountAccumulator = amount;

  const dateStringArray = useMemo(
    () =>
      checkOverRange({
        end: endDate,
        target: getDateStringArray({ start: startDate }),
      }),
    [endDate, startDate],
  );

  const validDates = useMemo(
    () =>
      dateDifference
        ? filterByDateDifference(dateDifference, dateStringArray)
        : filterByDayName(dayNameToRepeat, weekDifference, dateStringArray),
    [dateDifference, dateStringArray, dayNameToRepeat, weekDifference],
  );

  const data = validDates.map((dateString, index) => {
    const hasChanged = index % amountChangeInterval === 0;
    amountAccumulator = hasChanged
      ? amount + (index / amountChangeInterval) * amountDifference
      : amountAccumulator;
    return {
      dateString,
      todo: {
        id: generateID(),
        dateString,
        title,
        amount: amountAccumulator,
        unit,
        startTime,
        endTime,
        done: false,
      },
    };
  });

  const addFakeTodoFront = () => dispatch(addTodos(data));

  const createTodoMoldBack = () =>
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

  return { createTodoMoldBack, addFakeTodoFront };
}

export default useCreateTodoMold;
