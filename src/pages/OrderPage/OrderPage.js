import React, { useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity } from 'react-native';
import { Image, View } from 'react-native';
import { useSelector } from 'react-redux';

import { ToOrder } from '../../components/ToOrder/ToOrder';
import { orders } from './orders';

export const OrderPage = () => {
    const [address, setAddress] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);
    const [refresh, setRefresh] = useState(false);
    const { useEng } = useSelector((state) => state.users)

    const universalSetTotalAmount = (amount, previosAmount, action) => {
        if (action === 'clear') {
            setTotalAmount(0);
            setRefresh(!refresh);
            return;
        }
        const newAmount = totalAmount - previosAmount + amount;
        setTotalAmount(newAmount);
    };

    return (
        <View style={{ width: '100%', height: '100%' }}>
            <Image
                source={require('../../../assets/images/order_bg.png')}
                resizeMode="stretch"
                style={{ width: '100%', height: '35%' }}
            />
            <View style={{ position: 'absolute', width: '90%', alignSelf: 'center', top: 90 }}>
                <View
                    style={{
                        backgroundColor: 'white',
                        width: 120,
                        height: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 20,
                        zIndex: 5,
                    }}
                >
                    <Text style={{ fontSize: 17, fontWeight: '800', letterSpacing: 0.2 }}>
                        {useEng ? `35-45 min` : `35-45 мин`}
                    </Text>
                </View>
                <View
                    style={{
                        backgroundColor: 'black',
                        width: 130,
                        height: 60,
                        marginTop: -20,
                        borderRadius: 20,
                        borderTopLeftRadius: 0,
                    }}
                >
                    <Text
                        style={{
                            position: 'absolute',
                            left: 14,
                            bottom: 10,
                            color: 'white',
                            fontWeight: '500',
                            fontSize: 15,
                        }}
                    >
                        {useEng ? `Delivery` : `Доставка`}
                    </Text>
                </View>
            </View>
            <View
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '70%',
                    backgroundColor: 'white',
                    bottom: 0,
                    borderTopLeftRadius: 25,
                    borderTopEndRadius: 25,
                    paddingHorizontal: 30,
                    paddingTop: 25,
                    display: 'flex',
                }}
            >
                <FlatList
                    scrollEnabled={true}
                    data={orders}
                    renderItem={(order) => <ToOrder
                        orderInformation={order}
                        universalSetTotalAmount={universalSetTotalAmount}
                        refresh={refresh}
                    />}
                    keyExtractor={(orders) => orders.id}
                />
                <View
                    style={{
                        width: '100%',
                        marginBottom: 10,
                        alignItems: 'flex-end',
                    }}
                >
                    <TextInput
                        style={{
                            width: '100%',
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            paddingBottom: 11,
                            paddingLeft: 15,
                            paddingTop: 11,
                            paddingRight: 15,
                            color: 'white',
                            fontSize: 18,
                            letterSpacing: 1,
                            marginBottom: 20,
                        }}
                        placeholder={useEng ? `Your address` : `Ваш адрес`}
                        placeholderTextColor="#808080"
                        autoCorrect={true}
                        autoCapitalize="none"
                        defaultValue={address}
                        onChangeText={(text) => setAddress(text)}
                    />
                    <TouchableOpacity
                        style={{
                            position: 'relative',
                            width: 200,
                            height: 35,
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingLeft: 15,
                            borderColor: '#808080',
                            justifyContent: 'center',
                            borderWidth: 1,
                            borderRadius: 8,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                        onPress={() => {
                            universalSetTotalAmount(null, null, 'clear');
                        }}
                        activeOpacity="0.5"
                    >
                        <View
                            style={{
                                width: '60%',
                                height: '100%',
                                borderRightColor: '#808080',
                                borderRightWidth: 1,
                                justifyContent: 'center',
                                paddingLeft: 14,
                            }}
                        >
                            <Text style={{ fontSize: 17, fontWeight: '300' }}>{useEng ? `To order` : `Заказать`}</Text>
                        </View>
                        <View
                            style={{
                                width: '40%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                            }}
                        >
                            <Text style={{ fontSize: 17, fontWeight: '300' }}>{`${totalAmount * 25} р`}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
