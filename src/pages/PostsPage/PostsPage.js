import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Post } from '../../components/Post/Post';

export const PostsPage = () => {
    return (
        <ScrollView style={styles.allPostsBox}>
            <Post />
            <Post />
            <Post />
            <Post />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    allPostsBox: {
        paddingTop: 15,
    },
});
