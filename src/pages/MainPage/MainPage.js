import React from 'react';
import { useSelector } from 'react-redux';
import { Image, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';

import { styles } from './MainStyles';
import { Button } from 'react-native-elements/dist/buttons/Button';

export const MainPage = ({ navigation }) => {
    const { loadingAuthorization } = useSelector((state) => state.authorization);

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
                    <TouchableOpacity activeOpacity="0.8">
                        <Text
                            style={{
                                position: 'absolute',
                                right: 40,
                                top: 50,
                                color: 'white',
                                fontFamily: 'Overlock_Bold',
                                fontSize: 24,
                            }}
                        >
                            Eng
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
                            Приложение для аренды кальянов в Минске по доступным ценам
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
                                Войти
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
                                Регистрация
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
};
