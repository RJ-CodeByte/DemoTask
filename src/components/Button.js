import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, scale } from 'react-native-size-matters'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import colors from '../constants/colors';


const Button = ({
    btnStyle,
    btnText,
    img,
    iconStyle,
    onPress = () => { },
    btnTextStyle = {},
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={onPress}
            style={{ ...styles.btnStyle, ...btnStyle }}>
            {!!img &&
                <FontAwesome5 size={25} style={{ ...iconStyle }} color='white' name={img} />}
            <Text style={{ ...styles.btnTextStyle, ...btnTextStyle }}>{btnText}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btnStyle: {
        height: moderateScale(48),
        backgroundColor: colors.themeColor,
        borderRadius: moderateScale(30),
        alignItems: "center",
        // justifyContent: 'center'
    },
    btnTextStyle: {
        fontSize: scale(12),
        color: 'white',
        fontWeight: 'bold',
    }
})