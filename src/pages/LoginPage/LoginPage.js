import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, Text, TextInput, View, TouchableOpacity, ActivityIndicator } from 'react-native';

import { styles } from './loginStyles';
import { loginStart } from '../../redux/authorization/authorizationReducer';
import { ArrowBackIcon } from '../../../assets/componentIcons/arrowBack/ArrowBackIcon';

export const LoginPage = ({ navigation }) => {
    const [userEmail, setuserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const { loadingAuthorization } = useSelector((state) => state.authorization);
    const dispatch = useDispatch();

    return (
        <View>
            {loadingAuthorization ? (
                <ActivityIndicator size="large" color="#FAB15F" />
            ) : (
                <View style={{ backgroundColor: 'white', height: '100%' }}>
                    <Image
                        style={styles.bg}
                        source={require('../../../assets/images/login_bg.png')}
                        resizeMethod="scale"
                    />
                    <TouchableOpacity
                        style={{ position: 'absolute', left: 40, top: 50 }}
                        onPress={() => navigation.navigate('Main')}
                        activeOpacity="0.8"
                    >
                        <ArrowBackIcon />
                    </TouchableOpacity>
                    <View style={{ alignSelf: 'center', width: '80%', height: '50%' }}>
                        <Text style={styles.title}>С возвращением...</Text>
                        <View style={styles.inputsBox}>
                            <TextInput
                                style={styles.inputs}
                                placeholder="E-mail"
                                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                                autoCorrect={false}
                                autoComplete="email"
                                autoCapitalize="none"
                                defaultValue={userEmail}
                                onChangeText={(text) => setuserEmail(text)}
                            />
                            <TextInput
                                style={styles.inputs}
                                placeholder="Пароль"
                                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                                autoCorrect={false}
                                autoComplete="password"
                                autoCapitalize="none"
                                secureTextEntry={true}
                                defaultValue={userPassword}
                                onChangeText={(text) => setUserPassword(text)}
                            />
                            <TouchableOpacity
                                style={styles.submitButton}
                                onPress={() => dispatch(loginStart())}
                                activeOpacity="0.8"
                            >
                                <Text style={{ color: 'white', fontSize: 24 }}>Войти</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
        </View>
    );
};
