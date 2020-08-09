import React, { useState } from 'react';
import FloatingPanel from '../FloatingPanel';
import useTogglePanel from '../../../hooks/swipeablePanel/useTogglePanel';
import CreatePanelContent from './CreatePanelContent';
import TodoPanelContent from './TodoPanelContent';
import { SwipeablePanelProps } from './types';

function SwipeablePanel({
  containerStyle = {},
  panelHeight,
  type = 'create',
  data,
  children,
}: SwipeablePanelProps) {
  const {
    isCreatePanelActive,
    setIsPanelActive,
    isTodoPanelActive,
    setStatusBarStyle,
  } = useTogglePanel();
  const [panelProps] = useState({
    fullWidth: true,
    openLarge: true,
    onlyLarge: true,
    noBackgroundOpacity: true,
    showCloseButton: true,
    closeOnTouchOutside: true,
    onClose: () => {
      setStatusBarStyle('dark-content');
      setIsPanelActive(type, false);
    },
    onPressCloseButton: () => {
      setStatusBarStyle('dark-content');
      setIsPanelActive(type, false);
    },
    // ...or any prop you want
  });
  return (
    <FloatingPanel
      {...panelProps}
      panelHeight={panelHeight}
      containerStyle={containerStyle}
      isActive={type === 'todo' ? isTodoPanelActive : isCreatePanelActive}
      panelContent={
        type === 'create' ? (
          <CreatePanelContent />
        ) : (
          type === 'todo' && data && <TodoPanelContent data={data} />
        )
      }>
      {children}
    </FloatingPanel>
  );
}

export default React.memo(SwipeablePanel);
