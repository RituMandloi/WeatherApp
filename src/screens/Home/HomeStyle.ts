import { StyleSheet } from "react-native";
import scale from "../../utils/scale";
import COLOR_CONST from "../../utils/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: scale(16),
    },
    currentWeather: {
        alignItems: 'center',
    },
    location: {
        fontSize: scale(24),
        fontWeight: 'bold',
    },
    temperature: {
        fontSize: scale(32),
    },
    weatherImage: {
        width: scale(100),
        height: scale(100),
    },
    searchText: {
        fontSize: scale(12),
        color: COLOR_CONST.blackColor,
        marginLeft: scale(20),
    },
    errorText: {
        fontSize: scale(12),
        color: COLOR_CONST.redAlertColor,
        marginLeft: scale(20),
    },
});