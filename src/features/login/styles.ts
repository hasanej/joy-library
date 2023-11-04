import {StyleSheet} from 'react-native';
import colors from 'assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  containerLoginForm: {
    backgroundColor: colors.colorWhite,
    borderRadius: 10,
    padding: 20,
    width: '100%'
  },
  image: {
    width: '100%',
    height: 250,
    alignSelf: 'center'
  },
  loginCaption: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20
  },
  containerError: {
    backgroundColor: colors.colorError,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  textError: {
    color: colors.colorWhite,
    fontSize: 14,
    textAlign: 'center'
  },
  containerButton: {
    marginTop: 20
  }
});

export default styles;