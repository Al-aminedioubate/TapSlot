import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";

export default function ProviderDetailsScreen({}){
    return (
        <SafeAreaView style={styles.container}>
            <Text>Details</Text>
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