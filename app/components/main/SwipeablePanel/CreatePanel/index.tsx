import React, { useState } from 'react';
import SwipeablePanelComponent from 'rn-swipeable-panel';
import useTogglePanel from '../../../../hooks/swipeablePanel/useTogglePanel';
import PanelContent from './PanelContent';

function CreatePanel() {
  const { isCreatePanelActive, setIsPanelActive } = useTogglePanel();
  const [panelProps] = useState({
    fullWidth: true,
    openLarge: true,
    onlyLarge: true,
    showCloseButton: true,
    closeOnTouchOutside: true,
    onClose: () => setIsPanelActive('create', false),
    onPressCloseButton: () => setIsPanelActive('create', false),
    // ...or any prop you want
  });
  return (
    <SwipeablePanelComponent {...panelProps} isActive={isCreatePanelActive}>
      <PanelContent />
    </SwipeablePanelComponent>
  );
}

export default React.memo(CreatePanel);
