import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-selected-products-list.style';
import { FagitoSelectedProduct } from '../fagito-components';


class FagitoSelectedProducts extends Component {
    render() {
        let selectedProducts = null;
        const { ...props } = this.props;
        if (props.selectedProducts.length) {
            selectedProducts = props.selectedProducts.map((selectedProduct, index) => {
                return (
                    <FagitoSelectedProduct key={index} product={selectedProduct}></FagitoSelectedProduct>
                )
            })
        } else {
            selectedProducts = null;
        }
        return (
            <View>
                {selectedProducts}
            </View>
        )
    }
}

export default FagitoSelectedProducts;