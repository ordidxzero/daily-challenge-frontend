import { StyleSheet, Dimensions } from 'react-native';

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
});

export default styles;
