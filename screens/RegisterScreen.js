import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, StyleSheet, Button, SafeAreaView, Alert, TextInput, TouchableOpacity } from "react-native";

const  RegisterScreen = () =>{

    const navigation = useNavigation();

    const [nomComplet, setNomComplet] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        if(!nomComplet || !email || !password || !confirmPassword){
            Alert.alert("Erreur", "Veuillez remplir tout les champs");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(emailRegex.test(email)){
            Alert.alert('Erreur, Email est invalide');
            return;
        }

        if (password.length < 6 && confirmPassword.length < 6) {
            Alert.alert('Erreur', 'Mot de passe trop court (min. 6 caractères).');
            return;
        }

        Alert.alert('Votre inscription a ete effectuer avec succes!');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Inscription</Text>

            <TextInput 
                placeholder="Nom Complet"
                value={nomComplet}
                onChange={setNomComplet}
                keyboardType="Text"
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
                placeholder="Confirmer mot de passe"
                value={password}
                onChange={setConfirmPassword}
                secureTextEntry
                style={styles.input}
            /> 

            <View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}> 
                    <Text style={styles.btnText} >S'inscrire</Text>
                </TouchableOpacity>
            </View>
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
})