import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Профил на потребителя</Text>
            <Text style={styles.text}>Име: Марин Маринов</Text>
            <Text style={styles.text}>Телефон: 0897082919</Text>
            <Button
                title="Редактирайте профила"
                onPress={() => alert('Редактиране на профила')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
});

export default ProfileScreen;