import React, { useState } from 'react';
import FloatingPanel, { PanelProps } from '../FloatingPanel';
import useTogglePanel from '../../../hooks/floatingPanel/useTogglePanel';
import { FloatingPanelWrapperProps } from './types';
import { View, Text } from 'react-native';
import useEditTodo from '../../../hooks/apollo/useEditTodo';
import TodoPanelContent from './TodoPanelContent';

function FloatingPanelWrapper({
  containerStyle = {},
  detail,
  children,
}: FloatingPanelWrapperProps) {
  const editTodo = useEditTodo(detail);
  const { setIsPanelActive, isPanelActive } = useTogglePanel();
  const onClose = () => setIsPanelActive(false);
  const onRightPress = async () => editTodo().then(onClose);
  const renderRightButton = () => (
    <View
      style={{
        height: 30,
        justifyContent: 'center',
      }}>
      <Text style={{ fontSize: 17 }}>수정</Text>
    </View>
  );
  const [panelProps] = useState<PanelProps>({
    fullWidth: true,
    openLarge: true,
    onlyLarge: true,
    noBackgroundOpacity: true,
    showRightButton: true,
    showLeftButton: true,
    renderRightButton,
    closeOnTouchOutside: true,
    onClose,
  });
  return (
    <FloatingPanel
      {...panelProps}
      onRightPress={onRightPress}
      panelOutsideHeight={55}
      containerStyle={containerStyle}
      isActive={isPanelActive}
      panelContent={<TodoPanelContent />}>
      {children}
    </FloatingPanel>
  );
}

export default React.memo(FloatingPanelWrapper);
