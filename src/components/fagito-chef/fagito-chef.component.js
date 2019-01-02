import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-chef.style';
import { FagitoProduct, FagitoProductsSegment } from '../fagito-components';

class FagitoChefList extends Component {
    render() {
        let products = null;
        const { ...props } = this.props;
        products = Object.keys(props.productsList).map((productEntity, index) => {
            return (
                <View key={index}>
                    <Text>chef name: {productEntity}</Text>
                    <Text>Tags are: {props.productsList[productEntity][0].base.kitchen.tags}</Text>
                    <FagitoProductsSegment products={props.productsList[productEntity]}></FagitoProductsSegment>
                </View>
            )
        })
        return (
            <View>
                {products}
            </View>
        )
    }
}

export default FagitoChefList;