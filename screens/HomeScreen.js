import { useNavigation } from "@react-navigation/native";
import React from "react";

import { View, Text, StyleSheet, Button, SafeAreaView, TouchableOpacity } from "react-native";

const HomeScreen = () =>{
    const navigation = useNavigation();
    const user ={
        nom: "Lamine Dioubate",
    };

    const services={
        service: "Coifffure",
        statut: "Confirmé",
        prestataire: "AMine barbershop",
    }

    const currantDate = new Date();
    const formatTime = currantDate.toDateString(undefined);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Bonjour {user.nom}👋</Text>
            <Text style={styles.subtitle}>Bienvenue sur TapSlot</Text>
           
            <View>
                <Text style={styles.cardTitle}>Prochain rendez-vous</Text>
                <Text >Coiffure</Text>
                <Text >Jours: {formatTime} </Text>
                <Text >Statut : {services.prestataire}</Text>
                <Text >Statut : {services.statut}</Text>

                <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Appointments')}>
                    <Text style={styles.linkText}>Voir tous les rendez-vous</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.mainButton} onPress={() => navigation.navigate('Booking')}>
                <Text style={styles.mainButtonText}>+ Prendre un rendez-vous</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    title:{
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    subtitle:{
        fontSize: 16,
        color: '#555',
        marginBotton: 24,
    },
    card:{
        padding: 16,
        backgroundColor: '#f2f2f2',
        borderRadius: 12,
        marginBottom: 24,
    },
    cardTitle: {
        fontWeight: 'bold',
        marginBottom: 8,
    },
    linkButton: {
        marginTop: 12,
    },
    linkText: {
        color: '#4a90e2',
        fontWeight: 'bold',
    },
    mainButton: {
        backgroundColor: '#4a90e2',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
    },
    mainButtonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});