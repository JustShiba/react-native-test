import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

export const LoginPage = () => {
    const [userEmail, setuserEmail] = useState('');
    const [userPassword, setuserPassword] = useState('');
    return (
        <View>
            <Image
                style={styles.orangeLine}
                source={require('../../assets/images/orange-line.png')}
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
                        <Image source={require('../../assets/images/Arrow.png')} />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.buttonToSignup}
                onPress={() => console.log('Go to sign up')}
            >
                <Text style={styles.linkToSignup}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.boxTitleAuthorization}>
                <Text style={styles.titleAuthorization}>Log in</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    orangeLine: {
        width: '100%',
        height: 250,
    },
    title: {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: -30,
        textTransform: 'uppercase',
        fontSize: 22,
        fontFamily: 'RobotoSlab_Bold',
        fontWeight: '800',
        color: '#2A4D60',
    },
    inputsBox: {
        marginTop: 40,
        height: 120,
        width: '75%',
        backgroundColor: '#FFFFFF',
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        position: 'relative',
    },
    inputs: {
        height: 60,
        width: '100%',
        margin: 0,
        fontSize: 18,
        paddingHorizontal: 15,
        color: '#00000080',
    },
    emailInput: {
        borderBottomColor: '#ECECEC',
        borderBottomWidth: 2,
    },
    submitButtonGradient: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    linkToSignup: {
        fontSize: 16,
        textTransform: 'uppercase',
        color: '#A0A0A0',
        textDecorationLine: 'underline',
    },
    buttonToSignup: {
        marginTop: '10%',
        marginLeft: '60%',
    },
    boxTitleAuthorization: {
        fontSize: 20,
        maxWidth: 160,
        position: 'absolute',
        bottom: '-30%',
        paddingLeft: 39,
        paddingRight: 39,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: 'white',
        borderBottomRightRadius: 50,
        borderTopRightRadius: 50,
    },
    titleAuthorization: {
        textTransform: 'uppercase',
        fontSize: 20,
        fontFamily: 'RobotoSlab_Bold',
        fontWeight: '800',
        color: '#2A4D60',
    },
});
