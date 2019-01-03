import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { STYLES } from './fagito-product.style';

class FagitoProduct extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={STYLES.productSegment}>
                {/* <Text>{this.props.product.base.name}</Text> */}
                <Image style={STYLES.image} source={{ uri: this.props.product.image }}></Image>
            </View>
        )
    }
}

export default FagitoProduct;