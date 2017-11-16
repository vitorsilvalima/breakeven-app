/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Movies } from './containers/Movies'
import { TabNavigator } from 'react-navigation'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev men',
});

export default App = TabNavigator({
  Windows: {
    screen: Movies,
  }
}, {
  tabBarPosition: 'top',
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