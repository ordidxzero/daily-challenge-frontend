import { useState } from 'react';
import { RadioState } from './types';

function useRadioState({ current, data }: RadioState) {
  const [radioState, setRadioState] = useState<RadioState>({
    current,
    data,
  });
  const setter = (label: string) => () =>
    setRadioState({ ...radioState, current: label });
  return { radioState, setter };
}

export default useRadioState;
