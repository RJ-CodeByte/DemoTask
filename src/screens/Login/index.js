import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import React, { Component } from 'react';
import colors from '../../constants/colors';
import CustomTextInput from '../../components/CustomTextInput';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import {
  And,
  btnLogIn,
  btnSignUp,
  byContinueUAgree,
  forgetpassword,
  inputemail,
  inputpassword,
  PrivacyPolicy,
  TAndC,
} from '../../constants/strings';
import Button from '../../components/Button';
import { styles } from './styles';
import fonts from '../../constants/fonts';
import navigationStrings from '../../constants/navigationStrings';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <CustomTextInput
            inputStyle={styles.inputStyle}
            label={inputemail}
            setValue={this.state.email}
            onChangeText={email => this.setState({ email: email })}
          />
          <CustomTextInput
            label={inputpassword}
            setValue={this.state.password}
            onChangeText={password => this.setState({ password: password })}
          />
          <TouchableOpacity style={{ paddingVertical: moderateScale(10) }}>
            <Text style={{ textAlign: 'right', fontFamily: fonts.OpenSans.SemiBold, color: colors.grey, fontWeight: 'normal' }}>{forgetpassword}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnTextContainer}>
          <Text style={[styles.textStyle, { width: "95%", }]}>{byContinueUAgree}
            <Text style={[styles.textStyle, { color: colors.themeColor }]}>{' '}{TAndC}{' '}</Text>{And}{' '}
            <Text style={[styles.textStyle, { color: colors.themeColor }]}>{PrivacyPolicy}</Text>
          </Text>
          <Button
            onPress={() => this.props.navigation.navigate(navigationStrings.HomeStack, { screen: navigationStrings.HOME })}
            btnText={btnLogIn}
            btnTextStyle={styles.btnTitle}
            btnStyle={styles.btnStyle}
          />
        </View>
      </View>
    );
  }
}
