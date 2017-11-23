import React, { PureComponent } from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';

export class Movie extends PureComponent {

    constructor(props){
        super(props)
    }

    render = () =>{
        const { onPress, movie } = this.props
        const { id, poster_path, title, vote_average,release_date } = movie;
        const year = new Date(release_date).getFullYear();
        return(
            <View style={{width: 125, marginLeft: 2 }}>
                <TouchableOpacity onPress={() => onPress(id)}>
                    <Text 
                        style={{
                            color: 'white', 
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            minHeight: 40
                        }}
                        ellipsizeMode={'tail'}
                        numberOfLines={2}
                    >
                        {title}
                    </Text>
                    <Image 
                        source={{uri: `https://image.tmdb.org/t/p/w500/${poster_path}`}}
                        style={{width: 125, height: 175}}
                    />
                    <View style={{flex: 1, flexDirection: 'row', position: 'absolute', bottom: 0, backgroundColor: 'rgba(52, 52, 52, 0.7)' }}>
                            <View style={{flex: 1, alignItems: 'center'}}>
                                <Text style={{color: 'white'}}>{vote_average}</Text>
                            </View>
                            <View style={{flex: 1, alignItems: 'center'}}>
                                <Text style={{color: 'white'}}>{year}</Text>
                            </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
