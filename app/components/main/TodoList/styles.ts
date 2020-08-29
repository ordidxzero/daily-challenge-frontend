import { StyleSheet, Dimensions } from 'react-native';
import {
  todoTimezoneColor,
  checkerDoneColor,
  checkerUndoneColor,
  todoContainerBorderColor,
  todoContainerDefaultBackgroundColor,
  todoContainerShadowColor,
} from '../../../config/styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  dayComponentContainer: {
    width,
  },
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    width: width - 20,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: todoContainerBorderColor,
    backgroundColor: todoContainerDefaultBackgroundColor,
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
    color: todoTimezoneColor,
    marginBottom: 3,
  },
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

export default styles;
