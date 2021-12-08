import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Platform } from 'react-native';

import { UserAuthProfile } from '../../pages/UserAuthProfile/UserAuthProfile';
import { UsersPage } from '../../pages/UsersPage/UsersPage';
import { Header } from '../Header/Header';
import { PostsPage } from '../../pages/PostsPage/PostsPage';
import { AddPostPage } from '../../pages/AddPostPage/AddPostPage';
import { PostsIconActive } from '../../../assets/componentIcons/posts/PostsIconActive';
import { PostsIconNotActive } from '../../../assets/componentIcons/posts/PostsIconNotActive';
import { AddPostIconActive } from '../../../assets/componentIcons/addPost/AddPostIconActive';
import { AddPostIconNotActive } from '../../../assets/componentIcons/addPost/AddPostIconNotActive';
import { UsersIconActive } from '../../../assets/componentIcons/users/UsersIconActive';
import { UsersIconNotActive } from '../../../assets/componentIcons/users/UsersIconNotActive';
import { ProfileIconActive } from '../../../assets/componentIcons/profile/ProfileIconActive';
import { ProfileIconNotActive } from '../../../assets/componentIcons/profile/ProfileIconNotActive';

const Tab = createBottomTabNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Header />
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        let iconName;

                        if (route.name === 'Profile') {
                            iconName = focused ? <ProfileIconActive /> : <ProfileIconNotActive />;
                        } else if (route.name === 'Add post') {
                            iconName = focused ? <AddPostIconActive /> : <AddPostIconNotActive />;
                        } else if (route.name === 'All users') {
                            iconName = focused ? <UsersIconActive /> : <UsersIconNotActive />;
                        } else if (route.name === 'Posts') {
                            iconName = focused ? <PostsIconActive /> : <PostsIconNotActive />;
                        }

                        return iconName;
                    },
                    tabBarShowLabel: false,
                    tabBarStyle: styles.wrapper,
                    header: () => null,
                })}
            >
                <Tab.Screen name="Posts" component={PostsPage} />
                <Tab.Screen name="All users" component={UsersPage} />
                <Tab.Screen name="Add post" component={AddPostPage} />
                <Tab.Screen name="Profile" component={UserAuthProfile} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: Platform.OS === 'ios' ? 0 : 10,
        paddingBottom: Platform.OS === 'ios' ? 20 : 10,
        paddingHorizontal: 30,
    },
});
