import React, { Component } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Movie } from './Movie';


export const MovieList = ({dataList, fetchMore, goToMovieDetail}) =>  {

    return (<FlatList 
        data={dataList.map((movie, index) => Object.assign({}, movie, {key: index}))}
        horizontal
        bounces={false}
        extraData={dataList.length}
        onEndReachedThreshold={.5}
        onEndReached={fetchMore}
        ItemSeparatorComponent={() => <View style={ { width: 50, height: 10, backgroundColor: 'black' }}/>}
        renderItem = {({item}) => <Movie movie={item} onPress={goToMovieDetail}/>}
    />)
}