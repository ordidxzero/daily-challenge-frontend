import React, { useState } from 'react';
import SwipeablePanelComponent from 'rn-swipeable-panel';
import useTogglePanel from '../../../hooks/swipeablePanel/useTogglePanel';
import PanelContent from './PanelContent';

function SwipeablePanel() {
  const { isPanelActive, setIsPanelActive } = useTogglePanel();
  const [panelProps] = useState({
    fullWidth: true,
    openLarge: true,
    onlyLarge: true,
    showCloseButton: true,
    closeOnTouchOutside: true,
    onClose: () => setIsPanelActive(false),
    onPressCloseButton: () => setIsPanelActive(false),
    // ...or any prop you want
  });
  return (
    <SwipeablePanelComponent {...panelProps} isActive={isPanelActive}>
      <PanelContent />
    </SwipeablePanelComponent>
  );
}

export default React.memo(SwipeablePanel);
