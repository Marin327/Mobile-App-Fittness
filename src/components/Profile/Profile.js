import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Profile = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
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

export default Profile;