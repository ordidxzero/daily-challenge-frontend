/* eslint-disable react/display-name */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import useReduxState from '../hooks/common/useReduxState';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import TodoScreen from '../screens/TodoScreen';
import MoldScreen from '../screens/MoldScreen';
import MainScreen from '../screens/MainScreen';
import GridScreen from '../screens/GridScreen';
import CreateScreen from '../screens/CreateScreen';

const Stack = createStackNavigator();

function StackNavigation() {
  const { login: token } = useReduxState();
  return (
    <Stack.Navigator headerMode="none" screenOptions={{ gestureEnabled: true }}>
      {!token && (
        <>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      )}
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen name="Todo" component={TodoScreen} />
      <Stack.Screen name="Mold" component={MoldScreen} />
      <Stack.Screen name="Grid" component={GridScreen} />
      <Stack.Screen name="Create" component={CreateScreen} />
    </Stack.Navigator>
  );
}

export default React.memo(StackNavigation);
