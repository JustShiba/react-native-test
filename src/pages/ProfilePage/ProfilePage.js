import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { orders } from './orders';
import { Order } from '../../components/Order/Order';
import { logout } from '../../redux/authorization/authorizationReducer';
import { changeLanguage } from '../../redux/users/usersReducer';

export const ProfilePage = () => {
    const { useEng } = useSelector((state) => state.users);
    const dispatch = useDispatch();


    return (
        <View style={{ width: '100%', height: '100%' }}>
            <Image
                style={{ width: '100%', height: '35%' }}
                source={require('../../../assets/images/profile_bg.png')}
                resizeMethod="scale"
            />
            <View style={{ position: 'absolute', width: '85%', alignSelf: 'center', top: 45 }}>
                <View
                    style={{
                        width: '100%',
                        height: 30,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <TouchableOpacity style={{ width: 50, height: 50 }} activeOpacity="0.8" onPress={() => dispatch(changeLanguage())}>
                        <Text
                            style={{
                                color: 'white',
                                fontFamily: 'Overlock_Bold',
                                fontSize: 18,
                            }}
                        >
                            {useEng? `Rus`:`Eng`}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity="0.8" style={{ right: 0 }} onPress={() => {
                        dispatch(logout());
                    }}>
                        <Text
                            style={{
                                color: 'white',
                                fontFamily: 'Overlock_Bold',
                                fontSize: 18,
                            }}
                        >
                            Out
                        </Text>
                    </TouchableOpacity>
                </View>

                <Text
                    style={{
                        color: 'white',
                        fontSize: 22,
                        fontFamily: 'RobotoSlab_Regular',
                    }}
                >
                    {useEng? `Welcome back, Виталий Ган`:`С возвращением, Виталий Ган`}
                </Text>
                <Text style={styles.info}>TowerDeLonghy</Text>
                <Text style={styles.info}>Vitala_gan@icloud.com</Text>
                <Text style={styles.info}>+375296717430</Text>
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
                    paddingTop: 35,
                }}
            >
                <Text style={{ fontWeight: '800', fontSize: 20, letterSpacing: 1 }}>
                {useEng? `Your orders`:`Ваши заказы`}
                </Text>
                <FlatList
                    scrollEnabled={true}
                    data={orders}
                    renderItem={(order) => <Order orderInformation={order} />}
                    keyExtractor={(order) => order.id}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    info: {
        fontSize: 15,
        color: 'white',
        marginTop: 5,
    },
});
