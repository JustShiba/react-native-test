import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F6F8',
        height: '100%',
    },
    wrapper: {
        paddingTop: Platform.OS === 'ios' ? 0 : 10,
        paddingBottom: Platform.OS === 'ios' ? 20 : 10,
        paddingHorizontal: 30,
    },
});
