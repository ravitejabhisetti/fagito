import React, { Component } from 'react';
import { View, Text, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { STYLES } from './fagito-selected-product.style';
import Icon from 'react-native-vector-icons/Ionicons';
import * as style from '../../common/fagito-style-constants';
import { INSUFFICIENT_BALANCE, NULL } from '../../common/fagito-constants';

class FagitoSelectedProduct extends Component {
    render() {
        let productColor = this.props.product.timingSelected === 'lunch' ?
            STYLES.lunchProductSelectedBackground : STYLES.dinnerProductSelectedBackground;
        let chefName = null;
        let productName = null;
        let basePrice = null;
        let addons = null;
        let addonsString = '';
        if (this.props.product.variantIndex === NULL) {
            chefName = this.props.product.base.kitchen.name;
            productName = this.props.product.base.name;
            basePrice = this.props.product.base.price;
        } else {
            let index = this.props.product.variantIndex;
            chefName = this.props.product.variants[index].kitchen.name;
            productName = this.props.product.variants[index].name;
            basePrice = this.props.product.variants[index].price;
        }
        if (this.props.product.addons && this.props.product.addons.length > 0) {
            addonsString = this.props.product.addons.map(addon => addon.name).join(', ');
            this.props.product.addons.map((addon, index) => {
                basePrice = basePrice + addon.price;
            })
            addons = (
                <Text style={STYLES.selectedProductChef}>Addons: <Text style={STYLES.selectedProductName}>{addonsString}</Text></Text>
            )
        }
        return (
            <TouchableHighlight underlayColor={this.props.product.timingSelected === 'lunch' ? style.LUNCH_PRODUCT : style.DINNER_PRODUCT}
                onPress={this.props.handleSelectedProduct}
                activeOpacity={1} style={[STYLES.selectedProductSegment,
                    productColor]}>
                <View>
                    <View style={STYLES.timingRow}>
                        <Icon color={style.TIMING_SELECTED_COLOR} name="md-home" size={15} />
                        <Text style={STYLES.timingSelected}>{this.props.product.timingSelected}</Text>
                        <View style={STYLES.moreIcon}>
                            <Icon color={style.TIMING_SELECTED_COLOR} name="md-more" size={15} />
                        </View>
                    </View>
                    <Text style={STYLES.selectedProductChef}>{chefName}</Text>
                    <Text style={STYLES.selectedProductName}>{productName}</Text>
                    {addons}
                    <Text style={STYLES.selectedProductPrice}>Rs {basePrice} + Rs 5 GST</Text>
                    <Text style={STYLES.insufficientBalance}>{INSUFFICIENT_BALANCE}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}

export default FagitoSelectedProduct;