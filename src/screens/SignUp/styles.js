import { StyleSheet } from "react-native";
import { moderateVerticalScale, scale } from "react-native-size-matters";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";

export const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.white, justifyContent: 'space-between' },
    inputContainer: { marginTop: '15%', paddingHorizontal: '5%', },
    inputStyle: { marginBottom: moderateVerticalScale(25) },
    btnTitle: { color: colors.white, fontSize: scale(18), fontFamily: fonts.OpenSans.Light },
    btnStyle: {
        marginHorizontal: '5%', marginVertical: '20%', justifyContent: 'center',
        elevation: 10,
        shadowColor: colors.themeColor,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.4,
        shadowRadius: 6
    }
})