import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';

export const ToOrder = ({ orderInformation }) => {
    const { name } = orderInformation.item;
    return (
        <View
            style={{
                width: '100%',
                borderColor: '#DCDCDC',
                borderBottomWidth: 1,
                paddingVertical: 15,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <Text style={{ fontSize: 18, fontWeight: '400' }}>{name}</Text>
            <View
                style={{
                    borderColor: '#808080',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderRadius: 8,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <TouchableOpacity
                    style={{
                        width: 25,
                        height: 35,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingLeft: 15,
                        marginRight: 15,
                    }}
                    onPress={() => {
                        console.log('remove');
                    }}
                    activeOpacity="0.5"
                >
                    <Text
                        style={{
                            fontFamily: 'Overlock_Regular',
                            fontSize: 25,
                            color: 'black',
                            letterSpacing: -1.8,
                        }}
                    >
                        ---
                    </Text>
                </TouchableOpacity>
                <Text
                    style={{
                        fontSize: 18,
                        color: 'black',
                    }}
                >
                    1
                </Text>
                <TouchableOpacity
                    style={{
                        width: 25,
                        height: 35,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingRight: 10,
                        marginLeft: 15,
                    }}
                    onPress={() => {
                        console.log('add');
                    }}
                    activeOpacity="0.5"
                >
                    <Text
                        style={{
                            fontFamily: 'Overlock_Regular',
                            fontSize: 25,
                            color: 'black',
                            letterSpacing: -1,
                        }}
                    >
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
