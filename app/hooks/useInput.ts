import { useState, useCallback } from 'react';
import { useInputState } from './types';

/**
 * Hook that manage value of input component for using at react
 */
function useInput() {
  const [form, setForm] = useState<useInputState>({
    auth: {
      username: '',
      password: '',
    },
    todo: {
      title: '',
      amount: '',
      weekDifference: '',
      dateDifference: '',
      amountDifference: '',
      amountChangeInterval: '',
    },
  });
  const onChangeText = useCallback(
    <T extends keyof useInputState, K extends keyof useInputState[T]>(
      field: T,
      key: K,
    ) => (value: string) =>
      setForm(prev => ({
        ...prev,
        [field]: { ...prev[field], [key]: value },
      })),
    [],
  );
  return { form, onChangeText };
}

export default useInput;
