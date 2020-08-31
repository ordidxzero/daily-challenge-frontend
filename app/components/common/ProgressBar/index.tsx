// Modules
import React from 'react';
import { View, Text } from 'react-native';
// Utils
import { progressBarStyle, darkModeStyle } from './styles';
import useReduxState from '../../../hooks/common/useReduxState';

function ProgressBar({ title, rate }: { rate: number; title?: string }) {
  const {
    main: { darkMode },
  } = useReduxState();
  const percent = rate ? (rate * 100).toFixed(2) : '0.00';
  const styles = progressBarStyle(rate);
  const dark = darkModeStyle(darkMode);
  return (
    <View style={[styles.container, dark.container]}>
      <View
        style={{
          width: '20%',
          height: '100%',
          backgroundColor: '#2c3e50',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ color: 'white', fontSize: 12, marginBottom: 5 }}>
          {title}
        </Text>
        <Text style={{ fontSize: 11, color: 'white' }}>{percent}%</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingHorizontal: 15,
        }}>
        <View style={[styles.bar]}>
          <View style={[styles.barRate, dark.barRate]} />
        </View>
      </View>
    </View>
  );
}

export default React.memo(ProgressBar);
