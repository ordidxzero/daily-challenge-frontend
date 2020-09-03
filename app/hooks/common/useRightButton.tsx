import React from 'react';
import { Button } from 'react-native-paper';
import useTogglePanel from '../floatingPanel/useTogglePanel';
function useRightButton(type: 'todo' | 'mold', navigation: any) {
  const { setIsPanelActive } = useTogglePanel();
  const openPanel = () => setIsPanelActive(true);
  const onPress =
    type === 'todo'
      ? openPanel
      : () => navigation.navigate('TodoForm', { type: 'edit' });
  const headerRight = () => (
    <Button onPress={onPress} labelStyle={{ fontSize: 16 }}>
      수정
    </Button>
  );
  return headerRight;
}

export default useRightButton;
