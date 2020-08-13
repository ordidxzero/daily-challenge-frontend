import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { selectWeekday } from '../../config/store/addTodo';
import useReduxState from './useReduxState';

function useSelectWeekdays() {
  const dispatch = useDispatch();
  const {
    addTodo: { selectedWeekdays },
  } = useReduxState();
  const setSelectedWeekdays = useCallback(
    (day: string | number[]) => dispatch(selectWeekday(day)),
    [dispatch],
  );
  const dayNameToRepeat = selectedWeekdays
    .map(({ selected }, index) => selected && index)
    .filter(item => typeof item !== 'boolean') as number[];
  return { selectedWeekdays, setSelectedWeekdays, dayNameToRepeat };
}

export default useSelectWeekdays;
