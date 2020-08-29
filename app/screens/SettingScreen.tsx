import React from 'react';
import SettingItem from '../components/setting/SettingItem';
import CustomSafeAreaView from './CustomSafeAreaView';

function SettingScreen() {
  return (
    <CustomSafeAreaView headerTitle="Settings">
      <SettingItem title="Dark Mode" disabled={true} />
    </CustomSafeAreaView>
  );
}

export default SettingScreen;
