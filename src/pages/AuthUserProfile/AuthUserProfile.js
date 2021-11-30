import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const AuthUserProfile = () => {
    return (
        <View>
            <Text style={styles.text}>Hello World</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Pattaya',
        fontSize: 50,
    },
});
