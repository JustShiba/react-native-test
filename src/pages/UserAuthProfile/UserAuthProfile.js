import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Post } from '../../components/Post/Post';
import { UserCard } from '../../components/UserCard/UserCard';
import { USER__ID } from '../../redux/constances/constances';
import { getUserStart } from '../../redux/users/usersReducer';
import { localStore } from '../../secureStore/secureStore';

export const UserAuthProfile = ({ route, navigation }) => {
    const userIdProp = route.params?.userIdProp;
    const { loadingUsers } = useSelector((state) => state.users);
    const { email, nickname, phone, posts } = useSelector((state) => state.users.currentUserInformation);
    const [needRefresh, setNeedRefresh] = useState(false);
    const dispatch = useDispatch();

    useEffect(async () => {
        const userId = userIdProp || (await localStore('get', USER__ID));
        dispatch(getUserStart(userId));
        setNeedRefresh(false);
    }, [needRefresh]);

    useEffect(async () => {
        const userId = await localStore('get', USER__ID);
        const unsubscribe = navigation.addListener('tabPress', (e) => {
            dispatch(getUserStart(userId));
        });
        return unsubscribe;
    }, [navigation]);

    useEffect(async () => {
        const userId = userIdProp || (await localStore('get', USER__ID));
        const unsubscribe = navigation.addListener('focus', () => {
            dispatch(getUserStart(userId));
        });
        return unsubscribe;
    }, [dispatch, userIdProp, navigation]);

    return (
        <View>
            {loadingUsers ? (
                <ActivityIndicator size="large" color="#FAB15F" />
            ) : (
                <View style={styles.box}>
                    <UserCard nickname={nickname} email={email} phone={phone} />
                    <FlatList
                        style={styles.list}
                        data={posts}
                        renderItem={(post) =>
                            <Post
                                postInformation={post}
                                userName={nickname}
                                setNeedRefresh={setNeedRefresh}
                            />}
                        keyExtractor={(item) => item.postId}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        height: '100%',
        backgroundColor: 'transparent',
    },

    list: {
        paddingTop: 5,
        height: '75%',
    },
});
