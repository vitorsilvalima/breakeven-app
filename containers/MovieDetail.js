import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, 
    Dimensions
} from 'react-native'; 

export class MovieDetail extends Component{
    static navigationOptions = {
        title: 'Movie Detail',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'black',
          borderBottomColor: 'red',
          borderBottomWidth: 2,
        },
        headerTitleStyle: {
          fontSize: 18,
        },
    };

    constructor(props){
        super(props)
        this.state = {
            loading: true,
            movie: {}
        }
    }

    componentWillMount(){
        this.fetchMovieDetails(this.props.navigation.state.params.id)
    }

    fetchMovieDetails = (movieID) => {
        fetch(
            `https://api.themoviedb.org/3/movie/${movieID}
            ?api_key=60ff436f2769f4f8ddf76ac0cc28a39d`
        )
        .then(response => response.json())
        .then(movie => this.setState({
            movie,
            loading: false
        }))
    }


    render = () => {
        const { 
            backdrop_path,
            title
        } = this.state.movie

        return (
            <View style={{
                backgroundColor: 'black',
                flex: 1,
                flexDirection: 'column',
                padding: 10
            }}>
                <Text style={{color: 'white'}}>{title}</Text>
                <Image 
                    source={{uri: `https://image.tmdb.org/t/p/w500/${backdrop_path}`}}
                    style={{
                        width: Dimensions.get('screen').width,
                        height: 200
                    }}/>
            </View>)
    }
}