import React from 'react';
import { 
    Platform,
    View,
    ScrollView,
    StyleSheet,
    Image 
} from 'react-native';
import { Button, Icon, Text } from 'native-base';

export const CartListItem = ({
    movie: { 
        backdrop_path,
        title,
        quantity,
    },
    movie,
    addToCart,
    removeFromCart,
    price = 10,
}) => {

    return(<View style={styles.containerStyle}>
        <Image
            style={{flex: 1}}
            source={{uri: `https://image.tmdb.org/t/p/w185/${backdrop_path}`}}
        />
        <View style={styles.detailStyle}>
            <Text style={styles.textDetail}>{title}</Text>
            <Text style={styles.textDetail}>${price}</Text>
        </View>
        <View style={styles.qtdView}>
            <Button 
                dark
                style={styles.qtdButton}
                onPress={() => addToCart(movie)}
            >
                <Icon active name='md-add' />
            </Button>
            <Text style={{color: 'white'}}>{quantity}</Text>
            <Button 
                dark
                onPress={() => removeFromCart(movie)}
                >
                <Icon active name='md-remove' />
            </Button>
        </View>
    </View>)


}

const styles = StyleSheet.create({
    containerStyle: {
      flexDirection: 'row',
      flex: 1,
      borderBottomWidth: 1,
      borderColor: '#e2e2e2',
      height: 100,
      padding: 10,
      paddingLeft: 15,
      backgroundColor: 'black'
    },
    detailStyle: {
        padding: 10,
        flexDirection: 'column',
        flex: 1,
        alignContent: 'center'
    },
    textDetail: {
        fontSize: 19,
        color: 'white'
    },
    qtdView: {
        flexDirection: 'row',
        flex: 1
    },
    qtdButton: {
        justifyContent: 'center'
    }
})