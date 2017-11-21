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
            movieList: [],
            total_pages: 1,
            page: 1,
            loading: true,
        }
    }

    componentWillMount(){
        this.fetchMovieList()
    }
    
    fetchMovieList = (page = 1) =>{
        if(page <= this.state.total_pages){
            const { movieList } = this.state
            fetch(`${this.props.movieURL}&page=${page}`)
                .then(response => response.json())
                .then(body => this.setState({
                    movieList: [...movieList, ...body.results],
                    page,
                    total_pages: body.total_pages,
                    loading: false
                }))
        }
    }

    fetchMore = () => {
        if(!this.state.loading){
            this.setState({loading: true})
            console.log(this.state.page)
            this.fetchMovieList(this.state.page + 1)
        }
    }

    render = () =>  (
        <View style={styles.container}>
            <Text style={styles.title}>{this.props.name}</Text>
            <MovieList fetchMore={this.fetchMore} dataList={this.state.movieList}/>
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