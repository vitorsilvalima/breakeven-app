import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'; 

export class MovieDetail extends PureComponent{
    static navigationOptions = {
        tabBarVisible: false,
        headerMode: 'screen',
    };

    constructor(props){
        super(props)
        console.log(props.navigation.state.params.id)
    }
    render = () => {
        return (<View style={{
            backgroundColor: 'black',
            flex: 1
        }}>
            
        </View>)
    }
}