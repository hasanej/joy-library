import {StyleSheet} from 'react-native';
import colors from 'assets/colors';

const styles = StyleSheet.create({
  buttonPrev: {
    flexDirection: 'row',
    backgroundColor: colors.colorButtonPrevPage,
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconPrev: {
    tintColor: colors.colorWhite,
    marginRight: 10,
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