import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    postBox: {
        position: 'relative',
        width: '100%',
        minHeight: 95,
        marginBottom: 20,
        backgroundColor: 'black',
        borderRadius: 5,
        padding: 20,
    },
    postInformation: {
        maxWidth: '70%',
        marginLeft: 25,
        marginTop: 20,
    },
    title: {
        color: 'white',
        fontSize: 13,
        fontWeight: '500',
    },
    desc: {
        color: 'white',
        fontSize: 12,
    },
});
