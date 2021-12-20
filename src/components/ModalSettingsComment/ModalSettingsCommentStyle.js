import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: 200,
        height: 125,
        paddingTop: 7,
        paddingBottom: 7,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    setting: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.3,
    },
    settingText: {
        fontFamily: 'Overlock_Bold',
        fontSize: 18,
    },
    settingDelete: {
        color: '#DE4E65',
    },
});
