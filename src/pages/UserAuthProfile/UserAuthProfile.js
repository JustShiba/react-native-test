import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

import { Post } from '../../components/Post/Post';

export const UserAuthProfile = () => {
    return (
        <View style={styles.box}>
            <View style={styles.userInformationBox}>
                <Image
                    style={styles.backgroundUser}
                    source={require('../../../assets/images/ProfileLine.png')}
                />
                <View style={styles.userWrapper}>
                    <View style={styles.userIcon}>
                        <Text style={styles.userIconText}>VG</Text>
                    </View>
                    <View>
                        <Text style={styles.userInformation}>Vitaliy Gan</Text>
                        <Text style={styles.userInformation}>Vitala_gan@icloud.com</Text>
                    </View>
                </View>
            </View>
            <ScrollView style={styles.list}>
                <Post />
                <Post />
                <Post />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'transparent',
    },
    userInformationBox: {
        width: '100%',
        height: 114,
        padding: 26,
        marginTop: 15,
        marginBottom: 10,
        borderRadius: 25,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 8,
    },
    backgroundUser: {
        position: 'absolute',
    },
    userWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userIcon: {
        width: 65,
        height: 65,
        backgroundColor: '#F5F6F8',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        marginRight: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 15,
    },
    userIconText: {
        fontFamily: 'Pattaya',
        fontSize: 35,
    },
    userInformation: {
        fontFamily: 'Overlock_Bold',
        fontSize: 18,
    },
    list: {
        paddingTop: 5,
    },
});
