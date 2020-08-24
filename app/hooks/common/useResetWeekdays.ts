import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { resetSelectedWeekdays } from '../../config/store/week';

function useResetWeekdays() {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(resetSelectedWeekdays()), [dispatch]);
}

export default useResetWeekdays;
