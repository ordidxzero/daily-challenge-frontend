import { StyleSheet, Dimensions } from 'react-native';
import {
  progressBarRateColor,
  progressBarDefaultBackgroundColor,
  progressBarDarkModeBackgroundColor,
  progressBarRateDarkModeColor,
} from '../../../config/styles';

const { width } = Dimensions.get('window');

export const progressBarStyle = (data: number) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    bar: {
      position: 'relative',
      width: width * 0.65,
      height: 5,
      borderRadius: 3,
      marginRight: 5,
      overflow: 'hidden',
    },
    barRate: {
      width: width * 0.65 * data,
      height: 5,
      borderRadius: 3,
      marginRight: 5,
    },
  });

export const darkModeStyle = (darkMode: boolean) =>
  StyleSheet.create({
    bar: {
      backgroundColor: darkMode
        ? progressBarDarkModeBackgroundColor
        : progressBarDefaultBackgroundColor,
    },
    barRate: {
      backgroundColor: darkMode
        ? progressBarRateDarkModeColor
        : progressBarRateColor,
    },
    rate: {
      color: darkMode ? 'white' : 'black',
    },
  });
