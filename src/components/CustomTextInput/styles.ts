import {StyleSheet} from 'react-native';
import colors from 'assets/colors';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    paddingHorizontal: 10,
    height: 45,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center'
  },
  caption: {
    fontSize: 14
  },
  errorMessage: {
    fontSize: 14,
    color: colors.colorError
  },
  border: {
    borderColor: colors.colorBlack
  },
  borderError: {
    borderColor: colors.colorError
  }
});

export default styles;