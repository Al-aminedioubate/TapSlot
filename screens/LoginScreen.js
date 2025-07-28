import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, StyleSheet, Button, SafeAreaView, Alert, TextInput, TouchableOpacity } from "react-native";

const LoginScreen = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () =>{
        if(email.trim() || !password.trim()){
            Alert.alert("Champs requis", " Veuillez remplir tous les champs");
            return;
        }
    }

    //Logique de firebase ici a venir
    //Alert.alert("Connexion reussie", `Email: ${email}`);
    
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Connexion</Text>

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

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Accueil")}>
                <Text style={styles.btnText}>Se connecter</Text>
            </TouchableOpacity> 

            <View style={styles.footer}>
                <Text>Vous n'avez pas de compte ?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.link}>Créer un compte</Text>
                </TouchableOpacity>
            </View>    

        </SafeAreaView>
    );
 
};

export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: '#fff',
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
    footer:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 24,
    },
    link:{
        marginLeft: 6,
        color: '#4a90e2',
        fontWeight: '600',
    },
});