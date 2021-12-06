import React from 'react';
import { ScrollView } from 'react-native';
import { User } from '../../components/User/User';

export const UsersPage = () => {
    return (
        <ScrollView>
            <User />
            <User />
            <User />
        </ScrollView>
    );
};
