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
  buttonBack: {
    backgroundColor: colors.colorWhite,
    borderRadius: 100,
    padding: 10,
    position: 'absolute',
    top: 15,
    left: 15
  },
  iconBack: {
    width: 20,
    height: 20
  },
  contentUser: {
    flex: 1,
    backgroundColor: colors.colorWhite
  },
  pickupForm: {
    paddingHorizontal: 15,
    flex: 1
  },
  pickupTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  button: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: colors.colorButtonGeneral,
    width: '30%',
    alignItems: 'center',
    marginBottom: 15
  },
  buttonCaption: {
    color: colors.colorWhite,
    fontSize: 14
  },
  pickupSchedule: {
    fontSize: 16
  },
  buttonSubmit: {
    backgroundColor: colors.colorButtonGeneral,
    padding: 15,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15
  },
  buttonSubmitCaption: {
    color: colors.colorWhite,
    fontSize: 16
  },
  bookInformation: {
    marginHorizontal: 15,
    marginTop: 20,
    backgroundColor: colors.colorWhite
  },
  bookTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  bookAuthor: {
    color: colors.colorGreyText,
    fontSize: 16
  },
  bookEdition: {
    marginTop: 5,
    fontSize: 16
  },
  lineHorizontal: {
    marginVertical: 20,
    height: 1,
    backgroundColor: colors.colorBlack
  },
  contentLibrarian: {
    flex: 1,
    backgroundColor: colors.colorWhite,
    paddingHorizontal: 15
  },
  titlePickupDate: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  pickupDate: {
    marginTop: 5,
    fontSize: 16
  },
});

export default styles;