import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ExerciseCard = ({ exercise }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.name}>{exercise.name}</Text>
            <Text style={styles.reps}>Reps: {exercise.reps}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    reps: {
        fontSize: 16,
        color: '#555',
    },
});

export default ExerciseCard;