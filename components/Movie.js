import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';

export const Movie = ({ onPress, movie }) => {

    const { id, poster_path } = movie;

    return(
        <TouchableOpacity onPress={() => onPress(id)}>
            <Image 
                source={{uri: `https://image.tmdb.org/t/p/w500/${poster_path}`}}
                style={{width: 100, height: 150}}
            />
        </TouchableOpacity>
    )
}