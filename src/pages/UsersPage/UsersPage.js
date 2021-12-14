import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { User } from '../../components/User/User';
import { getAllUsersStart } from '../../redux/users/usersReducer';

export const UsersPage = () => {
    const { allUsers, loadingUsers } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsersStart());
    }, [dispatch]);

    return (
        <View>
            {loadingUsers ? (
                <Text>loading</Text>
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
