import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    postBox: {
        width: '100%',
        height: 213,
        marginBottom: 20,
        backgroundColor: 'white',
        marginTop: 5,
        borderRadius: 25,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 8,
    },
    postInformation: {
        maxWidth: '70%',
        marginLeft: 25,
        marginTop: 20,
    },
    userInformationBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userIcon: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F6F8',
        alignItems: 'center',
        padding: 8,
        borderRadius: 100,
        marginRight: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 10,
    },
    userIconText: {
        fontFamily: 'Pattaya',
        fontSize: 17,
    },
    userInformation: {
        fontFamily: 'Overlock_Bold',
        fontSize: 18,
    },
    postTitle: {
        marginTop: 15,
        fontSize: 18,
        fontFamily: 'Overlock_Bold',
        fontWeight: '700',
    },
    postBody: {
        marginTop: 8,
        fontFamily: 'Overlock_Bold',
        fontSize: 13,
        fontWeight: '700',
    },
    EditPostIcon: {
        height: 25,
        width: 25,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 15,
        right: 21,
    },
    postBackground: {
        position: 'absolute',
        right: 0,
        top: 0,
    },
    postCommentsIcon: {
        position: 'absolute',
        right: 20,
        bottom: 23,
    },
});
