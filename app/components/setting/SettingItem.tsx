import React, { useState } from 'react';
import { View, Switch, Dimensions, Text } from 'react-native';
import {
  switchFalseTrackColor,
  switchTrueTrackColor,
} from '../../config/styles';

const { width } = Dimensions.get('window');

function SettingItem({
  title,
  disabled = false,
}: {
  title: string;
  disabled?: boolean;
}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);
  return (
    <View
      style={{
        width: width - 40,
        height: 65,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{ fontSize: 16 }}>{title}</Text>
      <Switch
        disabled={disabled}
        trackColor={{
          false: switchFalseTrackColor,
          true: switchTrueTrackColor,
        }}
        thumbColor="white"
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

export default SettingItem;
