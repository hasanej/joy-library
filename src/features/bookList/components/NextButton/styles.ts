import {StyleSheet} from 'react-native';
import colors from 'assets/colors';

const styles = StyleSheet.create({
  buttonNext: {
    flexDirection: 'row',
    backgroundColor: colors.colorButtonNextPage,
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconNext: {
    tintColor: colors.colorWhite,
    marginLeft: 10,
    height: 20,
    width: 20
  },
  captionButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.colorWhite
  }
});

export default styles;