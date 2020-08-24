import React, { useState } from 'react';
import { Text, SafeAreaView, Switch } from 'react-native';
import styles from './styles';
import Header from '../components/common/Header';

function SettingScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <SafeAreaView
      style={[styles.safeAreaViewContainer, { justifyContent: 'flex-start' }]}>
      <Header title="Settings" />
      <Text>123</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#2ecc71' }}
        thumbColor={'white'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </SafeAreaView>
  );
}

export default SettingScreen;
