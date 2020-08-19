import { useState } from 'react';
import { RadioState } from '../../@types';

function useRadioState({
  current,
  data,
}: RadioState): [RadioState, (label: string) => () => void] {
  const [radioState, setRadioState] = useState<RadioState>({
    current,
    data,
  });
  const setter = (label: string) => () =>
    setRadioState({ ...radioState, current: label });
  return [radioState, setter];
}

export default useRadioState;
