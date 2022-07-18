import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import navigationStrings from '../../constants/navigationStrings';
import { Login, SignUp } from '../../screens';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import { moderateVerticalScale, scale } from 'react-native-size-matters';
import { BackHandler } from 'react-native';
import { styles } from './styles';

const Tab = createMaterialTopTabNavigator();

export default function CreateAccountTab() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: styles.tabBarStyle,
            tabBarLabelStyle: styles.tabBarLabelStyle,
            tabBarActiveTintColor: colors.themeColor,
            tabBarInactiveTintColor: colors.black,
            tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
        }}
            backBehavior='none'
            initialRouteName={navigationStrings.LOGIN}
        >
            <Tab.Screen name={navigationStrings.SIGNUP} component={SignUp} />
            <Tab.Screen name={navigationStrings.LOGIN} component={Login} />
        </Tab.Navigator>
    );
}
