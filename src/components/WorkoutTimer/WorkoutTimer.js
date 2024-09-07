import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const WorkoutTimer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else if (!isRunning) {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    return (
        <View style={styles.container}>
            <Text style={styles.timerText}>{time}s</Text>
            <Button title={isRunning ? "Pause" : "Start"} onPress={() => setIsRunning(!isRunning)} />
            <Button title="Reset" onPress={() => setTime(0)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
    timerText: {
        fontSize: 40,
        fontWeight: 'bold',
        marginVertical: 20,
    },
});

export default WorkoutTimer;