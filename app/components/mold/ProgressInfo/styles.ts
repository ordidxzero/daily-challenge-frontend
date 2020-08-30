import { StyleSheet, Dimensions } from 'react-native';
import {
  progressInfoContainerBorderColor,
  progressInfoContainerDarkModeBorderColor,
} from '../../../config/styles';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  progressInfoContainer: {
    width: width - 50,
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 20,
  },
});

export const darkModeStyle = (darkMode: boolean) =>
  StyleSheet.create({
    progressInfoContainer: {
      borderBottomColor: darkMode
        ? progressInfoContainerDarkModeBorderColor
        : progressInfoContainerBorderColor,
    },
  });
