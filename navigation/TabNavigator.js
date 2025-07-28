import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AppointmentsScreen from '../screens/AppointmentsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import BookingScreen from '../screens/BookingScreen';

const Tab = createBottomTabNavigator();

const MyTab = () =>{
    return (
        <Tab.Navigator screenOptions={({route}) => ({ 
            tabBarIcon: ({color, size}) => {
                let iconName;

                if(route.name === 'Accueil'){
                    iconName = 'home-outline';

                }else if (route.name === 'Rendez-vous'){
                    iconName = 'calendar-outline';
                }else if (route.name === 'Profil'){
                    iconName = 'person-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />
            },

            //headerShown: false,
            tabBarActiveTintColor: '#4a90e2',
            tabBarInactiveTintColor: 'gray',
                
        })}>
            <Tab.Screen name="Accueil" component={HomeScreen} options={{title: 'Accueil'}}/>
            <Tab.Screen name="Rendez-vous" component={BookingScreen} options={{title: 'Rendez-vous'}}/>
            <Tab.Screen name="Profil" component={ProfileScreen} options={{title: 'Profil'}} />
        </Tab.Navigator>
    );
};

export default MyTab;