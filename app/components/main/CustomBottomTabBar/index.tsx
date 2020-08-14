import React, { useCallback } from 'react';
import { View } from 'react-native';
import TodoManager from '../TodoManager';
import {
  BottomTabBar,
  BottomTabBarProps,
  BottomTabBarOptions,
} from '@react-navigation/bottom-tabs';
import useTogglePanel from '../../../hooks/floatingPanel/useTogglePanel';
import useTodoMoldAdder from '../../../hooks/apollo/useTodoMoldAdder';

function CustomBottomTabBar(props: BottomTabBarProps<BottomTabBarOptions>) {
  const { setIsPanelActive, isCreatePanelActive } = useTogglePanel('create');
  const createTodoMold = useTodoMoldAdder();
  const openPanel = useCallback(() => setIsPanelActive(true), []);
  const closePanel = useCallback(() => {
    createTodoMold()
      .then(() => setIsPanelActive(false))
      .catch(error => console.log(error));
  }, [createTodoMold]);
  return (
    <View>
      <TodoManager
        screenIndex={props.state.index}
        onPress={isCreatePanelActive ? closePanel : openPanel}
      />
      <BottomTabBar {...props} />
    </View>
  );
}

export default React.memo(CustomBottomTabBar);
