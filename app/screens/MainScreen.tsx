// Modules
import React from 'react';
import { Platform, StatusBar, SafeAreaView, Text } from 'react-native';
//Utils
import styles from './styles';
import Calendar from '../components/main/Calendar';
// Components

function MainScreen() {
  return (
    <SafeAreaView
      style={[
        styles.safeAreaViewContainer,
        {
          justifyContent: 'flex-start',
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        },
      ]}>
      <Calendar />
    </SafeAreaView>
  );
}

export default React.memo(MainScreen);
