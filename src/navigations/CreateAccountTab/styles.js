import { StyleSheet } from "react-native";
import { moderateVerticalScale, scale } from "react-native-size-matters";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";

export const styles = StyleSheet.create({
    tabBarStyle: {
        elevation: 0, shadowColor: "#000000",
        // shadowOffset: { width: 0, height: 10 }, // change this for more shadow
        shadowOpacity: 0.0,
    },
    tabBarLabelStyle: { fontFamily: fonts.OpenSans.Bold, fontWeight: 'normal', fontSize: scale(15), textTransform: 'capitalize' },
    tabBarIndicatorStyle: { borderColor: colors.themeColor, marginHorizontal: moderateVerticalScale(20), width: "38%", borderWidth: 1.5, borderRadius: 1 },
})