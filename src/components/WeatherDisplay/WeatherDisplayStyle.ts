import {StyleSheet} from 'react-native';
import COLOR_CONST from '../../utils/colors';
import scale from '../../utils/scale';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: scale(10),
  },
  location: {
    fontSize: scale(24),
    fontWeight: 'bold',
    color: COLOR_CONST.blackColor,
  },
  temperature: {
    fontSize: scale(30),
    fontWeight: 'bold',
    color: COLOR_CONST.blackColor,
  },
  image: {
    width: scale(60),
    height: scale(60),
    backgroundColor: COLOR_CONST.whiteColor,
  },
});
