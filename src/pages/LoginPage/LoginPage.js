import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './loginStyles';
import { loginStart } from '../../redux/authorization/authorizationReducer';

export const LoginPage = ({ navigation }) => {
    const { userAuthorizationInformation } = useSelector(
        (state) => state.authorization.inputUserInformation,
    );
    const [userEmail, setuserEmail] = useState(userAuthorizationInformation.email);
    const [userPassword, setUserPassword] = useState(userAuthorizationInformation.password);
    const dispatch = useDispatch();

    return (
        <View>
            <Image
                style={styles.orangeLine}
                source={require('../../../assets/images/OrangeLine.png')}
                resizeMethod="auto"
            />
            <Text style={styles.title}>Alredy singed up?</Text>
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
                        onChangeText={(text) => setUserPassword(text)}
                    />
                </View>
                <TouchableOpacity
                    style={{ position: 'absolute', right: -15, top: '28%' }}
                    onPress={() => dispatch(loginStart({ userEmail, userPassword }))}
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
            <TouchableOpacity
                style={styles.buttonToSignup}
                onPress={() => navigation.navigate('Signup')}
            >
                <Text style={styles.linkToSignup}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.boxTitleAuthorization}>
                <Text style={styles.titleAuthorization}>Log in</Text>
            </View>
        </View>
    );
};
