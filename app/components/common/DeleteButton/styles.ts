import { StyleSheet, Dimensions } from 'react-native';
import { deleteButtonDefaultBackgroundColor } from '../../../config/styles';
import { ifIphoneX, getBottomSpace } from 'react-native-iphone-x-helper';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  defaultContentStyle: {
    width: width * 0.75 + 14,
    height: 40,
  },
  screenContentStyle: {
    width: width * 0.95,
  },
  default: {
    marginTop: 35,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: deleteButtonDefaultBackgroundColor,
  },
  screen: {
    position: 'absolute',
    bottom: 10,
    ...ifIphoneX({ bottom: getBottomSpace() + 5 }, {}),
    marginTop: 0,
  },
});

export default styles;
