import React, { Component } from 'react';
import { FlatList, View, StyleSheet, VirtualizedList } from 'react-native';
import { Movie } from './Movie';


export const MovieList = ({dataList, fetchMore, goToMovieDetail}) =>  {

    return (<FlatList 
        data={dataList.map((movie, index) => ({...movie, key: index}))}
        bounces={false}
        horizontal
        extraData={dataList.length}
        onEndReachedThreshold={.5}
        onEndReached={fetchMore}
        renderItem = {({item}) => <Movie movie={item} onPress={goToMovieDetail}/>}
    />)
}