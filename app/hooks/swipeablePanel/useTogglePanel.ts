import { useDispatch } from 'react-redux';
import { toggleSwipeablePanel } from '../../config/store/main';
import { useCallback } from 'react';
import useReduxState from '../common/useReduxState';

function useTogglePanel() {
  const dispatch = useDispatch();
  const {
    main: {
      panel: { create, todo, mold },
    },
  } = useReduxState();
  const setIsPanelActive = useCallback(
    (key: 'create' | 'todo' | 'mold', isActive: boolean) =>
      dispatch(toggleSwipeablePanel({ key, isActive })),
    [dispatch],
  );
  return {
    isCreatePanelActive: create,
    isTodoPanelActive: todo,
    isMoldPanelActive: mold,
    setIsPanelActive,
  };
}

export default useTogglePanel;
