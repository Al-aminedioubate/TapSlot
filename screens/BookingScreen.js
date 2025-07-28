import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function BookingScreen(){
    return (
        <SafeAreaView style={styles.container}>
            <Text>Prendre un rendez-vous ici</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    },
})