import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

import { UserAuthProfile } from '../../pages/UserAuthProfile/UserAuthProfile';
import { UsersPage } from '../../pages/UsersPage/UsersPage';
import { Header } from '../Header/Header';
import { PostsPage } from '../../pages/PostsPage/PostsPage';
import { AddPostPage } from '../../pages/AddPostPage/AddPostPage';
import { LoginPage } from '../../pages/LoginPage/LoginPage';
import { SignupPage } from '../../pages/SignupPage/SignupPage';
import { stackConfig, tabConfig } from './navigationConfig';
import { styles } from './navigationStyles';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const Navigation = ({ autorized }) => {
    return (
        <NavigationContainer>
            {autorized ? (
                <View style={styles.container}>
                    <Header />
                    <Tab.Navigator screenOptions={({ route }) => tabConfig(route)}>
                        <Tab.Screen name="Posts" component={PostsPage} />
                        <Tab.Screen name="All users" component={UsersPage} />
                        <Tab.Screen name="Add post" component={AddPostPage} />
                        <Tab.Screen name="Profile" component={UserAuthProfile} />
                    </Tab.Navigator>
                </View>
            ) : (
                <View style={styles.container}>
                    <Stack.Navigator screenOptions={() => stackConfig()}>
                        <Stack.Screen name="Signup" component={SignupPage} />
                        <Stack.Screen name="Login" component={LoginPage} />
                    </Stack.Navigator>
                </View>
            )}
        </NavigationContainer>
    );
};
