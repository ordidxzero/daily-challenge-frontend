import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator headerMode="none" screenOptions={{ gestureEnabled: true }}>
      <Stack.Screen name="Test" component={() => <Text>123</Text>} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
