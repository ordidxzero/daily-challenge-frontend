import { useEffect } from 'react';
import useResetWeekdays from './useResetWeekdays';
import useInput from './useInput';

function useUnmountReset() {
  const resetSelectedWeekdays = useResetWeekdays();
  const { resetInput } = useInput();
  useEffect(() => {
    return () => {
      resetSelectedWeekdays();
      resetInput();
    };
  }, []);
}

export default useUnmountReset;
