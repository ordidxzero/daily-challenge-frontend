import { StyleSheet, Dimensions } from 'react-native';
import {
  dateSetterContainerBorderColor,
  dateSetterDarkModeColor,
} from '../../../config/styles';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  dateSetterContainer: {
    width: width - 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 18,
    marginBottom: 15,
  },
  dateSetterVerticalLine: {
    height: 60,
    width: 1,
  },
});

export const darkModeStyle = (darkMode: boolean) =>
  StyleSheet.create({
    dateSetterContainer: {
      borderBottomColor: darkMode
        ? dateSetterDarkModeColor
        : dateSetterContainerBorderColor,
    },
    dateSetterVerticalLine: {
      backgroundColor: darkMode
        ? dateSetterDarkModeColor
        : dateSetterContainerBorderColor,
    },
  });
