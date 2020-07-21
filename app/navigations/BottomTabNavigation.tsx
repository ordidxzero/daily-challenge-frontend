import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import MainScreen from '../screens/MainScreen';
import GridScreen from '../screens/GridScreen';
import TodoManager from '../components/main/TodoManager';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Calendar"
      tabBarOptions={{
        showLabel: false,
      }}
      tabBar={props => {
        return (
          <View>
            <TodoManager
              onPress={() => console.log('Add Todo')}
              type="create"
            />
            <BottomTabBar {...props} />
          </View>
        );
      }}
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
