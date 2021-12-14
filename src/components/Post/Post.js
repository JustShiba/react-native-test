import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import { CommentsIcon } from '../../../assets/componentIcons/comments/CommentsIcon';
import { styles } from './postStyles';
import { EditPostIcon } from '../../../assets/componentIcons/editPost/EditPostIcon';
import { ModalComments } from '../ModalComments/ModalComments';

export const Post = ({ postInformation, userName }) => {
    const { body, title, comments, nickname } = postInformation.item;
    const [modalVisible, setModalVisible] = useState(false);

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
                <Text style={styles.postTitle}>{title}</Text>
                <Text style={styles.postBody}>{body}</Text>
            </View>
            <Image
                style={styles.postBackground}
                source={require('../../../assets/images/PostBG.png')}
            />
            <TouchableOpacity
                style={styles.EditPostIcon}
                // onPress={}
            >
                <EditPostIcon />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.postCommentsIcon}
                onPress={() => setModalVisible(!modalVisible)}
            >
                <CommentsIcon />
            </TouchableOpacity>
            {modalVisible ? (
                <ModalComments
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    commentsInformation={comments}
                />
            ) : null}
        </View>
    );
};
