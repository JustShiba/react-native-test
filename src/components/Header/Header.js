import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Platform, TouchableOpacity } from 'react-native';

import { SettingsIconNotActive } from '../../../assets/componentIcons/settings/SettingsIconNotActive';

export const Header = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerBox}>
                <Text style={styles.text}>React Native Test</Text>
                <TouchableOpacity onPress={() => console.log('Hello settings!')}>
                    <SettingsIconNotActive />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
    },
    headerBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Platform.OS === 'android' ? 30 : null,
        width: '90%',
    },
    text: {
        fontFamily: 'Pattaya',
        fontSize: 30,
    },
});
