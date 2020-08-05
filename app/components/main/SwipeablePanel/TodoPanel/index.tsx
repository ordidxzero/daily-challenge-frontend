import React, { useState } from 'react';
import SwipeablePanelComponent from 'rn-swipeable-panel';
import useTogglePanel from '../../../../hooks/swipeablePanel/useTogglePanel';
import PanelContent from './PanelContent';
import { TodoType } from '../../../../@types';

function TodoPanel({ data }: { data: TodoType }) {
  const { isTodoPanelActive, setIsPanelActive } = useTogglePanel();
  const [panelProps] = useState({
    fullWidth: true,
    openLarge: true,
    onlyLarge: true,
    showCloseButton: true,
    closeOnTouchOutside: true,
    onClose: () => setIsPanelActive('todo', false),
    onPressCloseButton: () => setIsPanelActive('todo', false),
    // ...or any prop you want
  });
  return (
    <SwipeablePanelComponent {...panelProps} isActive={isTodoPanelActive}>
      <PanelContent data={data} />
    </SwipeablePanelComponent>
  );
}

export default React.memo(TodoPanel);
