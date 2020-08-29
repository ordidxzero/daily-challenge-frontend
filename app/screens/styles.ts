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
  gridScrollView: {
    paddingTop: 30,
    width,
  },
  gridContentStyleProp: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  color: {
    color: todoDateColor,
  },
});

export default styles;
