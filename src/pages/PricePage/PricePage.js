import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Hookah } from '../../components/Hookah/Hookah';
import { getAllPostsStart } from '../../redux/posts/postsReducer';
import { getAllUsersStart } from '../../redux/users/usersReducer';
import { allPrices } from './prices';

export const PricePage = ({ navigation }) => {
    const dispatch = useDispatch();
    const { loadingPosts } = useSelector((state) => state.posts);

    const getPostsWithUsers = () => {
        dispatch(getAllUsersStart());
        dispatch(getAllPostsStart());
    };

    return (
        <View>
            {loadingPosts ? (
                <ActivityIndicator size="large" color="#FAB15F" />
            ) : (
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
            )}
        </View>
    );
};
