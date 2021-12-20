import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './ModalErrorStyle';

export const ModalError = () => {
    const { errorUsers } = useSelector((state) => state.users);
    const { errorPosts } = useSelector((state) => state.posts);
    const { errorAuthorization } = useSelector((state) => state.authorization);
    const { errorComments } = useSelector((state) => state.comments);

    return (
        <View style={styles.centeredView}>
            {errorUsers || errorPosts || errorAuthorization || errorComments ? (
                <View style={styles.modalView}>
                    <Text style={styles.errorText}>
                        {errorUsers || errorPosts || errorAuthorization || errorComments}
                    </Text>
                </View>
            ) : null}
        </View>
    );
};
