import { styles } from '../LoginPage/loginStyles';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, Text, TextInput, View, TouchableOpacity, ActivityIndicator } from 'react-native';

import { loginStart } from '../../redux/authorization/authorizationReducer';
import { ArrowBackIcon } from '../../../assets/componentIcons/arrowBack/ArrowBackIcon';

export const SignupPage = ({ navigation }) => {
    const [userEmail, setuserEmail] = useState('');
    const [userNickname, setUserNickname] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const { loadingAuthorization } = useSelector((state) => state.authorization);
    const { useEng } = useSelector((state) => state.users)

    return (
        <View>
            {loadingAuthorization ? (
                <ActivityIndicator size="large" color="black" />
            ) : (
                <View style={{ backgroundColor: 'white', height: '100%' }}>
                    <Image
                        style={styles.bg2}
                        source={require('../../../assets/images/signup_bg.png')}
                        resizeMethod="scale"
                    />
                    <TouchableOpacity
                        style={{ position: 'absolute', left: 40, top: 50 }}
                        onPress={() => navigation.navigate('Main')}
                        activeOpacity="0.8"
                    >
                        <ArrowBackIcon />
                    </TouchableOpacity>
                    <View style={{ alignSelf: 'center', width: '80%' }}>
                        <Text style={styles.title}>{useEng ? `Create Account`: `Добро пожаловать...`}</Text>
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
                                placeholder={useEng ? `Nickname`: `Никнейм`}
                                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                                autoCorrect={false}
                                autoCapitalize="none"
                                defaultValue={userNickname}
                                onChangeText={(text) => setUserNickname(text)}
                            />
                            <TextInput
                                style={styles.inputs}
                                placeholder={useEng ? `Telephone number`: `Номер телефона`}
                                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                                autoCorrect={false}
                                autoComplete="phone"
                                autoCapitalize="none"
                                defaultValue={userPhone}
                                onChangeText={(text) => setUserPhone(text)}
                            />
                            <TextInput
                                style={styles.inputs}
                                placeholder={useEng ? `Password`: `Пароль`}
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
                                onPress={() => navigation.navigate('Login')}
                                activeOpacity="0.8"
                            >
                                <Text style={{ color: 'white', fontSize: 24 }}>{useEng ? `Sign up`: `Регистрация`}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
        </View>
    );
};
