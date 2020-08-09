import { useDispatch } from 'react-redux';
import {
  toggleSwipeablePanel,
  setStatusBarStyle as setStatusBarStyleAction,
} from '../../config/store/main';
import { useCallback } from 'react';
import useReduxState from '../common/useReduxState';

function useTogglePanel() {
  const dispatch = useDispatch();
  const {
    main: {
      panel: { create, todo, mold },
      statusBarStyle,
    },
  } = useReduxState();
  const setStatusBarStyle = useCallback(
    (style: 'dark-content' | 'light-content') =>
      dispatch(setStatusBarStyleAction(style)),
    [dispatch],
  );
  const setIsPanelActive = useCallback(
    (key: 'create' | 'todo' | 'mold', isActive: boolean) =>
      dispatch(toggleSwipeablePanel({ key, isActive })),
    [dispatch],
  );
  return {
    isCreatePanelActive: create,
    isTodoPanelActive: todo,
    isMoldPanelActive: mold,
    statusBarStyle,
    setIsPanelActive,
    setStatusBarStyle,
  };
}

export default useTogglePanel;
