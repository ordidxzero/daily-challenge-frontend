import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';
import DrawerContent from '../screens/DrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Main"
        component={StackNavigation}
        options={{ drawerLabel: () => null, drawerIcon: () => null }}
      />
    </Drawer.Navigator>
  );
}
