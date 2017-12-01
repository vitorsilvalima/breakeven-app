import React, { Component } from 'react';
import { Platform, View, ScrollView, StyleSheet } from 'react-native';
import { CartList } from '../components/CartList';

export class MovieCart extends Component {
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

    render = () => (
        <ScrollView style={styles.main}>
            <CartList/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main : {
        flex: 1,
        backgroundColor: 'white'
    }
})