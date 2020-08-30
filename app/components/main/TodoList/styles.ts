import { StyleSheet, Dimensions } from 'react-native';
import {
  todoTimezoneColor,
  checkerDoneColor,
  checkerUndoneColor,
  todoContainerDefaultBackgroundColor,
  todoContainerShadowColor,
  todoContainerDarkModeBackgroundColor,
} from '../../../config/styles';

const { width } = Dimensions.get('window');

export const dayComponentStyle = StyleSheet.create({
  container: {
    width,
    alignItems: 'center',
  },
  dateString: { fontWeight: '600', marginBottom: 20 },
});

export const todoStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    width: width - 20,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 5,
    shadowColor: todoContainerShadowColor,
    shadowOffset: {
      width: 5,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.46,

    elevation: 9,
  },
  content: {
    // `ToDo.tsx`의 컨텐츠
    width: width * 0.85,
  },
  timezone: {
    // `ToDo.tsx`의 시간대
    fontSize: 11,
    marginBottom: 3,
  },
});

export const darkModeStyle = (darkMode: boolean) =>
  StyleSheet.create({
    dateString: {
      color: darkMode ? 'white' : 'black',
    },
    todoContainer: {
      backgroundColor: darkMode
        ? todoContainerDarkModeBackgroundColor
        : todoContainerDefaultBackgroundColor,
    },
    content: {
      color: darkMode ? 'white' : 'black',
    },
    timezone: {
      color: darkMode ? 'white' : todoTimezoneColor,
    },
  });

export const checkerStyle = StyleSheet.create({
  checkerDefaultStyle: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  done: { borderColor: checkerDoneColor, backgroundColor: checkerDoneColor },
  doneText: { color: 'white' },
  undone: { borderColor: checkerUndoneColor },
  undoneText: { color: checkerUndoneColor, marginLeft: 1, marginTop: 2 },
});
