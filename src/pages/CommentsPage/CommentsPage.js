import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ArrowBackComments } from '../../../assets/componentIcons/arrowBackComments/ArrowBackComments';
import { ArrowSend } from '../../../assets/componentIcons/arrowSend/ArrowSend';

export const CommentsPage = () => {
    const [addCommentText, setAddCommentText] = useState('');
    return (
        <View style={styles.commentsBox}>
            <SafeAreaView style={styles.commentsTitleBox}>
                <TouchableOpacity style={styles.commentsArrowBack}>
                    <ArrowBackComments />
                </TouchableOpacity>
                <Text style={styles.commentsTitle}>Comments</Text>
            </SafeAreaView>
            <ScrollView></ScrollView>
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
    );
};

const styles = StyleSheet.create({
    commentsBox: {
        position: 'absolute',
        backgroundColor: '#F5F6F8',
        width: '100%',
        height: '100%',
        bottom: 0,
    },
    commentsTitleBox: {
        backgroundColor: '#FFFFFF',
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 8,
    },
    commentsArrowBack: {
        position: 'absolute',
        bottom: 20,
        left: 15,
    },
    commentsTitle: {
        fontFamily: 'Overlock_Bold',
        fontSize: 20,
        marginBottom: 20,
    },
    addCommentBox: {
        position: 'absolute',
        bottom: 0,
        flex: 1,
        alignItems: 'center',
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 10,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
    },
    userIcon: {
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F6F8',
        alignItems: 'center',
        padding: 8,
        borderRadius: 100,
        marginRight: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 10,
    },
    userIconText: {
        fontFamily: 'Pattaya',
        fontSize: 18,
    },
    addCommentInput: {
        height: '100%',
        color: '#A7A7A7',
        flex: 1,
        fontFamily: 'Overlock_Regular',
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#ECECEC',
        paddingLeft: 20,
        paddingRight: 20,
        marginRight: 10,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
    },
});
