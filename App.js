import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

import { Header } from './src/components/Header/Header';
import { Menu } from './src/components/Menu/Menu';
import { LoginPage } from './src/pages/LoginPage/LoginPage';
import { SignupPage } from './src/pages/SignupPage/SignupPage';
import { useFonts } from './src/hooks/useFonts';
import { UserAuthProfile } from './src/pages/UserAuthProfile/UserAuthProfile';

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
            <Header />
            <UserAuthProfile />
            <Menu />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5E5E5',
        height: '100%',
    },
});
