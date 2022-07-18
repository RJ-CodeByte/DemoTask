import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GetStarted } from '../../screens';
import navigationStrings from '../../constants/navigationStrings';
import CreateAccountTab from '../CreateAccountTab/CreateAccountTab';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image, Platform } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import { styles } from './styles';

const Stack = createStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={navigationStrings.GetStarted} options={{ headerShown: false }} component={GetStarted} />
            <Stack.Screen name={navigationStrings.createAccount}
                options={{
                    headerStyle: styles.headerStyle,
                    headerTitleAlign: 'center',
                    headerTitleStyle: styles.headerTitleStyle,
                    headerBackImage: () => <Ionicons name='arrow-back-outline' color={colors.black} size={30}
                        style={Platform.OS === 'ios' && { marginLeft: '10%' }} />,
                    headerLeftLabelVisible: false
                }} component={CreateAccountTab} />
        </Stack.Navigator>
    );
}