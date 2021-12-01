import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { PostsIconNotActive } from '../../../assets/componentIcons/posts/PostsIconNotActive';
import { UsersIconNotActive } from '../../../assets/componentIcons/users/UsersIconNotActive';
import { AddPostIconNotActive } from '../../../assets/componentIcons/addPost/AddPostIconNotActive';
import { HomeIconActive } from '../../../assets/componentIcons/home/HomeIconActive';

export const Menu = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <PostsIconNotActive />
                <UsersIconNotActive />
                <AddPostIconNotActive />
                <HomeIconActive />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 25,
        alignItems: 'center',
        width: '100%',
    },
    wrapper: {
        flexDirection: 'row',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});
