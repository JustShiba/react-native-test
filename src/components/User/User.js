import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const User = () => {
    return (
        <View style={styles.userBox}>
            <View style={styles.userIcon}>
                <Text style={styles.userIconText}>VG</Text>
            </View>
            <Text style={styles.userInformation}>Vitaliy Gan</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    userBox: {
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderTopColor: '#EFF0F2',
        borderBottomColor: '#EFF0F2',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    userIcon: {
        width: 40,
        height: 40,
        padding: 8,
        marginRight: 15,
        backgroundColor: '#F5F6F8',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
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
        fontSize: 17,
    },
    userInformation: {
        fontFamily: 'Overlock_Bold',
        fontSize: 18,
    },
});
