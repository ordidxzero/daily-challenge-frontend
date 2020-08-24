import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';
import Header from '../components/common/Header';
import SettingItem from '../components/setting/SettingItem';

function SettingScreen() {
  return (
    <SafeAreaView
      style={[styles.safeAreaViewContainer, { justifyContent: 'flex-start' }]}>
      <Header title="Settings" />
      <SettingItem title="Dark Mode" disabled={true} />
    </SafeAreaView>
  );
}

export default SettingScreen;
