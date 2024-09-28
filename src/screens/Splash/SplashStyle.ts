import { StyleSheet } from "react-native";
import COLOR_CONST from "../../utils/colors";
import scale from "../../utils/scale";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLOR_CONST.whiteColor,
    },
    weatherText: {
        fontSize: scale(20),
        fontWeight: 'bold',
        color: COLOR_CONST.blackColor
    }
});