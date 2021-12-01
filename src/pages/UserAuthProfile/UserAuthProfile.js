import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Post } from '../../components/Post/Post';

export const UserAuthProfile = () => {
    return (
        <View>
            <View style={styles.userInformation}></View>
            <Post />
        </View>
    );
};

const styles = StyleSheet.create({
    userInformation: {
        width: '100%',
        height: 114,
        marginTop: 15,
        borderRadius: 25,
        backgroundColor: '#FFFFFF',
    },
});
