import React, { useState } from 'react';
import FloatingPanel, { PanelProps } from '../FloatingPanel';
import useTogglePanel from '../../../hooks/swipeablePanel/useTogglePanel';
import CreatePanelContent from './CreatePanelContent';
import TodoPanelContent from './TodoPanelContent';
import { SwipeablePanelProps } from './types';

function SwipeablePanel({
  containerStyle = {},
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
  const onClose = () => {
    setStatusBarStyle('dark-content');
    setIsPanelActive(type, false);
  };
  const [panelProps] = useState<PanelProps>({
    fullWidth: true,
    openLarge: true,
    onlyLarge: true,
    noBackgroundOpacity: true,
    showCloseButton: true,
    closeOnTouchOutside: true,
    onClose,
  });
  return (
    <FloatingPanel
      {...panelProps}
      panelBackgroundHeight={type === 'todo' ? 80 : 140}
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
