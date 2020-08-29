import { StyleSheet, Dimensions } from 'react-native';
import {
  screenHeaderDefaultBackgroundColor,
  screenHeaderBottomBorderColor,
  screenHeaderDarkModeBackgroundColor,
} from '../../../config/styles';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width,
    height: 45,
    borderBottomWidth: 0.7,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: screenHeaderBottomBorderColor,
    alignItems: 'center',
    zIndex: 100000,
  },
  title: {
    width,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  titleText: { fontSize: 16, fontWeight: '700' },
});

export const darkModeStyle = (darkMode: boolean) =>
  StyleSheet.create({
    headerIcon: {
      color: darkMode ? 'white' : 'black',
    },
    container: {
      backgroundColor: darkMode
        ? screenHeaderDarkModeBackgroundColor
        : screenHeaderDefaultBackgroundColor,
    },
    titleText: {
      color: darkMode ? 'white' : 'black',
    },
  });
