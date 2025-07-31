import React, { useState} from "react";
import { View, Text, StyleSheet, Button, SafeAreaView, Alert, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";

import {auth} from '../firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const  RegisterScreen = ({navigation}) =>{

    //const navigation = useNavigation();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async () => {
        if(!fullName || !email || !password || !confirmPassword){
            Alert.alert("Oopps! Erreur", "Tous les champs sont requis.");
            return;
        }

        if(password !== confirmPassword){
           return Alert.alert("Erreur", "Les mots de passe ne correspondent pas.");
        }

        //Gestion d'erreurs
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            //Option permetant d'ajouter le nom complet de l'utilisateur dans la BD firebase
            await updateProfile(userCredential.user, {
                displayName: fullName,
            });

            //Apres le succes de l'inscription on redirige le client a la page de connexion pour se connecter.
            Alert.alert("Succes", "Inscription reussie !");
            navigation.navigate("Login");

        }catch (error){
            Alert.alert("Erreur Firebase", error.message);
            console.log("erreur", error.message);
        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <TextInput 
                placeholder="Nom Complet"
                value={fullName}
                onChange={setFullName}
                style={styles.input}
            />

            <TextInput 
                placeholder="Email"
                value={email}
                onChange={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
            />

            <TextInput 
                placeholder="Mot de passe"
                value={password}
                onChange={setPassword}
                secureTextEntry
                style={styles.input}
            /> 

            <TextInput 
                placeholder="Confirmer le mot de passe"
                value={confirmPassword}
                onChange={setConfirmPassword}
                secureTextEntry
                style={styles.input}
            /> 

            <TouchableOpacity style={styles.button} onPress={handleRegister} >
                <Text style={styles.btnText}>S'inscrire</Text>
            </TouchableOpacity>

            <Text style={styles.loginText} onPress={() => navigation.navigate("Login")}>
                Déjà un compte ? Connecte-toi
            </Text>
        </SafeAreaView>
    )
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
        paddingTop: 50,
    },
    title:{
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 32,
        textAlign: 'center',
    },
    input:{
       height: 48,
       borderWidth: 1,
       borderColor: '#ccc',
       borderRadius: 8,
       paddingHorizontal: 16,
       marginBottom: 16, 
    },
    button:{
        backgroundColor: '#4a90e2',
        paddingVertical: 14,
        borderRadius: 8,
        marginTop: 8,
    },
    btnText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600',
    },
    loginText: {
        textAlign: "center",
        marginTop: 15,
        color: '#4a90e2',
    },
})