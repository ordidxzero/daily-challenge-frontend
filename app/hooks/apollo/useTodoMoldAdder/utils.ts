import { SoftenTodoInputState } from '../../../config/store/input';
import {
  checkOverRange,
  getDateStringArray,
  filterByDateDifference,
  filterByDayName,
} from './dayjsUtils';

export const generateID = () => {
  const random_1 = Math.random().toString(36).slice(2);
  const random_2 = Math.random().toString(36).slice(2);
  const specials = '!$%^&*()_+|~-=`{}[]:;<>?,./';
  const random_3 = specials[Math.floor(Math.random() * (specials.length - 1))];
  return `${random_1}${random_3}${random_2}`;
};

export const generateTodoData = (data: SoftenTodoInputState) => {
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
  } = data;

  let amountAccumulator = amount;

  const dateStringArray = checkOverRange({
    end: endDate,
    target: getDateStringArray({ start: startDate }),
  });

  const validDates = dateDifference
    ? filterByDateDifference(dateDifference, dateStringArray)
    : filterByDayName(dayNameToRepeat, weekDifference, dateStringArray);

  const result = validDates.map((dateString, index) => {
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

  return result;
};
