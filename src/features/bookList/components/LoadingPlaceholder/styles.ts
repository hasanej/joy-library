import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  placeholder: {
    height: 85,
    width: screenWidth - 30,
    borderRadius: 10,
    marginBottom: 15
  }
});

export default styles;