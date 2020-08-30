import { StyleSheet } from 'react-native';
import { ifIphoneX, getBottomSpace } from 'react-native-iphone-x-helper';
import {
  todoCreateButtonDefaultBackgroundColor,
  todoCreateButtonShadowColor,
  todoCreateButtonDarkModeBackgroundColor,
} from '../../../config/styles';

const WIDTH = 70;
const HEIGHT = 35;

export const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
    left: '50%',
    width: WIDTH,
    height: HEIGHT,
    borderRadius: HEIGHT / 2,
    transform: [{ translateX: -WIDTH / 2 }],
    ...ifIphoneX({ marginBottom: getBottomSpace() }, {}),
    shadowColor: todoCreateButtonShadowColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  buttonText: { fontSize: 12 },
});

export const darkModeStyle = (darkMode: boolean) =>
  StyleSheet.create({
    buttonContainer: {
      backgroundColor: darkMode
        ? todoCreateButtonDarkModeBackgroundColor
        : todoCreateButtonDefaultBackgroundColor,
    },
    buttonText: {
      color: darkMode ? 'white' : 'black',
    },
  });
