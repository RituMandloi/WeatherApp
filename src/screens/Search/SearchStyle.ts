import {StyleSheet} from 'react-native';
import COLOR_CONST from '../../utils/colors';
import scale from '../../utils/scale';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(16),
  },
  searchInput: {
    borderWidth: scale(1),
    borderColor: COLOR_CONST.lightGreyColor,
    borderRadius: scale(5),
    padding: scale(8),
    marginBottom: scale(16),
  },
  locationItem: {
    padding: scale(8),
    paddingVertical: scale(20),
    borderBottomWidth: scale(1),
    borderBottomColor: COLOR_CONST.greyColor,
  },
  locationText: {
    fontSize: scale(15),
    color: COLOR_CONST.blackColor,
    fontWeight: 'bold',
  },
});
