import React, { useState } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ArrowBackComments } from '../../../assets/componentIcons/arrowBackComments/ArrowBackComments';
import { ArrowSend } from '../../../assets/componentIcons/arrowSend/ArrowSend';
import { styles } from './ModalCommentsStyle';

export const ModalComments = ({ modalVisible, setModalVisible, commentsInformation }) => {
    const [addCommentText, setAddCommentText] = useState('');
    console.log(commentsInformation);
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
                    <FlatList
                        data={commentsInformation}
                        renderItem={(comment) => <Text>{comment.item.body}</Text>}
                        keyExtractor={(comment) => comment.commentId}
                    />
                    <SafeAreaView style={styles.addCommentBox}>
                        <View style={styles.userIcon}>
                            <Text style={styles.userIconText}>VG</Text>
                        </View>
                        <TextInput
                            style={styles.addCommentInput}
                            placeholder="Write comment..."
                            placeholderTextColor="#A7A7A7"
                            autoCorrect={false}
                            autoCapitalize="none"
                            defaultValue={addCommentText}
                            onChangeText={(text) => setAddCommentText(text)}
                        />
                        <TouchableOpacity>
                            <ArrowSend />
                        </TouchableOpacity>
                    </SafeAreaView>
                </View>
            </Modal>
        </View>
    );
};
