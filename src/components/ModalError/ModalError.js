import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './ModalErrorStyle';

export const ModalError = () => {
    const { errorUsers } = useSelector((state) => state.users);
    const { errorAuthorization } = useSelector((state) => state.authorization);

    return (
        <View style={styles.centeredView}>
            {errorUsers || errorAuthorization ? (
                <View style={styles.modalView}>
                    <Text style={styles.errorText}>
                        {errorUsers || errorAuthorization }
                    </Text>
                </View>
            ) : null}
        </View>
    );
};
