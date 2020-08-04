import { StyleSheet, Dimensions } from 'react-native';
import { todoCreateButtonBackgroundColor } from '../../../config/styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  touchableOpacity: {
    // `TodoManager.tsx`의 TouchableOpacity
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableOpacityText: { color: 'white', fontSize: 30, marginBottom: 3 },
  todoCreateButton: {
    backgroundColor: todoCreateButtonBackgroundColor,
    position: 'absolute',
    top: -30,
    left: width * 0.5 - 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    zIndex: 1000,
  },
  detailButton: {
    backgroundColor: todoCreateButtonBackgroundColor,
    position: 'absolute',
    bottom: 30,
    left: width * 0.5 - 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    zIndex: 1000,
  },
});

export default styles;
