import { useDispatch } from 'react-redux';
import { toggleSwipeablePanel } from '../../config/store/main';
import { useCallback } from 'react';
import useReduxState from '../common/useReduxState';

function useTogglePanel() {
  const dispatch = useDispatch();
  const {
    main: { isPanelActive },
  } = useReduxState();
  const setIsPanelActive = useCallback(
    (isPanelActive: boolean) => dispatch(toggleSwipeablePanel(isPanelActive)),
    [dispatch],
  );
  return {
    isPanelActive,
    setIsPanelActive,
  };
}

export default useTogglePanel;
