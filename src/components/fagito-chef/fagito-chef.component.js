import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-chef.style';
import { FagitoProduct, FagitoProductsSegment, ChefTags } from '../fagito-components';
import { VEG_ONLY, NON_VEG_ONLY, ALL_CUISINE } from '../../common/fagito-constants';
import _ from 'lodash';

class FagitoChefList extends Component {
    render() {
        let products = null;
        const { ...props } = this.props;
        products = Object.keys(props.productsList).map((productEntity, index) => {
            let productsToBeDisplayed = [];
            let cuisinePresent = false;
            if (this.props.dietFilter === VEG_ONLY) {
                productsToBeDisplayed = props.productsList[productEntity].isVeg;
            } else if (this.props.dietFilter === NON_VEG_ONLY) {
                productsToBeDisplayed = props.productsList[productEntity].isNonVeg;
            } else {
                productsToBeDisplayed = props.productsList[productEntity].isVeg.concat(props.productsList[productEntity].isNonVeg);
            }
            if (this.props.cuisineFilter !== ALL_CUISINE) {
                cuisinePresent = _.includes(props.productsList[productEntity].tags, this.props.cuisineFilter.toLowerCase());
            } else {
                cuisinePresent = true;
            }
            if (productsToBeDisplayed.length && cuisinePresent) {
                return (
                    <View style={STYLES.chefSection} key={index}>
                        <Text style={STYLES.chefName}>{productEntity}</Text>
                        <ChefTags tags={props.productsList[productEntity].tags}></ChefTags>
                        <FagitoProductsSegment imageIndex={index} products={productsToBeDisplayed}></FagitoProductsSegment>
                    </View>
                )
            } else {
                return null;
            }
        })
        return (
            <View>
                {products}
            </View>
        )
    }
}

export default FagitoChefList;