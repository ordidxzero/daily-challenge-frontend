import dayjs from 'dayjs';
import week from 'dayjs/plugin/weekOfYear';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { CheckOverRangeParams, GetDateStringArrayParams } from '../types';

dayjs.extend(week);
dayjs.extend(isSameOrBefore);

export const checkOverRange = ({ end, target }: CheckOverRangeParams) =>
  target.filter(dateString => dayjs(dateString).isSameOrBefore(end));

export const filterByDateDifference = (
  dateDifference: number,
  target: string[],
) => target.filter((_, index) => index % dateDifference === 0);

export const filterByDayName = (
  dayNameToRepeat: number[],
  weekDifference: number,
  target: string[],
) => {
  const stepOne = target.filter(dateString =>
    dayNameToRepeat.includes(dayjs(dateString).day()),
  );
  if (weekDifference) {
    const standardWeek = dayjs(target[0]).week();
    const stepTwo = stepOne.filter(dateString => {
      const weekNumber = dayjs(dateString).week();
      return Number.isInteger((weekNumber - standardWeek) / weekDifference);
    });
    return stepTwo;
  }
  return stepOne;
};

export const getLastDayFromStandard = (standard: string): string => {
  const isPassTwoWeek =
    dayjs(standard).week() - dayjs(standard).startOf('month').week() > 1;

  return isPassTwoWeek
    ? dayjs(standard).add(1, 'month').endOf('month').format('YYYY-MM-DD')
    : dayjs(standard).endOf('month').format('YYYY-MM-DD');
};

export const getDateStringArray = ({
  start,
  endDay,
  arr = [],
}: GetDateStringArrayParams): string[] => {
  if (!endDay) {
    const lastDay = getLastDayFromStandard(start);
    return getDateStringArray({
      start,
      endDay: lastDay,
      arr: arr.concat(start),
    });
  }
  const next = dayjs(start).add(1, 'day').format('YYYY-MM-DD');
  if (dayjs(next).isAfter(endDay)) return arr;
  return getDateStringArray({ start: next, endDay, arr: arr.concat(next) });
};
