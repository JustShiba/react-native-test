import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Post } from '../../components/Post/Post';

export const UserAuthProfile = () => {
    return (
        <View>
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
            <Post />
        </View>
    );
};

const styles = StyleSheet.create({
    userInformationBox: {
        width: '100%',
        height: 114,
        padding: 26,
        marginTop: 15,
        borderRadius: 25,
        backgroundColor: '#FFFFFF',
    },
    backgroundUser: {
        position: 'absolute',
    },
    userWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userIcon: {
        maxWidth: 65,
        maxHeight: 65,
        backgroundColor: '#F5F6F8',
        alignItems: 'center',
        padding: 8,
        borderRadius: 100,
        marginRight: 25,
    },
    userIconText: {
        fontFamily: 'Pattaya',
        fontSize: 35,
    },
    userInformation: {
        fontFamily: 'Overlock_Bold',
        fontSize: 18,
    },
});
