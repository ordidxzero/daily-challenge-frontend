import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';
import DrawerContent from '../screens/DrawerContent';
import useReduxState from '../hooks/common/useReduxState';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  const { login } = useReduxState();
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{ gestureEnabled: login ? true : false }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Main"
        component={StackNavigation}
        options={{ drawerLabel: () => null, drawerIcon: () => null }}
      />
    </Drawer.Navigator>
  );
}
