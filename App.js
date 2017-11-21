/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'
import  Movies  from './containers/Movies'
import { Checkout } from './containers/Checkout'
import { MovieDetail } from './containers/MovieDetail'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev men',
});


const routeConfiguration = {
	Movies: { screen: Movies },
	MovieDetail: { 
    screen: MovieDetail,
    path: 'movies/:id',
  },
};

const stackNavigatorConfiguration = {
	headerMode: 'none',
	initialRoute: 'Movies'
};

export const tabOne = StackNavigator(routeConfiguration, stackNavigatorConfiguration);


export default App = TabNavigator({
  Movies: {
    screen: tabOne,
  },
  Checkout: {
    screen: Checkout
  }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: 'red',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#546E7A'
    },
  },
});