import React from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const ProductDetails = () => {
    return (
        <View style = {styles.container} >
            <Text>Product Details</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ProductDetails;