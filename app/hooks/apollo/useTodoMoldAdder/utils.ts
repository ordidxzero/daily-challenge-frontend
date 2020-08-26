import { SoftenTodoInputState } from '../../../config/store/input';
import {
  checkOverRange,
  getDateStringArray,
  filterByDateDifference,
  filterByDayName,
} from './dayjsUtils';
import { MoldDataType } from '../../../@types';

export const generateID = () => {
  const specials = '!$%^&*()_+|~-=`{}[]:;<>?,./';
  const randomString = () => Math.random().toString(36).slice(2);
  const randomSpecial =
    specials[Math.floor(Math.random() * (specials.length - 1))];
  return `${randomString()}${randomSpecial}${randomString()}`;
};

export const generateTodoData = (
  data: SoftenTodoInputState,
  todoMoldId: string,
) => {
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
        todoMoldId,
      },
    };
  });

  return result;
};

export const generateMoldData = (
  data: SoftenTodoInputState,
  id: string,
): MoldDataType => ({
  id,
  ...data,
  initialAmount: data.amount,
  priority: 1,
  completionRate: 0,
  progressRate: 0,
  currentContinuousAchievement: 0,
  maxContinuousAchievement: 0,
  isValid: true,
});

export const generateData = (data: SoftenTodoInputState, id: string) => {
  return {
    moldData: generateMoldData(data, id),
    todoData: generateTodoData(data, id),
  };
};
