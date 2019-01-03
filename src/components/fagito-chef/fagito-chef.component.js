import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-chef.style';
import { FagitoProduct, FagitoProductsSegment, ChefTags } from '../fagito-components';
import _ from 'lodash';

class FagitoChefList extends Component {
    render() {
        let products = null;
        const { ...props } = this.props;
        products = Object.keys(props.productsList).map((productEntity, index) => {
            return (
                <View style={STYLES.chefSection} key={index}>
                    <Text style={STYLES.chefName}>{productEntity}</Text>
                    <ChefTags tags={props.productsList[productEntity][0].base.kitchen.tags}></ChefTags>
                    <FagitoProductsSegment imageIndex={index} products={props.productsList[productEntity]}></FagitoProductsSegment>
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