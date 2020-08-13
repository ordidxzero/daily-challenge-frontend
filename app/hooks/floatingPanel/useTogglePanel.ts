import { useDispatch } from 'react-redux';
import { toggleSwipeablePanel } from '../../config/store/main';
import { useCallback } from 'react';
import useReduxState from '../common/useReduxState';

function useTogglePanel(key?: 'create' | 'todo' | 'mold') {
  const dispatch = useDispatch();
  const {
    main: {
      panel: { create, todo, mold },
    },
  } = useReduxState();
  const setIsPanelActive = useCallback(
    (isActive: boolean) =>
      key && dispatch(toggleSwipeablePanel({ key, isActive })),
    [dispatch],
  );
  const isPanelActive = create || todo || mold;
  return {
    isCreatePanelActive: create,
    isTodoPanelActive: todo,
    isMoldPanelActive: mold,
    isPanelActive,
    setIsPanelActive,
  };
}

export default useTogglePanel;
