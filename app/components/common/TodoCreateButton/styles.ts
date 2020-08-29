import { StyleSheet } from 'react-native';
import { ifIphoneX, getBottomSpace } from 'react-native-iphone-x-helper';

const WIDTH = 70;
const HEIGHT = 35;

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
    left: '50%',
    width: WIDTH,
    height: HEIGHT,
    borderRadius: HEIGHT / 2,
    transform: [{ translateX: -WIDTH / 2 }],
    ...ifIphoneX({ marginBottom: getBottomSpace() }, {}),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});

export default styles;
