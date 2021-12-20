import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Post } from '../../components/Post/Post';
import { getAllPostsStart } from '../../redux/posts/postsReducer';
import { getAllUsersStart } from '../../redux/users/usersReducer';

export const PostsPage = ({ navigation }) => {
    const dispatch = useDispatch();
    const { allPosts, loadingPosts } = useSelector((state) => state.posts);

    const getPostsWithUsers = () => {
        dispatch(getAllUsersStart());
        dispatch(getAllPostsStart());
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getPostsWithUsers();
        });
        return unsubscribe;
    });

    return (
        <View>
            {loadingPosts ? (
                <ActivityIndicator size="large" color="#FAB15F" />
            ) : (
                <FlatList
                    data={allPosts}
                    renderItem={(post) => <Post postInformation={post} />}
                    keyExtractor={(post) => post.postId}
                />
            )}
        </View>
    );
};
