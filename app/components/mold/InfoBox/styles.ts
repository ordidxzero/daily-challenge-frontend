import { StyleSheet, Dimensions } from 'react-native';
import {
  infoBoxContainerBorderColor,
  infoBoxDefaultBackgroundColor,
  infoBoxShadowColor,
  infoBoxTextColor,
  infoBoxContainerDarkModeBorderColor,
  dateBoxContainerDarkModeBackgroundColor,
} from '../../../config/styles';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  infoBoxContainer: {
    position: 'relative',
    width,
    height: 100,
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 35,
    marginBottom: 35,
  },
  dateBoxContainer: {
    position: 'absolute',
    top: 63,
    width: width * 0.7,
    height: 70,

    borderRadius: 7,
    shadowColor: infoBoxShadowColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  dateBoxDateWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  dateBoxDateDiffWrapper: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
  },
  dateBoxTextColor: {
    color: infoBoxTextColor,
  },
});

export const darkModeStyle = (darkMode: boolean) =>
  StyleSheet.create({
    infoBoxContainer: {
      borderBottomColor: darkMode
        ? infoBoxContainerDarkModeBorderColor
        : infoBoxContainerBorderColor,
    },
    dateBoxContainer: {
      backgroundColor: darkMode
        ? dateBoxContainerDarkModeBackgroundColor
        : infoBoxDefaultBackgroundColor,
    },
  });
