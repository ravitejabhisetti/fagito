import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-selected-product.style';
import Icon from 'react-native-vector-icons/Ionicons';
import * as style from '../../common/fagito-style-constants';
import { INSUFFICIENT_BALANCE } from '../../common/fagito-constants';

class FagitoSelectedProduct extends Component {
    render() {
        return (
            <View style={[STYLES.selectedProductSegment,
            this.props.product.timingSelected === 'lunch' ? STYLES.lunchProductSelectedBackground : STYLES.dinnerProductSelectedBackground]}>
                <View style={STYLES.timingRow}>
                    <Icon color={style.TIMING_SELECTED_COLOR} name="md-home" size={15} />
                    <Text style={STYLES.timingSelected}>{this.props.product.timingSelected}</Text>
                    <View style={STYLES.moreIcon}>
                        <Icon color={style.TIMING_SELECTED_COLOR} name="md-more" size={15} />
                    </View>
                </View>
                <Text style={STYLES.selectedProductChef}>{this.props.product.base.kitchen.name}</Text>
                <Text style={STYLES.selectedProductName}>{this.props.product.base.name}</Text>
                <Text style={STYLES.selectedProductPrice}>Rs {this.props.product.base.price} + Rs 5 GST</Text>
                <Text style={STYLES.insufficientBalance}>{INSUFFICIENT_BALANCE}</Text>
            </View>
        )
    }
}

export default FagitoSelectedProduct;