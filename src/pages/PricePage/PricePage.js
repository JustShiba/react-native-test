import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';

import { Hookah } from '../../components/Hookah/Hookah';
import { allPrices } from './prices';

export const PricePage = ({ navigation }) => {


    return (
        <View>
            <View style={{ height: '100%' }}>
                <Image
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    source={require('../../../assets/images/price_bg.png')}
                    resizeMethod="scale"
                />
                <View
                    style={{
                        position: 'absolute',
                        width: '80%',
                        height: '95%',
                        alignSelf: 'center',
                        marginTop: 50,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 40,
                            color: 'white',
                            alignSelf: 'center',
                            fontWeight: '600',
                        }}
                    >
                        Цены
                    </Text>
                    <FlatList
                        scrollEnabled={true}
                        data={allPrices}
                        style={{ marginTop: 25 }}
                        renderItem={(hookah) => <Hookah hookahInformation={hookah} />}
                        keyExtractor={(hookah) => hookah.id}
                    />
                </View>
            </View>
        </View>
    );
};
