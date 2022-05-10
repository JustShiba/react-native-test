import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

import { ProfilePage } from '../../pages/ProfilePage/ProfilePage';
import { PricePage } from '../../pages/PricePage/PricePage';
import { OrderPage } from '../../pages/OrderPage/OrderPage';
import { LoginPage } from '../../pages/LoginPage/LoginPage';
import { SignupPage } from '../../pages/SignupPage/SignupPage';
import { stackConfig, tabConfig } from './navigationConfig';
import { styles } from './navigationStyles';
import { ModalError } from '../ModalError/ModalError';
import { MainPage } from '../../pages/MainPage/MainPage';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const Navigation = ({ autorized }) => {
    return (
        <NavigationContainer>
            {autorized ? (
                <View style={styles.container}>
                    <Tab.Navigator
                        screenOptions={({ route }) => tabConfig(route)}
                        initialRouteName="Prices"
                    >
                        <Tab.Screen name="Prices" component={PricePage} />
                        <Tab.Screen name="Order" component={OrderPage} />
                        <Tab.Screen name="Profile" component={ProfilePage} />
                    </Tab.Navigator>
                </View>
            ) : (
                <View style={styles.container}>
                    <Stack.Navigator
                        screenOptions={() => stackConfig()}
                        initialRouteName="MainPage"
                    >
                        <Stack.Screen name="Main" component={MainPage} />
                        <Stack.Screen name="Login" component={LoginPage} />
                        <Stack.Screen name="Signup" component={SignupPage} />
                    </Stack.Navigator>
                </View>
            )}
            <ModalError />
        </NavigationContainer>
    );
};
