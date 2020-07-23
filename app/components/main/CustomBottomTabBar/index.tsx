import React from 'react';
import { View } from 'react-native';
import TodoManager from '../TodoManager';
import {
  BottomTabBar,
  BottomTabBarProps,
  BottomTabBarOptions,
} from '@react-navigation/bottom-tabs';
import useTogglePanel from '../../../hooks/swipeablePanel/useTogglePanel';

function CustomBottomTabBar(props: BottomTabBarProps<BottomTabBarOptions>) {
  const { setIsPanelActive, isPanelActive } = useTogglePanel();
  const logging = (message: string) => () => {
    setIsPanelActive(!isPanelActive);
    console.log(message);
  };
  return (
    <View>
      <TodoManager
        onPress={isPanelActive ? logging('Close Panel') : logging('Open Panel')}
        type="create"
      />
      <BottomTabBar {...props} />
    </View>
  );
}

export default React.memo(CustomBottomTabBar);
