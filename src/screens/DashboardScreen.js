import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DashboardScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome to your Dashboard</Text>
            <Text style={styles.stat}>Your current progress: 70%</Text>
            <Text style={styles.stat}>Daily Goal: 10,000 steps</Text>
            <Text style={styles.stat}>Last Workout: Upper Body Strength</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    stat: {
        fontSize: 18,
        marginBottom: 10,
    },
});

export default DashboardScreen;