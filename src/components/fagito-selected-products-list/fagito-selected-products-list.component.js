import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-selected-products-list.style';
import { FagitoSelectedProduct } from '../fagito-components';


class FagitoSelectedProducts extends Component {
    render() {
        let selectedProducts = null;
        const { ...props } = this.props;
        if (props.selectedProducts && props.selectedProducts.length) {
            let currentDate = new Date().getTime();
            let currentMonth = new Date(currentDate).getMonth();
            selectedProducts = props.selectedProducts.map((selectedProduct, index) => {
                if (props.selectedDate === selectedProduct.selectedDate && selectedProduct.monthOfSelectedDate >= currentMonth) {
                    return (
                        <FagitoSelectedProduct handleSelectedProduct={() => props.handleSelectedProduct(selectedProduct, index)}
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