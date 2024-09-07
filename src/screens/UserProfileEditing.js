import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const EditProfileScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const saveProfile = () => {
        // Логика за запазване на профила
        console.log('Profile Saved', { name, email });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Edit Profile</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <Button title="Save Profile" onPress={saveProfile} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
});

export default EditProfileScreen;