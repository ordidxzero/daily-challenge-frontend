import { StyleSheet, Dimensions } from 'react-native';
import {
  inputBorderColor,
  inputTitleColor,
  inputRequireWarnColor,
  inputDarkModeColor,
  inputDefaultBackgroundColor,
  inputDarkModeTextColor,
} from '../../../config/styles';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderRadius: 5,
    marginBottom: 20,
  },
  inputTitle: {
    marginBottom: 10,
    fontWeight: '400',
    fontSize: 13,
  },
  textInputContainer: {
    width: width * 0.75,
    fontSize: 16,
  },
});

export const darkModeStyle = (darkMode: boolean) =>
  StyleSheet.create({
    inputContainer: {
      borderColor: darkMode ? inputDarkModeColor : inputBorderColor,
      backgroundColor: darkMode
        ? inputDarkModeColor
        : inputDefaultBackgroundColor,
    },
    inputTitle: {
      color: darkMode ? inputTitleColor : inputTitleColor,
    },
    requiredInputContainer: {
      borderColor: darkMode ? inputRequireWarnColor : inputRequireWarnColor,
    },
    textInputContainer: {
      color: darkMode ? inputDarkModeTextColor : 'black',
    },
  });
