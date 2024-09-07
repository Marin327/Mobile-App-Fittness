import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Achievements = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Achievements</Text>
            <Text style={styles.achievementText}>🏆 5 Workouts Completed</Text>
            <Text style={styles.achievementText}>🔥 1000 Calories Burned</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff3cd',
        borderRadius: 10,
        marginVertical: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    achievementText: {
        fontSize: 18,
        marginBottom: 5,
    },
});

export default Achievements;