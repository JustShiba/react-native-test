import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        bottom: 100,
        alignItems: 'flex-end',
    },
    modalView: {
        minWidth: 200,
        minHeight: 70,
        backgroundColor: 'white',
        padding: 7,
        borderRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    errorText: {
        fontFamily: 'Overlock_Bold',
        fontSize: 18,
        color: '#DE4E65',
    },
});
