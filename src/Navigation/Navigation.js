import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { UserAuthProfile } from '../pages/UserAuthProfile/UserAuthProfile';
import { UsersPage } from '../pages/UsersPage/UsersPage';
import { Header } from '../components/Header/Header';
import { Menu } from '../components/Menu/Menu';
import { PostsPage } from '../pages/PostsPage/PostsPage';
import { AddPostPage } from '../pages/AddPostPage/AddPostPage';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Header />
            <Stack.Navigator screenOptions={options}>
                <Stack.Screen name="Profile" component={UserAuthProfile} />
                <Stack.Screen name="Posts" component={PostsPage} />
                <Stack.Screen name="Add post" component={AddPostPage} />
                <Stack.Screen name="All users" component={UsersPage} />
            </Stack.Navigator>
            <Menu />
        </NavigationContainer>
    );
};

const options = () => ({
    headerStyle: {
        backgroundColor: '#F5F6F8',
    },
    headerTintColor: 'black',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
});
