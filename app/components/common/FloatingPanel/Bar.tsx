import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BarProps } from './types';
import {
  floatingPanelBarDarkModeBackgroundColor,
  floatingPanelBarDefaultBackgroundColor,
} from '../../../config/styles';
import useReduxState from '../../../hooks/common/useReduxState';

const Bar = ({ barStyle }: BarProps) => {
  const {
    main: { darkMode },
  } = useReduxState();
  const dark = darkModeStyle(darkMode);
  return (
    <View style={BarStyles.barContainer}>
      <View style={[BarStyles.bar, dark.bar, barStyle]} />
    </View>
  );
};

export default React.memo(Bar);

const BarStyles = StyleSheet.create({
  barContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bar: {
    width: '50%',
    height: 6,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
});

const darkModeStyle = (darkMode: boolean) =>
  StyleSheet.create({
    bar: {
      backgroundColor: darkMode
        ? floatingPanelBarDarkModeBackgroundColor
        : floatingPanelBarDefaultBackgroundColor,
    },
  });
