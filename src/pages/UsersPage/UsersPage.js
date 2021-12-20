import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { User } from '../../components/User/User';
import { getAllUsersStart } from '../../redux/users/usersReducer';

export const UsersPage = ({ navigation }) => {
    const { allUsers, loadingUsers } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            dispatch(getAllUsersStart());
        });

        return unsubscribe;
    }, [navigation]);

    return (
        <View>
            {loadingUsers ? (
                <ActivityIndicator size="large" color="#FAB15F" />
            ) : (
                <FlatList
                    data={allUsers}
                    renderItem={(user) => <User userInformation={user} />}
                    keyExtractor={(user) => user.userId}
                />
            )}
        </View>
    );
};
