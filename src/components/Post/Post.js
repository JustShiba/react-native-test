import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';

import { CommentsIcon } from '../../../assets/componentIcons/comments/CommentsIcon';
import { styles } from './postStyles';
import { EditIcon } from '../../../assets/componentIcons/edit/EditIcon';
import { ModalComments } from '../ModalComments/ModalComments';
import { ModalSettingsPost } from '../ModalSettingsPost/ModalSettingsPost';
import { ArrowSend } from '../../../assets/componentIcons/arrowSend/ArrowSend';
import { changePostStart } from '../../redux/posts/postsReducer';

export const Post = ({ postInformation, userName }) => {
    const { body, title, comments, nickname, postId } = postInformation.item;
    const [modalVisible, setModalVisible] = useState(false);
    const [modalPostSettingsVisible, setModalPostSettingsVisible] = useState(false);
    const [isChangeCurrentPost, setIsChangeCurrentPost] = useState(false);
    const [newPostTitle, setNewPostTitle] = useState(title);
    const [newPostBody, setNewPostBody] = useState(body);
    const dispatch = useDispatch();

    return (
        <View style={styles.postBox}>
            <View style={styles.postInformation}>
                <View style={styles.userInformationBox}>
                    <View style={styles.userIcon}>
                        <Text style={styles.userIconText}>
                            {userName
                                ? userName.substring(0, 2).toUpperCase()
                                : nickname
                                    ? nickname.substring(0, 2).toUpperCase()
                                    : 'HI'}
                        </Text>
                    </View>
                    <Text style={styles.userInformation}>{userName || nickname || 'No name'}</Text>
                </View>
                {isChangeCurrentPost ?
                    <View>
                        <TextInput
                            style={[styles.postTitle, styles.inputs]}
                            autoCorrect={true}
                            defaultValue={newPostTitle}
                            onChangeText={(text) => setNewPostTitle(text)}
                        />
                        <TextInput
                            style={[styles.postBody, styles.inputs, styles.bodyInput]}
                            autoCorrect={true}
                            defaultValue={newPostBody}
                            multiline={true}
                            onChangeText={(text) => setNewPostBody(text)}
                        />
                    </View> :
                    <View>
                        <Text style={styles.postTitle}>{title}</Text>
                        <Text style={styles.postBody}>{body}</Text>
                    </View>
                }

            </View>
            <Image
                style={styles.postBackground}
                source={require('../../../assets/images/PostBG.png')}
            />
            {isChangeCurrentPost ?
                <TouchableOpacity
                    style={styles.EditPostIcon}
                    onPress={() => dispatch(changePostStart({ newPostTitle, newPostBody, postId }))}
                >
                    <ArrowSend />
                </TouchableOpacity> :
                <TouchableOpacity
                    style={styles.EditPostIcon}
                    onPress={() => setModalPostSettingsVisible(!modalPostSettingsVisible)}
                >
                    <EditIcon />
                </TouchableOpacity>}

            <TouchableOpacity
                style={styles.postCommentsIcon}
                onPress={() => setModalVisible(!modalVisible)}
            >
                <CommentsIcon />
            </TouchableOpacity>
            {modalVisible ?
                <ModalComments
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    commentsInformation={comments}
                    postId={postId}
                    userNickname={userName || nickname || 'No name'}
                /> :
                null
            }
            {modalPostSettingsVisible ?
                <ModalSettingsPost
                    modalPostSettingsVisible={modalPostSettingsVisible}
                    setModalPostSettingsVisible={setModalPostSettingsVisible}
                    setIsChangeCurrentPost={setIsChangeCurrentPost}
                    postId={postId}
                /> :
                null
            }
        </View>
    );
};
