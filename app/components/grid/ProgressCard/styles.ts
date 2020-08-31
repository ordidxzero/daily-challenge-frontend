import { StyleSheet, Dimensions } from 'react-native';
import {
  progressCardDefaultBackgroundColor,
  progressCardShadowColor,
  progressCardDarkModeBackgroundColor,
} from '../../../config/styles';

const { width } = Dimensions.get('window');

export const progressCardStyle = StyleSheet.create({
  container: {
    width: width * 0.85,
    height: 60,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
    marginBottom: 20,
    shadowColor: progressCardShadowColor,
    shadowOffset: {
      width: 5,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.46,
    elevation: 9,
  },
});

export const darkModeStyle = (darkMode: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: darkMode
        ? progressCardDarkModeBackgroundColor
        : progressCardDefaultBackgroundColor,
    },
    titleText: {
      color: darkMode ? 'white' : 'black',
    },
  });
