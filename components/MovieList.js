import React, { Component } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Movie } from './Movie';

export const MovieList = ({dataList}) =>  {

    const onPress = item => console.log(item)
    
    return (<FlatList 
        data={dataList.map((item, i) => ({...item, key: i }))}
        horizontal
        ItemSeparatorComponent={() => <View style={ { width: 5, height: 10 }}/>}
        renderItem = {({item}) => <Movie movie={item} onPress={onPress}></Movie>}
    />)
}