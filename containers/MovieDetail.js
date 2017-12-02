import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';
import { connect } from 'react-redux'
import { addToCart } from '../redux/cart'

import {
    StyleSheet,
    View,
    Image, 
    Dimensions,

} from 'react-native'; 

class MovieDetail extends Component{
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
            title,
            vote_average,
            revenue,
            overview,
            release_date
        } = this.state.movie
        const releaseYear = (release_date + '').substr(0, 4);

        return (
            <Container  style={{backgroundColor: 'black'}}>
                <Content>
                <Card style={{flex: 0}}>
                    <CardItem>
                        <Left>
                            <Body>
                                <Text>{title}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image 
                            source={{uri: `https://image.tmdb.org/t/p/w500/${backdrop_path}`}}
                            style={{height: 200, width: null, flex: 1}}
                        />
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent>
                                <Icon active name="star" size={20}/>
                                <Text>{vote_average}</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent>
                                <Icon active name="money" size={20}/>
                                <Text>{revenue}</Text>
                            </Button>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon active name="calendar" size={20}/>
                                <Text>{releaseYear}</Text>
                            </Button>
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>
                                {overview}
                            </Text>
                            <Button block danger onPress={() => this.props.addToCart(this.state.movie)}>
                                <Text>ADD TO CART</Text>
                            </Button>
                        </Body>
                    </CardItem>
                </Card>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart
})

const mapDispatchToProps = (dispatch) => ({
    addToCart: movie => dispatch(addToCart(movie))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)