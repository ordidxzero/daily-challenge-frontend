import { StyleSheet, Dimensions } from 'react-native';
import {
  safeAreaViewDefaultBackgroundColor,
  safeAreaViewDarkModeBackgroundColor,
} from '../config/styles';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    position: 'relative',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  gridContentStyleProp: {
    paddingTop: 30,
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const darkModeStyle = (darkMode: boolean) =>
  StyleSheet.create({
    safeAreaViewContainer: {
      backgroundColor: darkMode
        ? safeAreaViewDarkModeBackgroundColor
        : safeAreaViewDefaultBackgroundColor,
    },
  });
