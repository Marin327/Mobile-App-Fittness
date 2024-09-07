import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const MealTracker = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meal Tracker</Text>
            <Text style={styles.mealText}>Breakfast: 350 kcal</Text>
            <Text style={styles.mealText}>Lunch: 600 kcal</Text>
            <Text style={styles.mealText}>Dinner: 500 kcal</Text>
            <Button title="Add Meal" onPress={() => { }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f4f4f4',
        borderRadius: 10,
        marginVertical: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    mealText: {
        fontSize: 18,
        marginBottom: 5,
    },
});

export default MealTracker;