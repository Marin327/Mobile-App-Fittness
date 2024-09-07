import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ExerciseCard from '../components/ExerciseCard';

const WorkoutListScreen = () => {
    const workouts = [
        { id: '1', title: 'Push Ups', duration: 15 },
        { id: '2', title: 'Squats', duration: 20 },
        { id: '3', title: 'Lunges', duration: 25 },
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={workouts}
                renderItem={({ item }) => (
                    <ExerciseCard title={item.title} duration={item.duration} />
                )}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
    },
});

export default WorkoutListScreen;