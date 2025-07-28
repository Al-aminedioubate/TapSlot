import { View, Text, StyleSheet, Button, SafeAreaView, TouchableOpacity } from "react-native";

import { generateTimeSlots } from "../helpers/timeSlots";
import { FlatList } from "react-native-gesture-handler";

const  AppointmentsScreen = () => {
    const timeSlots = generateTimeSlots();    //defaut 8H-16H30

    const renderItem = ({item}) =>(
        <TouchableOpacity style={styles.slot}>
            <Text style={styles.slotText}>{item.start} - {item.end}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Créneaux disponibles</Text>
            <FlatList data={timeSlots} 
                keyExtractor={(item, index) => index.toString()} 
                renderItem={renderItem} contentContainerStyle={styles.list}
            />
        </SafeAreaView>
    );
}

export default AppointmentsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
        color: '#4a90e2',
    },
    list:{
        padding: 30,
    },
    slot:{
        backgroundColor: '#e6f0ff',
        padding: 16,
        borderRadius: 10,
        marginVertical: 6,
    },
    slotText: {
        fontSize: 16,
        color: '#333',
    },
});