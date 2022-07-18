import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from '../navigations/AuthStack/AuthStack';
import * as React from 'react';
import HomeStack from './HomeStack';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import navigationStrings from '../constants/navigationStrings';

const Stack = createStackNavigator();
export default function Routes() {
    // const { token } = useSelector(state => state.userReducer)
    // const [token, setToken] = React.useState(null);


    // React.useEffect(() => {
    //     AsyncStorage.getItem("myToken").then(tkn => {
    //         console.log('tkn', tkn)
    //         setToken(tkn)
    //     }).catch(err => console.log(err))

    // }, [])

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={navigationStrings.AuthStack} component={AuthStack} />
                <Stack.Screen name={navigationStrings.HomeStack} component={HomeStack} />
            </Stack.Navigator>

            {/* {true ? <AuthStack /> : <HomeStack />} */}
        </NavigationContainer>
    );
}