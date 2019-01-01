import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-chef.style';

class FagitoChef extends Component {
    render() {
        let products = null;
        const { ...props } = this.props;
        products = props.productsList.map((productEntity, index) => {
            return (
                <View key={index}>
                    <Text>chef name is: {productEntity.base.kitchen.name}</Text>
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

export default FagitoChef;