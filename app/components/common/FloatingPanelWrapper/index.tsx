import React, { useState } from 'react';
import { isIphoneX } from 'react-native-iphone-x-helper';
import FloatingPanel, { PanelProps } from '../FloatingPanel';
import useTogglePanel from '../../../hooks/floatingPanel/useTogglePanel';
import { FloatingPanelWrapperProps } from './types';
import useEditTodo from '../../../hooks/apollo/useEditTodo';
import TodoPanelContent from './TodoPanelContent';

function FloatingPanelWrapper({
  containerStyle = {},
  detail,
  children,
}: FloatingPanelWrapperProps) {
  const { editTodo } = useEditTodo(detail);
  const { setIsPanelActive, isPanelActive } = useTogglePanel();
  const onClose = () => setIsPanelActive(false);
  const onRightPress = async () => editTodo().then(onClose);
  const [panelProps] = useState<PanelProps>({
    fullWidth: true,
    openLarge: true,
    onlyLarge: true,
    noBackgroundOpacity: true,
    showRightButton: true,
    showLeftButton: true,
    closeOnTouchOutside: true,
    onClose,
  });
  return (
    <FloatingPanel
      {...panelProps}
      onRightPress={onRightPress}
      panelOutsideHeight={isIphoneX() ? 55 : 40}
      containerStyle={containerStyle}
      isActive={isPanelActive}
      panelContent={<TodoPanelContent detail={detail} />}>
      {children}
    </FloatingPanel>
  );
}

export default React.memo(FloatingPanelWrapper);
