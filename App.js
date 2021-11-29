import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';

export default function App() {
    return (
        <View>
            <Header />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'orange',
    },
});
