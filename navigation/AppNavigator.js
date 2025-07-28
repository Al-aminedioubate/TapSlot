import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SplashScreen from "../screens/SplashScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookingScreen from '../screens/BookingScreen';
import AppointmentsScreen from '../screens/AppointmentsScreen';

import MyTab from './TabNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

//creation de la navigation entre les ecrans
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <GestureHandlerRootView>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Accueil" 
                    screenOptions = {{
                        headerStyle: {backgroundColor: '#4a90e2'},
                        headerTitleStyle:{
                            fontWeight: 'bold',
                            fontSize: 30,
                            fontStyle: 'normal',
                        },

                        headerTitleAlign: 'center',
                    }}
                >
                    <Stack.Screen name="Splash" component={SplashScreen} options={{title: "Welcome to the TapSlot"}}/>
                    <Stack.Screen name="Accueil" component={MyTab} options={{headerShown: false}}/>
                    <Stack.Screen name="Login" component={LoginScreen} options={{title:'Connexion'}} />
                    <Stack.Screen name="Register" component={RegisterScreen} options={{title:'Inscription'}}/>
                    <Stack.Screen name="Booking" component={BookingScreen} options={{title:'Reservez'}} />
                    <Stack.Screen name="Appointments" component={AppointmentsScreen} options={{title:'Rendez-vous'}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
        
    )
}

