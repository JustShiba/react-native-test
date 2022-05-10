import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    box: {
        height: '100%',
        position: 'relative',
    },
    mainBg: {
        width: '100%',
        height: '100%',
        flex: 1,
        position: 'absolute',
    },
    title: {
        backgroundColor: 'transparent',
        marginLeft: 0,
        marginRight: 'auto',
        marginTop: 30,
        fontSize: 36,
        fontFamily: 'RobotoSlab_Regular',
        fontWeight: '700',
        color: 'white',
    },
    par: {
        fontSize: 17,
        fontFamily: 'RobotoSlab_Regular',
        color: 'white',
        marginTop: 15,
    },
    but: {
        backgroundColor: 'white',
        width: '100%',
        height: 41,
        alignItems: 'center',
        borderRadius: 7,
        justifyContent: 'center',
        marginTop: 20,
    },
    but2: {
        backgroundColor: 'transparent',
        width: '100%',
        height: 41,
        alignItems: 'center',
        borderRadius: 7,
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 2,
        marginTop: 15,
    },
});
