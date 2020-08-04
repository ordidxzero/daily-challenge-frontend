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
import useTodoAdder from '../../../hooks/swipeablePanel/useTodoAdder';

function CustomBottomTabBar(props: BottomTabBarProps<BottomTabBarOptions>) {
  const { setIsPanelActive, isCreatePanelActive } = useTogglePanel();
  const addFakeTodos = useTodoAdder();
  const createTodoMold = useCreateTodoMold();
  const openPanel = useCallback(() => setIsPanelActive('create', true), []);
  const closePanel = useCallback(() => {
    createTodoMold()
      .then(() => {
        addFakeTodos();
        setIsPanelActive('create', false);
      })
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
