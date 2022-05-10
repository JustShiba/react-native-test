import React from 'react';

import { PostsIconActive } from '../../../assets/componentIcons/posts/PostsIconActive';
import { PostsIconNotActive } from '../../../assets/componentIcons/posts/PostsIconNotActive';
import { AddPostIconActive } from '../../../assets/componentIcons/addPost/AddPostIconActive';
import { AddPostIconNotActive } from '../../../assets/componentIcons/addPost/AddPostIconNotActive';
import { UsersIconActive } from '../../../assets/componentIcons/users/UsersIconActive';
import { UsersIconNotActive } from '../../../assets/componentIcons/users/UsersIconNotActive';
import { styles } from './navigationStyles';

export const tabConfig = (route) => ({
    tabBarIcon: ({ focused }) => {
        let iconName;

        if (route.name === 'Prices') {
            iconName = focused ? <PostsIconActive /> : <PostsIconNotActive />;
        } else if (route.name === 'Profile') {
            iconName = focused ? <UsersIconActive /> : <UsersIconNotActive />;
        } else if (route.name === 'Order') {
            iconName = focused ? <AddPostIconActive /> : <AddPostIconNotActive />;
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
