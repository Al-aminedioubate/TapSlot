import { useEffect } from "react";
import { View, Text, StyleSheet, Button, SafeAreaView, ActivityIndicator, Image } from "react-native";

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        const timer = setTimeout(() =>{
            //Simulation de l'utilisateur connecté ou non
            const isLoggedIn = false;        //true pour tester

            if(isLoggedIn){
                navigation.replace("Accueil"); 
            }else{
                navigation.replace("Login")
            }

        }, 2500);     //2.5 secondes

        return () => clearTimeout(timer);

    }, []);

    return( 
        <View style={styles.container}>
            <Image  source={require('../assets/logo.png')} // ton logo ici
            style={styles.logo}/>
            <Text style={styles.title}>TapSlot</Text>
            <ActivityIndicator size="large" color="#4a90e2" style={{ marginTop: 20 }}/>
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 140,
        height: 140,
        resizeMode: 'contain',
    },
    title:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#4a90e2',
        marginTop: 20,
    },
})