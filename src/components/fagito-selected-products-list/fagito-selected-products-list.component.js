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
                if (props.selectedDate === selectedProduct.selectedDate) {
                    return (
                        <FagitoSelectedProduct handleSelectedProduct={props.handleSelectedProduct}
                            key={index} product={selectedProduct}></FagitoSelectedProduct>
                    )
                }
            })
        } else {
            selectedProducts = null;
        }
        return (
            <View style={STYLES.selectedProductsSegment}>
                {selectedProducts}
            </View>
        )
    }
}

export default FagitoSelectedProducts;