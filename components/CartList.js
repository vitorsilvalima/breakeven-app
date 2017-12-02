import React from 'react';
import { Platform, View, FlatList, StyleSheet } from 'react-native';
import { CartListItem } from './CartListItem'

export const CartList = ({cartList, addToCart, removeFromCart}) => (<FlatList
    data={cartList}
    keyExtractor={item => item.id}
    extraData={cartList}
    renderItem={({item}) => <CartListItem 
        movie={item} 
        addToCart={addToCart}
        removeFromCart={removeFromCart}
    />}
/>)