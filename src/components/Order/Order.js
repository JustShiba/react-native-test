import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

export const Order = ({ orderInformation }) => {
    const { name, date, amount } = orderInformation.item;
    const { useEng } = useSelector((state) => state.users);

    return (
        <View
            style={{
                width: '100%',
                borderColor: '#DCDCDC',
                borderBottomWidth: 1,
                paddingBottom: 10,
            }}
        >
            <FlatList
                style={{
                    marginTop: 15,
                    marginLeft: 15,
                }}
                data={name}
                renderItem={(name) => (
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Text style={{ fontWeight: '300', fontSize: 18, marginBottom: 7 }}>
                            {name.item.name}
                        </Text>
                        <Text style={{ fontWeight: '500', fontSize: 18, marginBottom: 7 }}>
                            {name.item.number}
                        </Text>
                    </View>
                )}
                keyExtractor={(name) => name.id}
            />
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                }}
            >
                <Text style={{ marginLeft: 35 }}>{date}</Text>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>{amount}</Text>
            </View>
        </View>
    );
};
