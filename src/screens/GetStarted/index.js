import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import { btnLogIn, btnSignUp, oruseemail, signinapple, signinfb, } from '../../constants/strings'
import fonts from '../../constants/fonts';
import colors from '../../constants/colors';
import Button from '../../components/Button';
import { styles } from './styles';
import navigationStrings from '../../constants/navigationStrings';

export default class GetStarted extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <Image source={{ uri: 'raf_logo' }} resizeMode='contain' style={{ height: 200, width: 200, alignSelf: 'center' }} />
                </View>
                <Button btnText={signinapple}
                    btnTextStyle={styles.socialBtnTitle}
                    btnStyle={{ ...styles.socialBtn, marginVertical: '10%', backgroundColor: colors.black }} img={'apple'}
                    iconStyle={styles.socialIcon}
                />
                <Button btnText={signinfb}
                    btnTextStyle={styles.socialBtnTitle}
                    btnStyle={{ ...styles.socialBtn, backgroundColor: colors.blue }} img={'facebook'}
                    iconStyle={styles.socialIcon}
                />
                <Text style={{ fontFamily: fonts.OpenSans.SemiBold, fontSize: scale(12), textAlign: "center", marginVertical: '10%' }}>{oruseemail}</Text>
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <Button btnText={btnSignUp} btnTextStyle={styles.btnTitle} btnStyle={styles.btnStyle} onPress={() => this.props.navigation.navigate(navigationStrings.createAccount, { screen: navigationStrings.SIGNUP })} />
                    <Button btnText={btnLogIn} btnTextStyle={styles.btnTitle} btnStyle={styles.btnStyle} onPress={() => this.props.navigation.navigate(navigationStrings.createAccount, { screen: navigationStrings.LOGIN })} />
                </View>
            </View >
        )
    }
}

