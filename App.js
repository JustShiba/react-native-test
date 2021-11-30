import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

import { AuthUserProfile } from './src/pages/AuthUserProfile/AuthUserProfile';
import { LoginPage } from './src/pages/LoginPage/LoginPage';
import { SignupPage } from './src/pages/SignupPage/SignupPage';
import { useFonts } from './src/hooks/useFonts';

export default function App() {
    const [IsReadyFonts, SetIsReadyFonts] = useState(false);

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

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            {/* <LoginPage /> */}
            {/* <SignupPage /> */}
            <AuthUserProfile />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5E5E5',
        height: '100%',
    },
});
