import React, {useEffect, useState} from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';

export const ToOrder = ({ orderInformation, universalSetTotalAmount, refresh }) => {
    const { name } = orderInformation.item;
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        setAmount(0)
    }, [refresh])

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
                        const newNumber = amount - 1; 
                        if(newNumber < 0) return
                        universalSetTotalAmount(newNumber, amount);
                        setAmount(newNumber);
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
                    {amount}
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
                    onPress={() =>  {
                        const newNumber = amount + 1 
                        if(newNumber > 10) return
                        universalSetTotalAmount(newNumber, amount);
                        setAmount(newNumber);
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
