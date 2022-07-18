import { StyleSheet } from 'react-native';
import {
    moderateScale,
    moderateVerticalScale,
    scale,
} from 'react-native-size-matters';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        // alignItems: "center",
    },
    topContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '5%',
        flexDirection: 'row',
    },
    searchBar: {
        backgroundColor: '#F5F5F5',
        width: '85%',
        elevation: 0,
        padding: 0,
    },
    listHeaderStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '2%',
        paddingVertical: '3%',
        marginTop: '2%',
    },
    listTitleStyle: {
        fontFamily: fonts.OpenSans.ExtraBold,
        color: colors.black,
        fontSize: scale(16),
    },
    listmoreText: { fontFamily: fonts.OpenSans.ExtraBold, color: colors.greyLow },
    rightArrow: {
        width: moderateScale(10),
        height: moderateScale(10),
        marginLeft: moderateVerticalScale(5),
    },
    listImageStyles: {
        paddingVertical: '3%',
        elevation: 5,
        shadowColor: colors.black,
        shadowOpacity: 0.8,
        shadowRadius: 11,
        shadowOffset: { width: 0, height: 0 },
    },
    listCatTitle: {
        fontSize: scale(12),
        fontFamily: fonts.OpenSans.Bold,
        textAlign: 'center',
        color: colors.greyLow,
    },
});
