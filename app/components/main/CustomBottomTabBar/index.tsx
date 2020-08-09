import React, { useCallback } from 'react';
import { View } from 'react-native';
import TodoManager from '../TodoManager';
import {
  BottomTabBar,
  BottomTabBarProps,
  BottomTabBarOptions,
} from '@react-navigation/bottom-tabs';
import useTogglePanel from '../../../hooks/swipeablePanel/useTogglePanel';
import useCreateTodoMold from '../../../hooks/apollo/useCreateTodoMold';

function CustomBottomTabBar(props: BottomTabBarProps<BottomTabBarOptions>) {
  const {
    setIsPanelActive,
    isCreatePanelActive,
    setStatusBarStyle,
  } = useTogglePanel();
  const { createTodoMoldBack, addFakeTodoFront } = useCreateTodoMold();
  const openPanel = useCallback(() => {
    setStatusBarStyle('light-content');
    setIsPanelActive('create', true);
  }, []);
  const closePanel = useCallback(() => {
    createTodoMoldBack()
      .then(() => {
        addFakeTodoFront();
        setStatusBarStyle('dark-content');
        setIsPanelActive('create', false);
      })
      .catch(error => console.log(error));
  }, [createTodoMoldBack]);
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
