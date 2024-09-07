import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const workoutData = [
    { id: '1', name: 'Upper Body Strength', date: '2023-09-01' },
    { id: '2', name: 'Cardio', date: '2023-09-02' },
    { id: '3', name: 'Lower Body Strength', date: '2023-09-03' },
];

const WorkoutHistoryScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Workout History</Text>
            <FlatList
                data={workoutData}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.name}</Text>
                        <Text>{item.date}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
    },
    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default WorkoutHistoryScreen;