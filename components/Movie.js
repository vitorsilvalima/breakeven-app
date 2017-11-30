import React, { PureComponent } from 'react';
import { Image, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export class Movie extends PureComponent {

    constructor(props){
        super(props)
    }

    render = () =>{
        const { onPress, movie } = this.props
        const { id, poster_path, title, vote_average,release_date } = movie;
        const year = new Date(release_date).getFullYear();
        return(
            <TouchableOpacity onPress={() => onPress(id)}>
                <View style={styles.main}>
                    <Text 
                        style={styles.title}
                        ellipsizeMode={'tail'}
                        numberOfLines={2}
                    >
                        {title}
                    </Text>
                    <Image 
                        source={{uri: `https://image.tmdb.org/t/p/w185/${poster_path}`}}

                        style={styles.imageCover}
                    />
                    <View style={styles.score}>
                            <View style={styles.scoreItem}>
                                <Text style={{color: 'white'}}>{vote_average}</Text>
                            </View>
                            <View style={styles.scoreItem}>
                                <Text style={{color: 'white'}}>{year}</Text>
                            </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        width: 125,
        marginLeft: 2,
        height: 200,
    },
    title: {
        color: 'white', 
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 40
    },
    imageCover: {width: 125, height: 175},
    score: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(52, 52, 52, 0.7)'
    },
    scoreItem: {flex: 1, alignItems: 'center'}
})