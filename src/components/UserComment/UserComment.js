import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { ArrowSend } from '../../../assets/componentIcons/arrowSend/ArrowSend';

import { EditIcon } from '../../../assets/componentIcons/edit/EditIcon';
import { changeCommentStart } from '../../redux/comments/commentsReducer';
import { USER__ID } from '../../redux/constances/constances';
import { localStore } from '../../secureStore/secureStore';
import { ModalSettingsComment } from '../ModalSettingsComment/ModalSettingsComment';

export const UserComment = ({ textComment, userComment, postId, commentId, path }) => {
    const [isUserComment, setIsUserComment] = useState(true);
    const [modalCommentSettings, setModalCommentSettings] = useState(false);
    const [isChangeCurrentComment, setIsChangeCurrentComment] = useState(false);
    const [changeComment, setChangeComment] = useState(textComment);
    const dispatch = useDispatch();

    useEffect(async () => {
        const currentUserId = await localStore('get', USER__ID);
        if (currentUserId === userComment) {
            setIsUserComment(true);
        }
        return () => setIsUserComment(false);
    }, []);

    return (
        <View style={styles.commentBox}>
            {isChangeCurrentComment ? (
                <TextInput
                    style={styles.changeCommentInput}
                    placeholderTextColor="#A7A7A7"
                    autoCorrect={false}
                    autoCapitalize="none"
                    defaultValue={changeComment}
                    onChangeText={(text) => setChangeComment(text)}
                />
            ) : (
                <Text style={styles.textComment}>{textComment}</Text>
            )}
            <ModalSettingsComment
                modalCommentSettings={modalCommentSettings}
                setModalCommentSettings={setModalCommentSettings}
                setIsChangeCurrentComment={setIsChangeCurrentComment}
                postId={postId}
                commentId={commentId}
                path={path}
            />
            {isUserComment ? (
                isChangeCurrentComment ? (
                    <TouchableOpacity
                        onPress={() => {
                            setIsChangeCurrentComment(false);
                            dispatch(
                                changeCommentStart({ changeComment, postId, commentId, path }),
                            );
                        }}
                    >
                        <ArrowSend />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={styles.buttonSettings}
                        onPress={() => setModalCommentSettings(!modalCommentSettings)}
                    >
                        <EditIcon />
                    </TouchableOpacity>
                )
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    commentBox: {
        width: '100%',
        height: 60,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#ECECEC',
    },
    textComment: {
        fontFamily: 'Overlock_Regular',
        fontSize: 17,
    },
    buttonSettings: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    changeCommentInput: {
        width: '90%',
        height: 40,
        borderColor: '#ECECEC',
        borderRadius: 10,
        borderWidth: 2,
    },
});
