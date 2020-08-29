import { StyleSheet, Dimensions } from 'react-native';
import { todoDateColor } from '../config/styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    position: 'relative',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  gridContentStyleProp: {
    paddingTop: 30,
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todoTextStyle: {
    fontSize: 15,
    color: todoDateColor,
  },
});

export default styles;
