import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Notifications = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Notifications</Text>
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

export default Notifications;