import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const progressCardStyle = StyleSheet.create({
  container: {
    width: width * 0.85,
    height: 60,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#fff',
    marginBottom: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.46,

    elevation: 9,
  },
});