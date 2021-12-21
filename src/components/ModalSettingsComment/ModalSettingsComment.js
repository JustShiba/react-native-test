import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { deleteCommentStart } from '../../redux/comments/commentsReducer';
import { styles } from './ModalSettingsCommentStyle';

export const ModalSettingsComment = ({
    modalCommentSettings,
    setModalCommentSettings,
    setIsChangeCurrentComment,
    postId,
    commentId,
    path,
}) => {
    const dispatch = useDispatch();

    return (
        <View style={styles.centeredView}>
            <Modal animationType="slide" transparent={true} visible={modalCommentSettings}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            style={styles.setting}
                            onPress={() => {
                                setModalCommentSettings(false);
                                setIsChangeCurrentComment(true);
                            }}
                        >
                            <Text style={styles.settingText}>Change comment</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.setting}
                            onPress={() => {
                                setModalCommentSettings(false);
                                dispatch(deleteCommentStart({ postId, commentId, path }));
                            }}
                        >
                            <Text style={[styles.settingDelete, styles.settingText]}>
                                Delete comment
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.setting}
                            onPress={() => setModalCommentSettings(false)}
                        >
                            <Text style={styles.settingText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
