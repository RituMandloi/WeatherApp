import {StyleSheet} from 'react-native';
import COLOR_CONST from '../../utils/colors';
import scale, {verticalScale} from '../../utils/scale';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: scale(16),
    marginHorizontal: scale(10),
    marginTop: verticalScale(10),
  },
  input: {
    flex: 1,
    borderWidth: scale(1),
    borderColor: COLOR_CONST.greyColor,
    padding: scale(10),
    marginRight: scale(8),
    color: COLOR_CONST.blackColor,
  },
});
