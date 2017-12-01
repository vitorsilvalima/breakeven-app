import React from 'react';
import { Platform, View, FlatList, StyleSheet } from 'react-native';
import { CartListItem } from './CartListItem'

export const CartList = () => (<FlatList
    data={[{key: 'a'}, {key: 'b'}, {key: 'b'}]}
    renderItem={({item}) => <CartListItem/>}
/>)