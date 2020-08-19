import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import useReduxState from './useReduxState';
import {
  onChangeText as onChangeTextAction,
  resetInput as resetInputAction,
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
    startTime,
    endTime,
    amount,
    unit,
    weekDifference,
    dateDifference,
    amountDifference,
    amountChangeInterval,
    ...rest
  } = hardenForm.todo;
  const softenForm: SoftenInputState = {
    auth: hardenForm.auth,
    todo: {
      startTime: startTime || '99:99',
      endTime: endTime || '99:99',
      unit: unit || '개',
      dayNameToRepeat,
      ...rest,
      amount: checkIsNumber(amount),
      weekDifference: checkIsNumber(weekDifference),
      dateDifference: checkIsNumber(dateDifference),
      amountChangeInterval: checkIsNumber(amountChangeInterval),
      amountDifference: checkIsNumber(amountDifference),
    },
  };

  const resetInput = useCallback(() => dispatch(resetInputAction()), [
    dispatch,
  ]);

  const onChangeText = useCallback(
    <T extends keyof InputState, K extends keyof InputState[T]>(
      field: T,
      key: K,
    ) => (value: string | number | boolean) =>
      dispatch(onChangeTextAction({ field, key, value })),
    [dispatch],
  );

  return {
    hardenForm,
    softenForm,
    onChangeText,
    resetInput,
  };
}

export default useInput;
