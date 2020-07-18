import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import useReduxState from '../hooks/useReduxState';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createStackNavigator();

function StackNavigation() {
  const {
    login: { token },
  } = useReduxState();
  return (
    <Stack.Navigator headerMode="none" screenOptions={{ gestureEnabled: true }}>
      {token ? (
        <Stack.Screen
          name="Main"
          component={BottomTabNavigation}
          options={{ gestureEnabled: false }}
        />
      ) : (
        <>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default StackNavigation;
