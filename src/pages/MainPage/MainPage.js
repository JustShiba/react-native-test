import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { changeLanguage } from '../../redux/users/usersReducer';

import { styles } from './MainStyles';
import { Button } from 'react-native-elements/dist/buttons/Button';

export const MainPage = ({ navigation }) => {
    const { loadingAuthorization } = useSelector((state) => state.authorization);
    const { useEng } = useSelector((state) => state.users)
    const dispatch = useDispatch();

    return (
        <View>
            {loadingAuthorization ? (
                <ActivityIndicator size="large" color="#FAB15F" />
            ) : (
                <View style={styles.box}>
                    <Image
                        style={styles.mainBg}
                        source={require('../../../assets/images/main_bg.png')}
                        resizeMode="stretch"
                    />
                    <TouchableOpacity
                    style={{
                        width: 50,
                        height: 50,
                        position: 'absolute',
                        right: 40,
                        top: 50,
                    }} activeOpacity="0" onPress={() => dispatch(changeLanguage())}>
                        <Text
                            style={{
                                color: 'white',
                                fontFamily: 'Overlock_Bold',
                                fontSize: 24,
                            }}
                        >
                            {useEng ? `Rus` : `Eng`}
                        </Text>
                    </TouchableOpacity>
                    <View
                        style={{
                            alignSelf: 'center',
                            marginTop: '90%',
                            width: '80%',
                        }}
                    >
                        <Text style={styles.title}>Sorry, Ma</Text>
                        <Text style={styles.par}>
                            {useEng ? `App for renting hookahs in Minsk at affordable price` : `Приложение для аренды кальянов в Минске по доступным ценам`}
                        </Text>
                        <Button>Войти</Button>
                        <TouchableOpacity
                            style={styles.but}
                            onPress={() => navigation.navigate('Login')}
                            activeOpacity="0.8"
                        >
                            <Text
                                style={{
                                    fontFamily: 'Overlock_Regular',
                                    fontSize: 24,
                                    letterSpacing: 1,
                                }}
                            >
                                {useEng ? `Log in` : `Войти`}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.but2}
                            onPress={() => navigation.navigate('Signup')}
                            activeOpacity="0.8"
                        >
                            <Text
                                style={{
                                    fontFamily: 'Overlock_Regular',
                                    fontSize: 24,
                                    color: 'white',
                                    letterSpacing: 1,
                                }}
                            >
                                {useEng ? `Sign up` : `Регистрация`}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
};
