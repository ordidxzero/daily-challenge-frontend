import { StyleSheet } from 'react-native';
import { todoDateColor, todoDarkModeTitleTextColor } from '../../config/styles';

export const styles = StyleSheet.create({
  todoTextStyle: {
    fontSize: 15,
    color: todoDateColor,
  },
});

export const darkModeStyle = (darkMode: boolean) =>
  StyleSheet.create({
    titleText: {
      color: darkMode ? todoDarkModeTitleTextColor : undefined,
    },
  });
