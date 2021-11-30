import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LoginPage } from './src/LoginPage/LoginPage';
import { SignupPage } from './src/SignupPage/SignupPage';

export default function App() {
    return (
        <View style={styles.container}>
            <LoginPage />
            {/* <SignupPage /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5E5E5',
        height: '100%',
    },
});
