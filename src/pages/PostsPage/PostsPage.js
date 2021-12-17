import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Post } from '../../components/Post/Post';
import { getAllPostsStart } from '../../redux/posts/postsReducer';
import { getAllUsersStart } from '../../redux/users/usersReducer';

export const PostsPage = ({ navigation }) => {
    const dispatch = useDispatch();
    const { allPosts, loadingPosts } = useSelector((state) => state.posts);
    useEffect(() => {
        navigation.addListener('focus', () => {
            dispatch(getAllUsersStart());
            dispatch(getAllPostsStart());
        });

    }, [dispatch, navigation]);
    return (
        <View>
            {loadingPosts ?
                <ActivityIndicator size="large" color="#FAB15F" /> :
                <FlatList
                    data={allPosts}
                    renderItem={(post) => <Post postInformation={post} />}
                    keyExtractor={(post) => post.postId}
                />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    allPostsBox: {
        paddingTop: 15,
    },
});
