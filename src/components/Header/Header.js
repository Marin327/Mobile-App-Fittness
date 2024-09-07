import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fitness App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1E90FF',
        padding: 15,
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
});

export default Header;