import {StyleSheet} from 'react-native';
import colors from 'assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorBgBookList
  },
  containerHeader: {
    width: '100%'
  },
  bgHeader: {
    width: '100%',
    height: 200
  },
  containerWelcome: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.colorBlackOpacity,
    padding: 10
  },
  captionName: {
    fontSize: 16,
    color: colors.colorWhite,
    fontWeight: 'bold'
  },
  captionEmail: {
    fontSize: 14,
    color: colors.colorWhite
  },
  captionBookGenre: {
    fontSize: 20,
    color: colors.colorBlack,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginVertical: 10
  },
  dropdown: {
    height: 50,
    borderColor: colors.colorBorderDropdown,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: colors.colorWhite,
    marginHorizontal: 15,
    marginBottom: 10
  },
  containerBookList: {
    flex: 1
  },
  containerButtons: {
    flexDirection: 'row'
  },
  buttonLogout: {
    position: 'absolute',
    top: 15,
    right: 15
  },
  iconLogout: {
    width: 50,
    height: 50
  }
});

export default styles;