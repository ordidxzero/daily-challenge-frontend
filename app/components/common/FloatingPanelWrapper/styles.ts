import { StyleSheet } from 'react-native';
import {
  inputSectionTitleBorderColor,
  inputSectionDarkModeTitleTextColor,
} from '../../../config/styles';

export const styles = StyleSheet.create({
  inputSectionTitleContainer: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: inputSectionTitleBorderColor,
    marginBottom: 18,
  },
  inputSectionTitle: {
    fontSize: 18,
    fontWeight: '300',
  },
});

export const darkModeStyle = (darkMode: boolean) =>
  StyleSheet.create({
    inputSectionTitleText: {
      color: darkMode ? inputSectionDarkModeTitleTextColor : undefined,
    },
  });
