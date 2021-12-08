import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AppLoading from 'expo-app-loading';

import { LoginPage } from '../../pages/LoginPage/LoginPage';
import { SignupPage } from '../../pages/SignupPage/SignupPage';
import { useFonts } from '../../hooks/useFonts';
import { Navigation } from '../../components/Navigation/Navigation';

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
                onError={() => {}}
            />
        );
    }

    return (
        <View>
            <Navigation autorized={autorized} />
        </View>
    );
};
