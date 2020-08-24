import { useEffect } from 'react';
import useResetWeekdays from './useResetWeekdays';
import useInput from './useInput';

function useUnmountReset(executable = true) {
  const resetSelectedWeekdays = useResetWeekdays();
  const { resetInput } = useInput();
  useEffect(() => {
    return () => {
      if (executable) {
        resetSelectedWeekdays();
        resetInput();
      }
    };
  }, []);
}

export default useUnmountReset;
