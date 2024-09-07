import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DailyGoals = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Today's Goals</Text>
            <Text style={styles.goalText}>10,000 Steps</Text>
            <Text style={styles.goalText}>500 Calories</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#e3e3e3',
        borderRadius: 10,
        marginVertical: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    goalText: {
        fontSize: 18,
        marginBottom: 5,
    },
});

export default DailyGoals;