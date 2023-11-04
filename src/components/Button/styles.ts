import {StyleSheet} from 'react-native';
import colors from 'assets/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.colorPrimary,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  caption: {
    fontSize: 14,
    color: 'white'
  }
});

export default styles;