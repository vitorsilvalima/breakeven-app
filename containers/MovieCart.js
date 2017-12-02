import React, { Component } from 'react';
import { Platform, View, ScrollView, StyleSheet } from 'react-native';
import { CartList } from '../components/CartList';
import { connect } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/cart'

class MovieCart extends Component {
    static navigationOptions = {
        title: 'Movie Cart',
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
    }

    render = () => {
        console.log(this.props.cart)

        return (
            <ScrollView style={styles.main}>
                <CartList
                    cartList={this.props.cart}
                    addToCart={this.props.addToCart} 
                    removeFromCart={this.props.removeFromCart}
                />
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart
})

const mapDispatchToProps = (dispatch) => ({
    addToCart: movie => dispatch(addToCart(movie)),
    removeFromCart: movie => dispatch(removeFromCart(movie))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieCart)


const styles = StyleSheet.create({
    main : {
        flex: 1,
        backgroundColor: 'white'
    }
})