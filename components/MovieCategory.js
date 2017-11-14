import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {  MovieList } from './MovieList';

export const MovieCategory = ({ name, movieList }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <MovieList dataList={movieList}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    title: {
        color: 'white',
        fontSize: 25,
        marginBottom: 5
    }
})