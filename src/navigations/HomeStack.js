import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Add, GetStarted, Home, Profile, RaffleDetails, Search } from '../screens';
import navigationStrings from '../constants/navigationStrings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View } from 'react-native';
import colors from '../constants/colors';
import imageStrings from '../constants/imageStrings';
import { TouchableOpacity } from 'react-native-gesture-handler';




const Stack = createBottomTabNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: { height: '9%' }
        }} >
            <Stack.Screen name={navigationStrings.HOME}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return <Image source={{ uri: imageStrings.home }} style={[{ width: 20, height: 20, }, focused && { tintColor: colors.themeColor }]} />
                    },
                }} component={Home} />
            <Stack.Screen options={{
                tabBarIcon: ({ focused }) => {
                    return <Image source={{ uri: imageStrings.search }} style={[{ width: 20, height: 20, }, focused && { tintColor: colors.themeColor }]} />
                },
            }} name={navigationStrings.SEARCH} component={Search} />

            <Stack.Screen options={{
                tabBarIcon: ({ focused }) => {
                    return <TouchableOpacity><Image source={{ uri: imageStrings.fabIcon }} style={[{ width: 90, height: 90, marginBottom: '20%' }]} /></TouchableOpacity>
                },
            }} name={navigationStrings.PLUS} component={Add}
            />
            <Stack.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Image source={{ uri: imageStrings.message }} style={[{ width: 20, height: 20, }, focused && { tintColor: colors.themeColor }]} />
                    },
                }} name={navigationStrings.RAFFLEDETAILS} component={RaffleDetails} />
            <Stack.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Image source={{ uri: focused ? imageStrings.activeTicket : imageStrings.ticket }} style={[{ width: 20, height: 20, }]} />
                    },
                }}
                name={navigationStrings.PROFILE} component={Profile} />
        </Stack.Navigator>
    );
}