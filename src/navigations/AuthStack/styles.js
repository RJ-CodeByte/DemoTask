import { StyleSheet } from "react-native";
import { moderateVerticalScale, scale } from "react-native-size-matters";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";

export const styles = StyleSheet.create({
    headerStyle: {
        elevation: 3, shadowColor: "#000000",
        // shadowOffset: { width: 0, height: 10 }, // change this for more shadow
        shadowOpacity: 0.5,
    },
    headerTitleStyle: { fontFamily: fonts.OpenSans.SemiBold, fontSize: scale(15), fontWeight: '600' },
})