import React, { useState } from 'react';
import { Image, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from '../LoginPage/loginStyles';
import { ArrowBackIcon } from '../../../assets/componentIcons/arrowBack/ArrowBackIcon';

export const SignupPage = ({ navigation }) => {
    const [userEmail, setuserEmail] = useState('');
    const [userPassword, setuserPassword] = useState('');
    return (
        <View>
            <Image
                style={styles.orangeLine}
                source={require('../../../assets/images/OrangeLine.png')}
                resizeMethod="auto"
            />
            <TouchableOpacity style={styles.arrowBack} onPress={() => navigation.navigate('Login')}>
                <ArrowBackIcon />
            </TouchableOpacity>
            <Text style={styles.title}>First time? </Text>
            <View style={styles.inputsBox}>
                <View>
                    <TextInput
                        style={[styles.inputs, styles.emailInput]}
                        placeholder="EMAIL"
                        placeholderTextColor="rgba(0, 0, 0, 0.5)"
                        autoCorrect={false}
                        autoComplete="email"
                        autoCapitalize="none"
                        defaultValue={userEmail}
                        onChangeText={(text) => setuserEmail(text)}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.inputs}
                        placeholder="PASSWORD"
                        placeholderTextColor="rgba(0, 0, 0, 0.5)"
                        autoCorrect={false}
                        autoComplete="password"
                        autoCapitalize="none"
                        secureTextEntry={true}
                        defaultValue={userPassword}
                        onChangeText={(text) => setuserPassword(text)}
                    />
                </View>
                <TouchableOpacity
                    style={{ position: 'absolute', right: -15, top: '28%' }}
                    onPress={() => console.log({ userEmail, userPassword })}
                    activeOpacity="0.8"
                >
                    <LinearGradient
                        colors={['#FAAE5F', '#F86F5C']}
                        style={styles.submitButtonGradient}
                        start={{ x: 0.1, y: 0.2 }}
                        locations={[0.1, 0.8]}
                    >
                        <Image source={require('../../../assets/images/Arrow.png')} />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={styles.boxTitleAuthorization}>
                <Text style={styles.titleAuthorization}>sing up</Text>
            </View>
        </View>
    );
};
