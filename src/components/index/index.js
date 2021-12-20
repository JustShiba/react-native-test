import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useDispatch, useSelector } from 'react-redux';

import { useFonts } from '../../hooks/useFonts';
import { Navigation } from '../../components/Navigation/Navigation';
import { checkLoginStart } from '../../redux/authorization/authorizationReducer';

export const Index = () => {
    const [IsReadyFonts, SetIsReadyFonts] = useState(false);
    const dispatch = useDispatch();
    const { isAuthorized } = useSelector((state) => state.authorization);

    useEffect(() => {
        dispatch(checkLoginStart());
    }, []);

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
            <Navigation autorized={isAuthorized} />
        </View>
    );
};
