import { StyleSheet, Dimensions } from 'react-native';
import {
  continuousAchievementContainerBorderColor,
  currentContinuousAchievementIconColor,
  maxContinuousAchievementIconColor,
  continuousAchievementContainerDarkModeBorderColor,
} from '../../../config/styles';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  continuousAchievementContainer: {
    position: 'relative',
    width: width - 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingVertical: 20,
    marginVertical: 15,
  },
  continuousAchievementTitleText: { fontSize: 17 },
  fireIcon: {
    color: currentContinuousAchievementIconColor,
    marginRight: 5,
  },
  badgeIcon: {
    color: maxContinuousAchievementIconColor,
    marginRight: 5,
  },
  continuousAchievementVerticalLine: {
    height: 60,
    width: 1,
  },
});

export const darkModeStyle = (darkMode: boolean) =>
  StyleSheet.create({
    continuousAchievementContainer: {
      borderBottomColor: darkMode
        ? continuousAchievementContainerDarkModeBorderColor
        : continuousAchievementContainerBorderColor,
      borderTopColor: darkMode
        ? continuousAchievementContainerDarkModeBorderColor
        : continuousAchievementContainerBorderColor,
    },
    continuousAchievementVerticalLine: {
      backgroundColor: darkMode
        ? continuousAchievementContainerDarkModeBorderColor
        : continuousAchievementContainerBorderColor,
    },
    continuousAchievementTitleText: {
      color: darkMode ? 'white' : 'black',
    },
  });
