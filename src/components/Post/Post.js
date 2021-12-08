import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import { CommentsIcon } from '../../../assets/componentIcons/comments/CommentsIcon';
import { styles } from './postStyles';
import { EditPostIcon } from '../../../assets/componentIcons/editPost/EditPostIcon';

export const Post = () => {
    return (
        <View style={styles.postBox}>
            <View style={styles.postInformation}>
                <View style={styles.userInformationBox}>
                    <View style={styles.userIcon}>
                        <Text style={styles.userIconText}>VG</Text>
                    </View>
                    <Text style={styles.userInformation}>Vitaliy Gan</Text>
                </View>
                <Text style={styles.postTitle}>Title</Text>
                <Text style={styles.postBody}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                    eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Donec qu
                </Text>
            </View>
            <Image
                style={styles.postBackground}
                source={require('../../../assets/images/PostBG.png')}
            />
            <TouchableOpacity style={styles.EditPostIcon} onPress={() => console.log('edit post')}>
                <EditPostIcon />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.postCommentsIcon}
                onPress={() => console.log('comments')}
            >
                <CommentsIcon />
            </TouchableOpacity>
        </View>
    );
};
