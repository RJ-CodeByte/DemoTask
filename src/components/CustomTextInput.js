import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import colors from '../constants/colors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const CustomTextInput = ({
    onChangeText = () => { },
    inputStyle = {},
    showIcon,
    onClearText = () => { },
    onEndEditing = () => { },
    label,
    setValue,
    error,
    onPressRight,
    ...props
}) => {
    return (
        <View style={{ ...inputStyle }}>
            <View style={styles.inputStyle}>
                <View style={{ margin: 10 }}>
                    <View style={styles.flexView}>
                        <View style={{ flex: 1 }}>
                            {!!setValue && <Text style={styles.labelStyle}>{label}</Text>}
                            <TextInput
                                style={styles.inlineStyle}
                                placeholder={label}
                                onEndEditing={onEndEditing}
                                onChangeText={onChangeText}
                                value={setValue}
                                {...props}
                            />
                        </View>
                        {!!setValue && showIcon &&
                            <TouchableOpacity onPress={onPressRight} style={{ marginRight: moderateScale(10) }} activeOpacity={0.8} >
                                {/* <Image source={rightIcon} style={{ tintColor: colors.blackOpacity03 }} /> */}
                                {/* <FontAwesome5 name={rightIcon} size={16} style={{ color: colors.blackOpacity03 }} solid={true} /> */}
                                <Text style={{ fontSize: scale(10) }}>SHOW</Text>
                                {/* <FontAwesome5 name={"times-circle"} size={16} style={{ color: colors.blackOpacity03 }} solid={true} /> */}
                            </TouchableOpacity>
                        }
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    inputStyle: {
        backgroundColor: colors.lightgrey,
        borderRadius: moderateScale(5),
        justifyContent: 'center',

    },
    flexView: {
        flexDirection: 'row',
        // justifyContent: 'space-between',        
        alignItems: 'center',
    },
    inlineStyle: {
        paddingVertical: 0,
        fontSize: scale(16),
        color: colors.blackOpacity80,
        // flex: 1,        
        // backgroundColor: 'yellow',
    },
    labelStyle: {
        fontSize: scale(10),
        // position: 'absolute',
        // paddingVertical: moderateVerticalScale(6),
        // paddingHorizontal: moderateScale(20),
        color: colors.blackOpacity50
    }
})
export default CustomTextInput