import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
    Text,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Post } from '../../components/Post/Post';
import { UserCard } from '../../components/UserCard/UserCard';
import { USER__ID } from '../../redux/constances/constances';
import { getUserStart } from '../../redux/users/usersReducer';
import { localStore } from '../../secureStore/secureStore';

export const UserAuthProfile = ({ route, navigation }) => {
    const userIdProp = route.params?.userIdProp;
    const { loadingUsers } = useSelector((state) => state.users);
    const { email, nickname, phone, posts } = useSelector(
        (state) => state.users.currentUserInformation,
    );
    const dispatch = useDispatch();

    useEffect(async () => {
        const userId = await localStore('get', USER__ID);
        const unsubscribe = navigation.addListener('tabPress', (e) => {
            dispatch(getUserStart(userId));
        });
        return unsubscribe;
    }, []);

    useEffect(async () => {
        const userId = userIdProp || (await localStore('get', USER__ID));
        dispatch(getUserStart(userId));
    }, [userIdProp]);

    return (
        <View>
            {loadingUsers ? (
                <ActivityIndicator size="large" color="#FAB15F" />
            ) : (
                <View style={styles.box}>
                    <UserCard nickname={nickname} email={email} phone={phone} />
                    {posts?.length !== 0 ? (
                        <FlatList
                            style={styles.list}
                            data={posts}
                            renderItem={(post) => (
                                <Post postInformation={post} userName={nickname} path="user" />
                            )}
                            keyExtractor={(item) => item.postId}
                        />
                    ) : (
                        <TouchableOpacity
                            style={styles.goAddButton}
                            onPress={() => {
                                navigation.navigate('Add post');
                            }}
                        >
                            <Text style={styles.goAddText}>Go to add post</Text>
                        </TouchableOpacity>
                    )}
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
    goAddButton: {
        marginTop: 25,
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 8,
    },
    goAddText: {
        fontSize: 25,
        fontFamily: 'Overlock_Bold',
    },
});
