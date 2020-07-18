import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

function BottomTabsNavigation() {
  return (
    <Tab.Navigator initialRouteName="Calendar">
      <Tab.Screen name="Calendar" component={() => <Text>123</Text>} />
    </Tab.Navigator>
  );
}

export default BottomTabsNavigation;
