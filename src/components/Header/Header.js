import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Platform, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { SettingsIconNotActive } from '../../../assets/componentIcons/settings/SettingsIconNotActive';
import { ModalEditUser } from '../ModalEditUser/ModalEditUser';

export const Header = () => {
    const [modalEditUserVisible, setModalEditUserVisible] = useState(false);
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerBox}>
                <Text style={styles.text}>React Native Test</Text>
                <TouchableOpacity onPress={() => setModalEditUserVisible(!modalEditUserVisible)}>
                    <SettingsIconNotActive />
                </TouchableOpacity>
            </View>
            {modalEditUserVisible ? (
                <ModalEditUser
                    modalEditUserVisible={modalEditUserVisible}
                    setModalEditUserVisible={setModalEditUserVisible}
                />
            ) : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'transparent',
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
