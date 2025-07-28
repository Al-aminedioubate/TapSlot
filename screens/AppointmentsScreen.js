import { View, Text, StyleSheet, Button, SafeAreaView, TouchableOpacity } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const  AppointmentsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>tous les rendez-vous reserver seront afficher ici</Text>
        </SafeAreaView>
    )
}

export default AppointmentsScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
});