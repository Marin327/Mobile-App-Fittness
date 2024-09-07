import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProgressTracker = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Progress Tracker</Text>
            <Text style={styles.progressText}>Workouts completed: 12</Text>
            <Text style={styles.progressText}>Calories burned: 3000</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        marginVertical: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    progressText: {
        fontSize: 18,
        marginBottom: 5,
    },
});

export default ProgressTracker;