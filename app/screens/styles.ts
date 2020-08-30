import { StyleSheet, Dimensions } from 'react-native';
import {
  safeAreaViewDefaultBackgroundColor,
  safeAreaViewDarkModeBackgroundColor,
  drawerContentDarkModeBackgroundColor,
  safeAreaViewStatusBarDarkModeBackgroundColor,
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
    safeAreaViewStatusBar: {
      backgroundColor: darkMode
        ? safeAreaViewStatusBarDarkModeBackgroundColor
        : safeAreaViewDefaultBackgroundColor,
    },
    safeAreaViewContainer: {
      backgroundColor: darkMode
        ? safeAreaViewDarkModeBackgroundColor
        : safeAreaViewDefaultBackgroundColor,
    },
  });

export const drawerContentDarkModeStyle = (darkMode: boolean) => ({
  drawerContentContainer: {
    backgroundColor: darkMode ? drawerContentDarkModeBackgroundColor : 'white',
  },
  theme: { colors: { text: darkMode ? 'white' : 'black' } },
});
