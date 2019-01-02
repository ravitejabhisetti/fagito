import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-product.style';

class FagitoProduct extends Component {
    render() {
        return (
            <View style={STYLES.productSegment}>
                <Text>{this.props.product.base.name}</Text>
            </View>
        )
    }
}

export default FagitoProduct;