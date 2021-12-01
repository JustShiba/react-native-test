import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    SafeAreaView,
} from 'react-native';

export const Menu = () => {
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <SafeAreaView>
                <TextInput />
                <Text>Hello Menu!</Text>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        // position: 'absolute',
        // bottom: 0,
        marginTop: 'auto',
        marginBottom: 15,
    },
});
