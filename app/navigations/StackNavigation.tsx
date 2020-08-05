/* eslint-disable react/display-name */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import useReduxState from '../hooks/common/useReduxState';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import BottomTabNavigation from './BottomTabNavigation';
import TodoScreen from '../screens/TodoScreen';
import useCreateHeaderButton from '../hooks/swipeablePanel/useCreateHeaderButton';

const Stack = createStackNavigator();

function StackNavigation() {
  const {
    login: { token },
  } = useReduxState();
  const headerRight = useCreateHeaderButton();
  return (
    <Stack.Navigator
      headerMode="float"
      screenOptions={{ gestureEnabled: true }}>
      {!token && (
        <>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      )}
      <Stack.Screen
        name="Main"
        component={BottomTabNavigation}
        options={{ gestureEnabled: false, headerShown: false }}
      />
      <Stack.Screen
        name="Todo"
        component={TodoScreen}
        options={({ navigation }) => ({
          headerBackTitleVisible: false,
          headerTitle: '세부사항',
          headerRight: headerRight && headerRight(navigation),
        })}
      />
    </Stack.Navigator>
  );
}

export default React.memo(StackNavigation);
