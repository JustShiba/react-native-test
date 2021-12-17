import React from 'react';
import {
    Modal,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { useDispatch } from 'react-redux';

import { deletePostStart } from '../../redux/posts/postsReducer';

import { styles } from './ModalSettingsPostStyle';


export const ModalSettingsPost = ({
    modalPostSettingsVisible,
    setModalPostSettingsVisible,
    setIsChangeCurrentPost,
    postId,
    setNeedRefresh,
}) => {
    const dispatch = useDispatch();

    return (
        <View style={styles.centeredView} >
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalPostSettingsVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            style={styles.setting}
                            onPress={() => {
                                setModalPostSettingsVisible(false);
                                setIsChangeCurrentPost(true);
                            }}>
                            <Text style={styles.settingText}>Change post</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.setting}
                            onPress={() => {
                                setModalPostSettingsVisible(false);
                                dispatch(deletePostStart(postId));
                                setNeedRefresh(true);
                            }}>
                            <Text style={[styles.settingDelete, styles.settingText]}>Delete post</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.setting}
                            onPress={() => setModalPostSettingsVisible(false)}>
                            <Text style={styles.settingText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View >
    );
};
