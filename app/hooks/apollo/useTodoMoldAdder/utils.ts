import {
  checkOverRange,
  getDateStringArray,
  filterByDateDifference,
  filterByDayName,
} from './dayjsUtils';
import { MoldDataType } from '../../../@types';
import { GenerateDataParams, GenerateMoldDataParams } from './types';

export const generateID = () => {
  const specials = '!$%^&*()_+|~-=`{}[]:;<>?,./';
  const randomString = () => Math.random().toString(36).slice(2);
  const randomSpecial =
    specials[Math.floor(Math.random() * (specials.length - 1))];
  return `${randomString()}${randomSpecial}${randomString()}`;
};

export const generateTodoData = ({
  data,
  todoMoldId,
  todoIds,
}: GenerateDataParams) => {
  const {
    startDate,
    endDate,
    startTime,
    endTime,
    title,
    isRepeat,
    method,
    unit,
    amount,
    weekDifference,
    dateDifference,
    amountDifference,
    amountChangeInterval,
    dayNameToRepeat,
  } = data;

  if (isRepeat) {
    let amountAccumulator = amount;

    const dateStringArray = checkOverRange({
      end: endDate,
      target: getDateStringArray({ start: startDate }),
    });

    const validDates =
      method === 'dateDifference'
        ? filterByDateDifference(dateDifference, dateStringArray)
        : filterByDayName(dayNameToRepeat, weekDifference, dateStringArray);

    const result = validDates.map((dateString, index) => {
      const id = todoIds.find(todoId => todoId.dateString === dateString)?.id;
      const hasChanged = index % amountChangeInterval === 0;
      amountAccumulator = hasChanged
        ? amount + (index / amountChangeInterval) * amountDifference
        : amountAccumulator;
      return {
        dateString,
        todo: {
          id: id ? id : generateID(),
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
  }
  return [
    {
      dateString: startDate,
      todo: {
        id: todoIds[0].id,
        dateString: startDate,
        title,
        amount,
        unit,
        startTime,
        endTime,
        done: false,
        todoMoldId,
      },
    },
  ];
};

export const generateMoldData = ({
  data,
  todoMoldId,
}: GenerateMoldDataParams): MoldDataType => ({
  id: todoMoldId,
  ...data,
  initialAmount: data.amount,
  priority: 1,
  completionRate: 0,
  progressRate: 0,
  currentContinuousAchievement: 0,
  maxContinuousAchievement: 0,
  isValid: true,
});

export const generateData = (params: GenerateDataParams) => {
  const { data, todoMoldId } = params;
  const result = todoMoldId
    ? {
        moldData: generateMoldData({ data, todoMoldId }),
        todoData: generateTodoData(params),
      }
    : {
        todoData: generateTodoData(params),
      };
  return result;
};
