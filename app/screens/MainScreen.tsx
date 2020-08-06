// Modules
import React from 'react';
import { Platform, StatusBar, SafeAreaView } from 'react-native';
// Utils
import styles from './styles';
// Components
import Calendar from '../components/main/Calendar';
import { CreatePanel } from '../components/main/SwipeablePanel';

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
      <CreatePanel />
    </SafeAreaView>
  );
}

export default React.memo(MainScreen);
