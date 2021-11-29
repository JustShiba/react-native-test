import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LoginPage } from './src/LoginPage/LoginPage';

export default function App() {
    return (
        <View style={styles.container}>
            <LoginPage />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5E5E5',
        height: '100%',
    },
});
