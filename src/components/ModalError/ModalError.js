import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './ModalErrorStyle';

export const ModalError = () => {
    const { isErrorUsers, errorUsersText } = useSelector((state) => state.users.errorUsers);
    const { isErrorPosts, errorPostsText } = useSelector((state) => state.posts.errorPosts);
    const { isErrorAuthorization, errorAuthorizationText } = useSelector(
        (state) => state.authorization.errorAuthorization,
    );
    const { isErrorComments, errorCommentsText } = useSelector(
        (state) => state.comments.errorComments,
    );

    return (
        <View style={styles.centeredView}>
            {isErrorUsers || isErrorPosts || isErrorAuthorization || isErrorComments ? (
                <View style={styles.modalView}>
                    <Text style={styles.errorText}>
                        {errorUsersText || errorPostsText || errorAuthorizationText || errorCommentsText}
                    </Text>
                </View>
            ) : null}
        </View>
    );
};
