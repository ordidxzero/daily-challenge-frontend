import { StyleSheet, Dimensions } from 'react-native';
import {
  progressBarRateColor,
  progressBarRateDarkModeColor,
  progressBarContainerDarkModeBackgroundColor,
  progressBarContainerDefaultBackgroundColor,
} from '../../../config/styles';

const { width } = Dimensions.get('window');

export const progressBarStyle = (data: number) =>
  StyleSheet.create({
    container: {
      width: width - 50,
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      overflow: 'hidden',
      borderRadius: 5,
      marginBottom: 30,
    },
    bar: {
      position: 'relative',
      width: '100%',
      height: 14,
      borderRadius: 7,
      marginRight: 5,
      overflow: 'hidden',
      zIndex: 10,
      backgroundColor: 'white',
    },
    barRate: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: (((width - 50) * 4) / 5) * data,
      height: 14,
      borderRadius: 7,
      marginRight: 5,
      zIndex: 15,
    },
  });

export const darkModeStyle = (darkMode: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: darkMode
        ? progressBarContainerDarkModeBackgroundColor
        : progressBarContainerDefaultBackgroundColor,
    },
    barRate: {
      backgroundColor: darkMode
        ? progressBarRateDarkModeColor
        : progressBarRateColor,
    },
  });
