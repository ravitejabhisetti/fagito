import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-selected-product.style';

class FagitoSelectedProduct extends Component {
    render() {
        return (
            <View>
                <Text>name: {this.props.product.base.kitchen.name}</Text>
            </View>
        )
    }
}

export default FagitoSelectedProduct;