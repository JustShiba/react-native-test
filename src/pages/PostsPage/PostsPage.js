import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Post } from '../../components/Post/Post';
import { getAllPostsStart } from '../../redux/posts/postsReducer';
import { getAllUsersStart } from '../../redux/users/usersReducer';

export const PostsPage = () => {
    const dispatch = useDispatch();
    const { allPosts, loadingPosts } = useSelector((state) => state.posts);
    useEffect(() => {
        dispatch(getAllUsersStart());
        dispatch(getAllPostsStart());
    }, [dispatch]);
    return (
        <View>
            {loadingPosts ? (
                <Text>Loading</Text>
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

const styles = StyleSheet.create({
    allPostsBox: {
        paddingTop: 15,
    },
});
