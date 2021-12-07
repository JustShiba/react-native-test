import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

import { LoginPage } from '../../pages/LoginPage/LoginPage';
import { SignupPage } from '../../pages/SignupPage/SignupPage';
import { useFonts } from '../../hooks/useFonts';
import { Navigation } from '../../components/Navigation/Navigation';
import { store } from '../../redux/rootReducer/rootReducer'

export const Index = () => {
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
                onError={() => { }}
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