import React from 'react';
import { Button } from 'react-native';
import useTogglePanel from '../floatingPanel/useTogglePanel';
function useRightButton(type: 'todo' | 'mold', navigation: any) {
  const { setIsPanelActive } = useTogglePanel();
  const openPanel = () => setIsPanelActive(true);
  const onPress =
    type === 'todo'
      ? openPanel
      : () => navigation.navigate('TodoForm', { type: 'edit' });
  const headerRight = () => <Button onPress={onPress} title="수정" />;
  return headerRight;
}

export default useRightButton;
