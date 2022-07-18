import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: "5%",
        backgroundColor: '#FFFFFF',
        justifyContent: "center",
    }, innerContainer: {
        marginVertical: '30%',
    }, socialBtnTitle: { color: colors.white, fontSize: scale(16), textAlign: 'center', fontFamily: fonts.OpenSans.Bold },
    socialBtn: {
        flexDirection: 'row', alignItems: 'center',
    },
    socialIcon: { flex: 0.5, paddingLeft: '10%' },
    btnTitle: { color: colors.themeColor, fontSize: scale(18), fontFamily: fonts.OpenSans.Light },
    btnStyle: { width: '45%', backgroundColor: colors.white, borderWidth: 1, borderColor: colors.themeColor, justifyContent: 'center' }
})