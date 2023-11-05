import {StyleSheet} from 'react-native';
import colors from 'assets/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.colorWhite,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 15,
    marginHorizontal: 15
  },
  shadowProp: {
    shadowColor: colors.colorItemShadow,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  bookIcon: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  containerBookInfo: {
    flex: 1
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  bookAuthor: {
    color: colors.colorGreyText,
    fontSize: 14
  },
  bookEdition: {
    marginTop: 5,
    fontSize: 14
  }
});

export default styles;