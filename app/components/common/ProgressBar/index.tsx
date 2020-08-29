// Modules
import React from 'react';
import { View, Text } from 'react-native';
// Utils
import { progressBarStyle, darkModeStyle } from './styles';
import useReduxState from '../../../hooks/common/useReduxState';

function ProgressBar({ rate }: { rate: number }) {
  const {
    main: { darkMode },
  } = useReduxState();
  const percent = rate ? (rate * 100).toFixed(2) : '0.00';
  const styles = progressBarStyle(rate);
  const dark = darkModeStyle(darkMode);
  return (
    <View style={styles.container}>
      <View style={[styles.bar, dark.bar]}>
        <View style={[styles.barRate, dark.barRate]}></View>
      </View>
      <Text style={[{ fontSize: 11 }, dark.rate]}>{percent}%</Text>
    </View>
  );
}

export default React.memo(ProgressBar);
