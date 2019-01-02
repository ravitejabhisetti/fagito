import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-products-segment.style';
import { FagitoProduct } from '../fagito-components';

class FagitoProductsSegment extends Component {
    render() {
        let productsSegment = null;
        const { ...props } = this.props;
        if (props.products.length) {
            productsSegment = props.products.map((product, index) => {
                return (
                    <FagitoProduct key={index} product={product}></FagitoProduct>
                )
            })
        }
        return (
            <View style={STYLES.fagitoRow}>
                {productsSegment}
            </View>
        )
    }
}

export default FagitoProductsSegment;