import { StyleSheet } from "react-native";
import COLOR_CONST from "../../utils/colors";
import scale, { verticalScale } from "../../utils/scale";

export default StyleSheet.create({
    forecastItem: {
        width: scale(150),
        borderWidth: scale(1),
        borderColor: COLOR_CONST.greyColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: scale(10),
        marginBottom: verticalScale(20),
        padding: scale(20)
    },
    weatherImage: {
        width: scale(40),
        height: scale(40),
        backgroundColor: COLOR_CONST.whiteColor
    },
    day: {
        fontSize: scale(12),
        color: COLOR_CONST.blackColor
    }
});