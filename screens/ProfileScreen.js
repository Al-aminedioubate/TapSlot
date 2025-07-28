import { View, Text, StyleSheet, Button, SafeAreaView, TouchableOpacity, Alert, Image } from "react-native";

const ProfileScreen = ({navigation}) => {
    const user ={
        nom: "Lamine Dioubate",
        email: "lamine49@gmail.com",
        photo: require('../assets/profile.jpg'),
    };
    
    const handleLogout = () =>{
        Alert.alert("Deconnexion", "Voulez-vous vous deconnecter ?", [
            {text: "Annuler"},
            {
                text: "Oui",
                onPress: () =>{
                    navigation.replace("Login");
                },
            },
        ]);
    };

    const handleEditProfile = () =>{
        Alert.alert("Fonction a venir", "Modification de profil en cours de developpement !");
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Mon Profil</Text>

            {/*IMAGE DE PROFIL */}
            <View style={styles.avatarContainer}>
                <Image source={user.photo} style={styles.avatar} />
            </View>

            <View style={styles.infoBox}>
                <Text style={styles.label}>Nom :</Text>
                <Text style={styles.value}>{user.nom}</Text>

                <Text style={styles.label}>Email :</Text>
                <Text style={styles.value}>{user.email}</Text>
            </View>
           
            <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
                <Text style={styles.buttonText}>Modifier mon profil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.buttonText}>Déconnexion</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4a90e2',
        marginBottom: 30,
        textAlign: 'center',
    },
    infoBox: {
        marginBottom: 40,
        padding: 20,
        backgroundColor: '#f0f6ff',
        borderRadius: 10,
    },
    label: {
        fontSize: 16,
        color: '#333',
        fontWeight: '600',
        marginTop: 10,
    },
    value: {
        fontSize: 16,
        color: '#666',
    },
    editButton: {
        backgroundColor: '#4a90e2',
        padding: 14,
        borderRadius: 8,
        marginBottom: 15,
    },
    logoutButton: {
        backgroundColor: '#d9534f',
        padding: 14,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600',
    },
    avatarContainer: {
        marginBottom: 20,
    },
      avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: '#4a90e2',
    },
});