import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView
} from 'react-native';
import { MovieCategory } from '../components/MovieCategory'
import { movies } from '../mock/movies.json'
import { connect } from 'react-redux'
import { gethNowPlayingMovies } from '../redux/movies'
class Movies extends Component{
    static navigationOptions = {
        tabBarLabel: 'Movies',
    };

    constructor(props){
        super(props)
        console.log(props)
    }

    componentWillMount(){
        this.props.fetchMovies();
        console.log("Im here");
    }

    render(){
        const nowPlaying = 'https://api.themoviedb.org/3/movie/now_playing?api_key=60ff436f2769f4f8ddf76ac0cc28a39d&language=en-US&page=1'
        const topRated = 'https://api.themoviedb.org/3/movie/top_rated?api_key=60ff436f2769f4f8ddf76ac0cc28a39d&language=en-US&page=1'
        const upComing = 'https://api.themoviedb.org/3/movie/upcoming?api_key=60ff436f2769f4f8ddf76ac0cc28a39d&language=en-US&page=1'
        return (
            <ScrollView style={styles.container}>
                <MovieCategory name="Now Playing" movieURL={nowPlaying}/>
                <MovieCategory name="Top Rated" movieURL={topRated}/>
                <MovieCategory name="Up Coming" movieURL={upComing}/>
                <MovieCategory name="Categoria" movieURL={topRated}/>
                <MovieCategory name="Categoria" movieURL={topRated}/> 
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => ({
    movies: state
})

const mapDispatchToProps = (dispatch) => ({
    fetchMovies: () => dispatch(gethNowPlayingMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(Movies)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#000000',
    },
});