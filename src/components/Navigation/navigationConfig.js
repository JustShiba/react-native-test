import React from 'react';

import { PostsIconActive } from '../../../assets/componentIcons/posts/PostsIconActive';
import { PostsIconNotActive } from '../../../assets/componentIcons/posts/PostsIconNotActive';
import { AddPostIconActive } from '../../../assets/componentIcons/addPost/AddPostIconActive';
import { AddPostIconNotActive } from '../../../assets/componentIcons/addPost/AddPostIconNotActive';
import { UsersIconActive } from '../../../assets/componentIcons/users/UsersIconActive';
import { UsersIconNotActive } from '../../../assets/componentIcons/users/UsersIconNotActive';
import { ProfileIconActive } from '../../../assets/componentIcons/profile/ProfileIconActive';
import { ProfileIconNotActive } from '../../../assets/componentIcons/profile/ProfileIconNotActive';
import { styles } from './navigationStyles';

export const tabConfig = (route) => ({
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
});

export const stackConfig = () => ({
    header: () => null,
});
