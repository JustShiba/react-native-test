import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Post } from '../../components/Post/Post';
import { getAllPostsStart } from '../../redux/posts/postsReducer';
import { getAllUsersStart } from '../../redux/users/usersReducer';

export const PostsPage = ({ navigation }) => {
    const dispatch = useDispatch();
    const [needRefresh, setNeedRefresh] = useState(false);
    const { allPosts, loadingPosts } = useSelector((state) => state.posts);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            dispatch(getAllUsersStart());
            dispatch(getAllPostsStart());
        });
        setNeedRefresh(false);
        return unsubscribe;
    }, [navigation, needRefresh]);

    return (
        <View>
            {loadingPosts ?
                <ActivityIndicator size="large" color="#FAB15F" /> :
                <FlatList
                    data={allPosts}
                    renderItem={(post) => <Post postInformation={post} setNeedRefresh={setNeedRefresh} />}
                    keyExtractor={(post) => post.postId}
                />
            }
        </View>
    );
};

