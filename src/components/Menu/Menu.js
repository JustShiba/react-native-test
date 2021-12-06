import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { PostsIconActive } from '../../../assets/componentIcons/posts/PostsIconActive';
import { PostsIconNotActive } from '../../../assets/componentIcons/posts/PostsIconNotActive';
import { UsersIconActive } from '../../../assets/componentIcons/users/UsersIconActive';
import { UsersIconNotActive } from '../../../assets/componentIcons/users/UsersIconNotActive';
import { AddPostIconActive } from '../../../assets/componentIcons/addPost/AddPostIconActive';
import { AddPostIconNotActive } from '../../../assets/componentIcons/addPost/AddPostIconNotActive';
import { HomeIconActive } from '../../../assets/componentIcons/home/HomeIconActive';
import { HomeIconNotActive } from '../../../assets/componentIcons/home/HomeIconNotActive';

export const Menu = () => {
    const navigation = useNavigation();
    const [currentPosition, setCurrentPosition] = useState('Profile');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <TouchableOpacity
                    onPress={() => {
                        setCurrentPosition('Posts');
                        navigation.navigate('Posts');
                    }}
                >
                    {currentPosition === 'Posts' ? <PostsIconActive /> : <PostsIconNotActive />}
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setCurrentPosition('All users');
                        navigation.navigate('All users');
                    }}
                >
                    {currentPosition === 'All users' ? <UsersIconActive /> : <UsersIconNotActive />}
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setCurrentPosition('Add post');
                        navigation.navigate('Add post');
                    }}
                >
                    {currentPosition === 'Add post' ? (
                        <AddPostIconActive />
                    ) : (
                        <AddPostIconNotActive />
                    )}
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setCurrentPosition('Profile');
                        navigation.navigate('Profile');
                    }}
                >
                    {currentPosition === 'Profile' ? <HomeIconActive /> : <HomeIconNotActive />}
                </TouchableOpacity>
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
