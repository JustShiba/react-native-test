import React, { useEffect } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Post } from '../../components/Post/Post';
import { UserCard } from '../../components/UserCard/UserCard';
import { USER__ID } from '../../redux/constances/constances';
import { getUserStart } from '../../redux/users/usersReducer';
import { localStore } from '../../secureStore/secureStore';

export const UserAuthProfile = ({ route, navigation }) => {
    let userIdProp = route.params?.userIdProp;
    const { loadingUsers } = useSelector((state) => state.users);
    const { email, nickname, posts } = useSelector((state) => state.users.currentUserInformation);
    const dispatch = useDispatch();

    useEffect(() => {
        navigation.addListener('tabPress', (e) => {
            navigation.navigate('Profile');
        });
    }, [navigation]);

    useEffect(async () => {
        const userId = userIdProp || (await localStore('get', USER__ID));
        dispatch(getUserStart(userId));
    }, [dispatch, userIdProp]);

    return (
        <View>
            {loadingUsers ? (
                <Text>loading</Text>
            ) : (
                <View style={styles.box}>
                    <UserCard nickname={nickname} email={email} />
                    <FlatList
                        data={posts}
                        renderItem={(post) => <Post postInformation={post} userName={nickname} />}
                        keyExtractor={(item) => item.postId}
                        style={styles.list}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'transparent',
    },

    list: {
        paddingTop: 5,
        height: '80%',
    },
});
