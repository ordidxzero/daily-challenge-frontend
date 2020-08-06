import React, { useState } from 'react';
import SwipeablePanelComponent from 'rn-swipeable-panel';
import useTogglePanel from '../../../hooks/swipeablePanel/useTogglePanel';
import CreatePanelContent from './CreatePanelContent';
import TodoPanelContent from './TodoPanelContent';
import { SwipeablePanelProps } from './types';

function SwipeablePanel({ type = 'create', data }: SwipeablePanelProps) {
  const {
    isCreatePanelActive,
    setIsPanelActive,
    isTodoPanelActive,
  } = useTogglePanel();
  const [panelProps] = useState({
    fullWidth: true,
    openLarge: true,
    onlyLarge: true,
    showCloseButton: true,
    closeOnTouchOutside: true,
    onClose: () => setIsPanelActive(type, false),
    onPressCloseButton: () => setIsPanelActive(type, false),
    // ...or any prop you want
  });
  return (
    <SwipeablePanelComponent
      {...panelProps}
      isActive={type === 'todo' ? isTodoPanelActive : isCreatePanelActive}>
      {type === 'create' && <CreatePanelContent />}
      {type === 'todo' && data && <TodoPanelContent data={data} />}
    </SwipeablePanelComponent>
  );
}

export default React.memo(SwipeablePanel);
