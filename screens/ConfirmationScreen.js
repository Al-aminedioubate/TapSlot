import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";

export default function ConfirmationScreen({}){
    return (
        <SafeAreaView style={styles.container}>
            <Text>Confirmation Here</Text>
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