import React, { useCallback } from 'react';
import { View } from 'react-native';
import TodoManager from '../TodoManager';
import {
  BottomTabBar,
  BottomTabBarProps,
  BottomTabBarOptions,
} from '@react-navigation/bottom-tabs';
import useTogglePanel from '../../../hooks/swipeablePanel/useTogglePanel';
import useCreateTodoMold from '../../../hooks/swipeablePanel/useCreateTodoMold';

function CustomBottomTabBar(props: BottomTabBarProps<BottomTabBarOptions>) {
  const { setIsPanelActive, isPanelActive } = useTogglePanel();
  const createTodoMold = useCreateTodoMold();
  const openPanel = useCallback(() => setIsPanelActive(true), []);
  const closePanel = useCallback(() => {
    createTodoMold()
      .then(() => setIsPanelActive(false))
      .catch(error => console.log(error));
  }, [createTodoMold]);
  return (
    <View>
      <TodoManager onPress={isPanelActive ? closePanel : openPanel} />
      <BottomTabBar {...props} />
    </View>
  );
}

export default React.memo(CustomBottomTabBar);
