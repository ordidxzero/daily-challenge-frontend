import { StyleSheet, Dimensions } from 'react-native';
import { todoTimezoneColor } from '../../../config/styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  dayComponentContainer: {
    position: 'relative',
    width,
  },
  todoContainer: {
    position: 'relative',
    height: 50,
    width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  content: {
    // `ToDo.tsx`의 컨텐츠
    width: width * 0.85,
  },
  timezone: {
    // `ToDo.tsx`의 시간대
    fontSize: 11,
    color: todoTimezoneColor,
  },
});

export default styles;
