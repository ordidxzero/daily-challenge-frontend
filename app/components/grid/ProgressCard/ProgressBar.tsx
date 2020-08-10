import React from 'react';
import { View, Text } from 'react-native';
import { progressBarStyle } from './styles';
import { ProgressBarProps } from './types';

function ProgressBar({ rate }: ProgressBarProps) {
  const percent = rate ? (rate * 100).toFixed(2) : '0.00';
  const styles = progressBarStyle(rate);
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <View style={styles.barRate}></View>
      </View>
      <Text style={{ fontSize: 11 }}>{percent}%</Text>
    </View>
  );
}

export default ProgressBar;
