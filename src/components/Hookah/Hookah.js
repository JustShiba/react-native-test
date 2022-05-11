import React from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './hookahStyles';

export const Hookah = ({ hookahInformation }) => {
    const { name, desc, price } = hookahInformation.item;
    const { useEng } = useSelector((state) => state.users)

    return (
        <View style={styles.postBox}>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                }}
            >
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.title}>{price}</Text>
            </View>
            <FlatList
                style={{
                    marginTop: 5,
                    marginLeft: 15,
                }}
                scrollEnabled={true}
                data={desc}
                renderItem={(desc) => <Text style={styles.desc}>{desc.item.name}</Text>}
                keyExtractor={(desc) => desc.id}
            />
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    backgroundColor: 'transparent',
                    borderRadius: 23,
                    width: 90,
                    height: 24,
                    borderColor: 'white',
                    borderWidth: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    right: 20,
                    bottom: 20,
                }}
                onPress={() => {
                    console.log('log');
                }}
                activeOpacity="0.8"
            >
                <Text
                    style={{
                        fontFamily: 'Overlock_Regular',
                        fontSize: 13,
                        color: 'white',
                        letterSpacing: 1,
                    }}
                >
                    {useEng ? `Add` : `Добавить`}
                </Text>
            </TouchableOpacity>
        </View>
    );
};
