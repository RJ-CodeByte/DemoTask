import { Text, StyleSheet, View, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { Component } from 'react'
import colors from '../../constants/colors'
import CustomTextInput from '../../components/CustomTextInput'
import { moderateVerticalScale, scale } from 'react-native-size-matters'
import { btnLogIn, btnSignUp, inputemail, inputfname, inputlname, inputpassword } from '../../constants/strings'
import Button from '../../components/Button'
import fonts from '../../constants/fonts'
import { styles } from './styles'

export default class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: ''
        }
    }


    render() {
        return (
            <View style={styles.container} >
                <View style={styles.inputContainer}>
                    <CustomTextInput inputStyle={styles.inputStyle}
                        label={inputfname}
                        setValue={this.state.fname}
                        onChangeText={fname => this.setState({ fname: fname })}
                    />
                    <CustomTextInput inputStyle={styles.inputStyle}
                        label={inputlname}
                        setValue={this.state.lname}
                        onChangeText={lname => this.setState({ lname: lname })}
                    />
                    <CustomTextInput inputStyle={styles.inputStyle}
                        label={inputemail}
                        setValue={this.state.email}
                        onChangeText={email => this.setState({ email: email })} />
                    <CustomTextInput
                        label={inputpassword}
                        setValue={this.state.password}
                        onChangeText={password => this.setState({ password: password })} />
                </View>
                <Button btnText={btnSignUp} btnTextStyle={styles.btnTitle} btnStyle={styles.btnStyle} />
            </View>
        )
    }
}

