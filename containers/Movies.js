import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView
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
            <ScrollView style={styles.container}>
                <MovieCategory name="Categoria" movieList={movies}/>
                <MovieCategory name="Categoria2" movieList={movies}/>
                <MovieCategory name="Categoria" movieList={movies}/>
                <MovieCategory name="Categoria" movieList={movies}/>
                <MovieCategory name="Categoria" movieList={movies}/> 
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#000000',
    },
});