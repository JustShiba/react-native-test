import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Image, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { ArrowSend } from '../../../assets/componentIcons/arrowSend/ArrowSend';
import { sendNewPostStart } from '../../redux/posts/postsReducer';

export const AddPostPage = () => {
    const [postTitleAddPost, setPostTitleAddPost] = useState('');
    const [postBodyAddPost, setPostBodyAddPost] = useState('');
    const { loadingPosts } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    return (
        <View>
            <Image
                source={require('../../../assets/images/OrangeRect.png')}
                style={styles.oranreImg}
                resizeMode="stretch"
            />
            {loadingPosts ? (
                <ActivityIndicator size="large" color="#FAB15F" />
            ) : (
                <View style={styles.addPostCard}>
                    <TextInput
                        placeholder="Title of the post"
                        style={styles.inputAddTitle}
                        placeholderTextColor="rgba(0, 0, 0, 1)"
                        autoCapitalize="none"
                        defaultValue={postTitleAddPost}
                        onChangeText={(text) => setPostTitleAddPost(text)}
                    />
                    <TextInput
                        placeholder="Here you can write post's body"
                        style={styles.inputAddBody}
                        placeholderTextColor="rgba(0, 0, 0, 1)"
                        autoCapitalize="none"
                        defaultValue={postBodyAddPost}
                        onChangeText={(text) => setPostBodyAddPost(text)}
                        multiline={true}
                    />
                    <TouchableOpacity
                        style={styles.arrowSendPost}
                        onPress={() => {
                            dispatch(sendNewPostStart({ postTitleAddPost, postBodyAddPost }));
                        }}
                    >
                        <ArrowSend />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    oranreImg: {
        width: '100%',
        flex: 1,
        position: 'absolute',
    },
    addPostCard: {
        marginTop: 50,
        backgroundColor: 'white',
        paddingTop: 20,
        paddingRight: 60,
        paddingBottom: 20,
        paddingLeft: 20,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 15,
    },
    inputAddTitle: {
        width: '90%',
        height: 20,
        fontSize: 20,
        fontFamily: 'Overlock_Bold',
        color: '#383838',
    },
    inputAddBody: {
        marginLeft: 20,
        marginTop: 15,
        fontSize: 20,
        fontFamily: 'Overlock_Regular',
        color: '#000000',
    },
    arrowSendPost: {
        position: 'absolute',
        bottom: 14,
        right: 14,
    },
});
