import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

import { LoginPage } from './src/pages/LoginPage/LoginPage';
import { SignupPage } from './src/pages/SignupPage/SignupPage';
import { useFonts } from './src/hooks/useFonts';
import { Navigation } from './src/Navigation/Navigation';

export default function App() {
    const [IsReadyFonts, SetIsReadyFonts] = useState(false);
    const [autorized, setAuthorized] = useState(false); //'false' value is for develop
    const LoadFonts = async () => {
        await useFonts();
    };

    if (!IsReadyFonts) {
        return (
            <AppLoading
                startAsync={LoadFonts}
                onFinish={() => SetIsReadyFonts(true)}
                onError={() => {}}
            />
        );
    }

    if (autorized) {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="transparent" />
                <LoginPage />
                <SignupPage />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="transparent" />
            <Navigation />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F6F8',
        height: '100%',
    },
});
