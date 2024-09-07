import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Statistics = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Statistics</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Statistics;