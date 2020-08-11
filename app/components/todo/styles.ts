import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width,
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderBottomColor: '#dcdde1',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    width,
    position: 'absolute',
    alignItems: 'center',
    zIndex: -1,
  },
  titleText: { fontSize: 20, fontWeight: '600' },
});

export default styles;
