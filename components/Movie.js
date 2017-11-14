import React, { Component } from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';

export const Movie = ({ onPress, movie }) => {

    const { id, poster_path, title } = movie;

    return(
        <View style={{width: 125, marginLeft: 2 }}>
            <TouchableOpacity onPress={() => onPress(id)}>
                <Text 
                    style={{
                        color: 'white', 
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        minHeight: 40
                    }}
                    ellipsizeMode={'tail'}
                    numberOfLines={2}
                >
                    {title}
                </Text>
                <Image 
                    source={{uri: `https://image.tmdb.org/t/p/w500/${poster_path}`}}
                    style={{width: 125, height: 175}}
                />
                <View style={{width: 125, height: 40, flexDirection: 'row', flex: 1}}>
                    <View style={{flexDirection: 'row', flex: 1, backgroundColor: 'white', height: 40}}>
                        <Text>fdsfdsfdsfds</Text>
                    </View>
                    <View style={{flexDirection: 'row', flex: 1, backgroundColor: 'blue', height: 40}}>
                        <Text>fdsfdsfds</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}
