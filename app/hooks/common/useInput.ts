import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import useReduxState from './useReduxState';
import {
  onChangeText as onChangeTextAction,
  InputState,
  SoftenInputState,
} from '../../config/store/input';
import useSelectWeekdays from './useSelectWeekdays';

/**
 * Hook that manage value of input component for using at react
 */
function useInput() {
  const dispatch = useDispatch();
  const { dayNameToRepeat } = useSelectWeekdays();
  const { form: hardenForm } = useReduxState();
  const checkIsNumber = useCallback(
    (text: string) => parseInt(text, 10) || 0,
    [],
  );
  const {
    startDate,
    endDate,
    startTime,
    endTime,
    title,
    unit,
    isRepeat,
    method,
    amount,
    weekDifference,
    dateDifference,
    amountDifference,
    amountChangeInterval,
  } = hardenForm.todo;
  const softenForm: SoftenInputState = {
    auth: hardenForm.auth,
    todo: {
      startDate,
      endDate: endDate || startDate,
      startTime: startTime || '99:99',
      endTime: endTime || '99:99',
      title,
      isRepeat: isRepeat === 'yes',
      method,
      unit: unit || '개',
      dayNameToRepeat,
      amount: checkIsNumber(amount),
      weekDifference: checkIsNumber(weekDifference),
      dateDifference: checkIsNumber(dateDifference),
      amountChangeInterval: checkIsNumber(amountChangeInterval),
      amountDifference: checkIsNumber(amountDifference),
    },
  };
  const onChangeText = useCallback(
    <T extends keyof InputState, K extends keyof InputState[T]>(
      field: T,
      key: K,
    ) => (value: string) => dispatch(onChangeTextAction({ field, key, value })),
    [],
  );
  return { hardenForm, softenForm, onChangeText };
}

export default useInput;
