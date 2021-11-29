import React from 'react';
import { Image, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

export const LoginPage = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="transparent" />
            <Image
                style={styles.orangeLine}
                source={require('../assets/images/orange-line.png')}
                resizeMethod="auto"
            />
            <Text style={styles.title}>Alredy singed up?</Text>
            <View style={styles.inputsBox}>
                <View>
                    <TextInput style={[styles.inputs, styles.emailInput]} />
                </View>
                <View>
                    <TextInput style={styles.inputs} />
                </View>
                <LinearGradient
                    colors={['#FAAE5F', '#F86F5C']}
                    style={styles.submitButtonGradient}
                    start={{ x: 0.1, y: 0.2 }}
                    locations={[0.1, 0.8]}
                >
                    <Image source={require('../assets/images/Arrow.png')} />
                </LinearGradient>
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
        // fontFamily: 'RobotoSlab-Medium',
        fontWeight: '700',
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
        textTransform: 'uppercase',
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
        position: 'absolute',
        right: -15,
        top: '30%',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
