import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    editBox: {
        position: 'absolute',
        backgroundColor: '#F5F6F8',
        width: '100%',
        height: '100%',
        bottom: 0,
    },
    editTitleBox: {
        paddingTop: 20,
        backgroundColor: '#FFFFFF',
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 8,
    },
    editArrowBack: {
        position: 'absolute',
        bottom: 20,
        left: 15,
    },
    editTitle: {
        fontFamily: 'Overlock_Bold',
        fontSize: 20,
        marginBottom: 20,
    },
    saveData: {
        position: 'absolute',
        bottom: 15,
        right: 15,
    },
    editInputBox: {
        height: 125,
        width: '100%',
        marginTop: 30,
        borderRadius: 25,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.10,
        shadowRadius: 10,
        elevation: 10,
    },
    editInputs: {
        flex: 0.5,
        borderColor: '#ECECEC',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 25,
    },
    inputTitle: {
        fontFamily: 'Overlock_Bold',
        fontSize: 18,
        width: 110,
    },
    lastInput: {
        borderBottomWidth: 0,
    },
    deleteButton: {
        width: '100%',
        height: 60,
        borderRadius: 25,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        paddingLeft: 25,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.10,
        shadowRadius: 10,
        elevation: 4,
    },
    deleteButtonText: {
        fontFamily: 'Overlock_Bold',
        color: '#DE4E65',
        fontSize: 18,
    },
    logoutButtonText: {
        fontFamily: 'Overlock_Bold',
        color: '#000000',
        fontSize: 18,
    }
});