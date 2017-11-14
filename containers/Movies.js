import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { MovieCategory } from '../components/MovieCategory'
import { movies } from '../mock/movies.json'

export class Movies extends Component{
    static navigationOptions = {
        tabBarLabel: 'Movies',
    };

    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={styles.container}>
                <MovieCategory name="Categoria" movieList={movies}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000000',
    },
});