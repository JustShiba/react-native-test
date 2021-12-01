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
        bottom: 0,
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#FFFFFF',
        paddingBottom: 10,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 25,
    },
    wrapper: {
        paddingTop: 10,
        flexDirection: 'row',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});
