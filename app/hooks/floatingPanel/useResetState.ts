import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { resetState } from '../../config/store/week';

function useResetState() {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(resetState()), [dispatch]);
}

export default useResetState;
