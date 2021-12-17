import React, { useEffect, useState } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { ArrowBackComments } from '../../../assets/componentIcons/arrowBackComments/ArrowBackComments';
import { ConfirmIcon } from '../../../assets/componentIcons/confirm/ConfirmIcon';
import { styles } from './ModalEditUserStyle';
import { changeUserDataStart, deleteUserStart } from '../../redux/users/usersReducer';
import { localStore } from '../../secureStore/secureStore';
import { USER__ID } from '../../redux/constances/constances';
import { logout } from '../../redux/authorization/authorizationReducer';
import { ModalError } from '../ModalError/ModalError';

export const ModalEditUser = ({ modalEditUserVisible, setModalEditUserVisible }) => {
    const [newNickname, setNewNickname] = useState('');
    const [newPhone, setNewPhone] = useState('');
    const [currentUserId, setCurrentUserId] = useState('');
    const { loadingUsers } = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(async () => {
        const userIdFromLocalStore = await localStore(`get`, USER__ID);
        setCurrentUserId(userIdFromLocalStore);
    }, []);

    return (
        <View>
            <Modal animationType="fade" transparent={false} visible={modalEditUserVisible}>
                <View style={styles.editBox}>
                    <SafeAreaView style={styles.editTitleBox}>
                        <TouchableOpacity
                            style={styles.editArrowBack}
                            onPress={() => setModalEditUserVisible(!modalEditUserVisible)}
                        >
                            <ArrowBackComments />
                        </TouchableOpacity>
                        <Text style={styles.editTitle}>Editing profile</Text>
                        <TouchableOpacity
                            style={styles.saveData}
                            onPress={() => {
                                setModalEditUserVisible(!modalEditUserVisible)
                                dispatch(changeUserDataStart({ newNickname, newPhone, currentUserId }))
                            }}
                        >
                            <ConfirmIcon />
                        </TouchableOpacity>
                    </SafeAreaView>
                    {loadingUsers ?
                        <ActivityIndicator size="large" color="#FAB15F" /> :
                        <View>
                            <View style={styles.editInputBox}>
                                <View style={styles.editInputs}>
                                    <Text style={styles.inputTitle}>Nickname</Text>
                                    <TextInput
                                        placeholder='Type here...'
                                        autoCorrect={false}
                                        autoCapitalize="none"
                                        defaultValue={newNickname}
                                        onChangeText={(text) => setNewNickname(text)}
                                    />
                                </View>
                                <View style={[styles.editInputs, styles.lastInput]}>
                                    <Text style={styles.inputTitle}>Phone</Text>
                                    <TextInput
                                        placeholder='Type here...'
                                        autoCorrect={false}
                                        autoCapitalize="none"
                                        defaultValue={newPhone}
                                        onChangeText={(text) => setNewPhone(text)}
                                    />
                                </View>
                            </View>
                            <TouchableOpacity
                                style={{ marginTop: 30 }}
                                onPress={() => dispatch(logout())}
                            >
                                <View style={styles.deleteButton}>
                                    <Text style={styles.logoutButtonText}>Log out</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ marginTop: 15 }}
                                onPress={() => dispatch(deleteUserStart(currentUserId))}
                            >
                                <View style={styles.deleteButton}>
                                    <Text style={styles.deleteButtonText}>Delete account</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    }
                </View>
                <ModalError />
            </Modal>
        </View>
    );
};
