import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  default: {
    width: width * 0.75 + 14,
    height: 35,
    marginTop: 35,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e84118',
  },
  screen: {
    width,
    height: 40,
    marginTop: 0,
    borderRadius: 0,
    borderTopColor: '#dcdde1',
    borderTopWidth: 3,
    backgroundColor: 'white',
  },
});

export default styles;
