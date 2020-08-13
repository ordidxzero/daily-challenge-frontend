import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { selectWeekday } from '../../config/store/week';
import useReduxState from './useReduxState';

function useSelectWeekdays() {
  const dispatch = useDispatch();
  const { week } = useReduxState();
  const setSelectedWeekdays = useCallback(
    (day: string | number[]) => dispatch(selectWeekday(day)),
    [dispatch],
  );
  const dayNameToRepeat = week
    .map(({ selected }, index) => selected && index)
    .filter(item => typeof item !== 'boolean') as number[];
  return { selectedWeekdays: week, setSelectedWeekdays, dayNameToRepeat };
}

export default useSelectWeekdays;
