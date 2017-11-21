import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {  MovieList } from './MovieList';

export class MovieCategory extends Component{

    constructor(props){
        super(props)
        this.state = {
            movieList: []
        }
    }

    componentWillMount(){
        this.fetchMovieList()
    }
    
    fetchMovieList = () =>{
        fetch(this.props.movieURL)
            .then(response => response.json())
            .then(body => body.results)
            .then(movieList => this.setState({movieList}))
    }

    render = () =>  (
        <View style={styles.container}>
            <Text style={styles.title}>{this.props.name}</Text>
            <MovieList dataList={this.state.movieList}/>
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