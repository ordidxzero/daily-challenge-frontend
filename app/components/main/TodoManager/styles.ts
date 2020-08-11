import { StyleSheet, Dimensions } from 'react-native';
import { todoCreateButtonBackgroundColor } from '../../../config/styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  touchableOpacity: {
    // `TodoManager.tsx`의 TouchableOpacity
    position: 'absolute',
    left: width * 0.5 - 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  touchableOpacityText: { color: 'white', fontSize: 30, marginBottom: 3 },
  todoCreateButton: {
    backgroundColor: todoCreateButtonBackgroundColor,
    top: -30,
  },
  detailButton: {
    backgroundColor: todoCreateButtonBackgroundColor,
    bottom: 30,
  },
});

export default styles;
