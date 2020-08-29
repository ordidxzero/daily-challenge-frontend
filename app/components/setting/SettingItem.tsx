import React from 'react';
import { View, Switch, Dimensions, Text } from 'react-native';
import {
  switchFalseTrackColor,
  switchTrueTrackColor,
} from '../../config/styles';
import useToggleDarkMode from '../../hooks/apollo/useToggleDarkMode';

const { width } = Dimensions.get('window');

function SettingItem({ title }: { title: string; disabled?: boolean }) {
  const { toggleDarkMode, darkMode } = useToggleDarkMode();
  return (
    <View
      style={{
        width: width - 40,
        height: 65,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={[{ fontSize: 16 }, { color: darkMode ? 'white' : 'black' }]}>
        {title}
      </Text>
      <Switch
        disabled={false}
        trackColor={{
          false: switchFalseTrackColor,
          true: switchTrueTrackColor,
        }}
        thumbColor="white"
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleDarkMode}
        value={darkMode}
      />
    </View>
  );
}

export default SettingItem;
