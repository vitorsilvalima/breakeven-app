import React, { Component } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Movie } from './Movie';

export const MovieList = ({dataList, fetchMore}) =>  {

    const onPress = item => console.log(item)
    return (<FlatList 
        data={dataList}
        keyExtractor={item => item.id}
        horizontal
        bounces={false}
        extraData={dataList}
        onEndReachedThreshold={.7}
        onEndReached={fetchMore}
        ItemSeparatorComponent={() => <View style={ { width: 5, height: 10 }}/>}
        renderItem = {({item}) => <Movie movie={item} onPress={onPress}></Movie>}
    />)
}