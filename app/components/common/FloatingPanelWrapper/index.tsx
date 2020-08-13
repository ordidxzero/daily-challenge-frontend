import React, { useState } from 'react';
import FloatingPanel, { PanelProps } from '../FloatingPanel';
import useTogglePanel from '../../../hooks/floatingPanel/useTogglePanel';
import PanelContent from './PanelContent';
import { FloatingPanelWrapperProps } from './types';

function FloatingPanelWrapper({
  containerStyle = {},
  type = 'create',
  data,
  children,
}: FloatingPanelWrapperProps) {
  const {
    isCreatePanelActive,
    setIsPanelActive,
    isTodoPanelActive,
  } = useTogglePanel(type);
  const onClose = () => setIsPanelActive(false);
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
      panelOutsideHeight={type === 'create' ? 130 : 55}
      containerStyle={containerStyle}
      isActive={type === 'todo' ? isTodoPanelActive : isCreatePanelActive}
      panelContent={<PanelContent type={type} data={data} />}>
      {children}
    </FloatingPanel>
  );
}

export default React.memo(FloatingPanelWrapper);
