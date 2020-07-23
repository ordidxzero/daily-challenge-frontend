import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import MainScreen from '../screens/MainScreen';
import GridScreen from '../screens/GridScreen';
import CustomBottomTabBar from '../components/main/CustomBottomTabBar';

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Calendar"
      tabBarOptions={{
        showLabel: false,
      }}
      tabBar={props => <CustomBottomTabBar {...props} />}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === 'Calendar') {
            return (
              <Entypo
                name="home"
                color={focused ? '#3498db' : 'black'}
                size={30}
              />
            );
          }
          if (route.name === 'Grid') {
            return (
              <Entypo
                name="grid"
                color={focused ? '#3498db' : 'black'}
                size={30}
              />
            );
          }
        },
      })}>
      <Tab.Screen name="Calendar" component={MainScreen} />
      <Tab.Screen name="Grid" component={GridScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
