import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import useReduxState from './useReduxState';
import {
  onChangeText as onChangeTextAction,
  InputState,
} from '../../config/store/input';

/**
 * Hook that manage value of input component for using at react
 */
function useInput() {
  const dispatch = useDispatch();
  const { form } = useReduxState();
  const onChangeText = useCallback(
    <T extends keyof InputState, K extends keyof InputState[T]>(
      field: T,
      key: K,
    ) => (value: string) => dispatch(onChangeTextAction({ field, key, value })),
    [],
  );
  return { form, onChangeText };
}

export default useInput;
