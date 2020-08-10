import React, { useState } from 'react';
import FloatingPanel, { PanelProps } from '../FloatingPanel';
import useTogglePanel from '../../../hooks/floatingPanel/useTogglePanel';
import PanelContent from './PanelContent';
import { FloatingPanelWrapper } from './types';

function FloatingPanelWrapper({
  containerStyle = {},
  type = 'create',
  data,
  children,
}: FloatingPanelWrapper) {
  const {
    isCreatePanelActive,
    setIsPanelActive,
    isTodoPanelActive,
    setStatusBarStyle,
  } = useTogglePanel(type);
  const onClose = () => {
    setStatusBarStyle('dark-content');
    setIsPanelActive(false);
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
      panelOutsideHeight={type === 'todo' ? 55 : 130}
      containerStyle={containerStyle}
      isActive={type === 'todo' ? isTodoPanelActive : isCreatePanelActive}
      panelContent={<PanelContent type={type} data={data} />}>
      {children}
    </FloatingPanel>
  );
}

export default React.memo(FloatingPanelWrapper);
