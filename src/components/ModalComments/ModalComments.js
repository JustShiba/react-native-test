import React, { useState } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { ArrowBackComments } from '../../../assets/componentIcons/arrowBackComments/ArrowBackComments';
import { ArrowSend } from '../../../assets/componentIcons/arrowSend/ArrowSend';
import { sendNewCommentStart } from '../../redux/comments/commentsReducer';
import { UserComment } from '../UserComment/UserComment';
import { styles } from './ModalCommentsStyle';
import { ModalError } from '../ModalError/ModalError';

export const ModalComments = ({ modalVisible, setModalVisible, commentsInformation, postId, userNickname }) => {
    const [addCommentText, setAddCommentText] = useState('');
    const { loadingComments } = useSelector(state => state.comments);
    const dispatch = useDispatch();

    return (
        <View>
            <Modal animationType="fade" transparent={false} visible={modalVisible}>
                <View style={styles.commentsBox}>
                    <SafeAreaView style={styles.commentsTitleBox}>
                        <TouchableOpacity
                            style={styles.commentsArrowBack}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <ArrowBackComments />
                        </TouchableOpacity>
                        <Text style={styles.commentsTitle}>Comments</Text>
                    </SafeAreaView>
                    {loadingComments ?
                        <ActivityIndicator size="large" color="#FAB15F" /> :
                        <FlatList
                            data={commentsInformation}
                            renderItem={(comment) =>
                                <UserComment
                                    textComment={comment.item.body}
                                    userComment={comment.item.userId}
                                    postId={postId}
                                    commentId={comment.item.commentId}
                                />}
                            keyExtractor={(comment) => comment.commentId}
                        />
                    }
                    <SafeAreaView style={styles.addCommentBox}>
                        <View style={styles.userIcon}>
                            <Text style={styles.userIconText}>{userNickname.substring(0, 2)}</Text>
                        </View>
                        <TextInput
                            style={styles.addCommentInput}
                            placeholder="Write comment..."
                            placeholderTextColor="#A7A7A7"
                            autoCorrect={true}
                            autoCapitalize="none"
                            defaultValue={addCommentText}
                            onChangeText={(text) => setAddCommentText(text)}
                        />
                        <TouchableOpacity onPress={() =>
                            dispatch(sendNewCommentStart({ addCommentText, postId }))}>
                            <ArrowSend />
                        </TouchableOpacity>
                    </SafeAreaView>
                </View>
                <ModalError />
            </Modal>
        </View>
    );
};
