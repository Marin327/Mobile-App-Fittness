import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>© 2024 Fitness App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1E90FF',
        padding: 10,
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
});

export default Footer;