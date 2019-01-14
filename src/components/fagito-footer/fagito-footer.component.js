import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-footer.style';
import { connect } from 'react-redux';
import { FagitoButton } from '../../components/fagito-components';
import * as style from '../../common/fagito-style-constants';
import { MAKE_PAYMENT, PAYMENT_LABEL_1, PAYMENT_LABEL_2, ADD_MEAL, SAVE_ADDONS, ADDON_MESSAGE_1, ADDON_MESSAGE_2, NULL } from '../../common/fagito-constants';
import _ from 'lodash';

class FagitoFooterComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let footerContent = null;
        let productsCost = 0;
        if (!this.props.modalFooter) {
            if (this.props.selectedProducts.length) {
                let currentDate = new Date().getTime();
                let currentMonth = new Date(currentDate).getMonth();
                this.props.selectedProducts.map((product, index) => {
                    if (this.props.selectedDate === product.selectedDate && product.monthOfSelectedDate >= currentMonth) {
                        productsCost += product.base.price;
                    }
                });
                if (productsCost) {
                    footerContent = (
                        <View style={STYLES.costsSegment}>
                            <View style={STYLES.paymentText}>
                                <Text style={STYLES.footerText}>{PAYMENT_LABEL_1}{productsCost + 5} (Rs {productsCost}{PAYMENT_LABEL_2}</Text>
                            </View>
                            <View style={STYLES.paymentButton}>
                                <FagitoButton borderColor={style.PAYMENT_BUTTON_BORDER} backgroundColor={style.FAGITO_BUTTON_COLOR} buttonTitle={MAKE_PAYMENT}></FagitoButton>
                            </View>
                        </View>
                    )
                } else {
                    footerContent = (
                        <Text style={STYLES.footerText}>{this.props.footerText}</Text>
                    )
                }
            } else {
                footerContent = (
                    <Text style={STYLES.footerText}>{this.props.footerText}</Text>
                )
            }
        } else {
            let mealPriceText = null;
            let addMealButton = null;
            if (!this.props.modalAddon) {
                if (!_.isEmpty(this.props.selectedProduct)) {
                    mealPriceText = (
                        <Text style={STYLES.footerText}>Rs {this.props.selectedProduct.price} + 5% GST</Text>
                    )
                }
                if (this.props.buttonInActive) {
                    addMealButton = (
                        <FagitoButton buttonInActive={this.props.buttonInActive} onButtonClick={() => { return; }}
                            borderColor={style.PAYMENT_BUTTON_BORDER}
                            backgroundColor={style.FAGITO_BUTTON_COLOR}
                            buttonTitle={ADD_MEAL}></FagitoButton>
                    )
                } else {
                    addMealButton = (<FagitoButton buttonInActive={false} onButtonClick={this.props.handleMeal}
                        borderColor={style.PAYMENT_BUTTON_BORDER}
                        backgroundColor={style.FAGITO_BUTTON_COLOR}
                        buttonTitle={ADD_MEAL}></FagitoButton>
                    )
                }
            } else {
                let productName = null;
                let addonDetails = null;
                let addonsList = '';
                if (this.props.selectedProduct.variantIndex === NULL) {
                    productName = this.props.selectedProduct.base.name;
                } else {
                    let variantIndex = this.props.selectedProduct.variantIndex;
                    productName = this.props.selectedProduct.variants[variantIndex].name;
                }
                if (this.props.addonsSelected.length) {
                    addonsList = this.props.addonsSelected.map(addon => addon.name).join(',');
                    addonDetails = (
                        <Text style={STYLES.addonMessage}>Addons: <Text style={STYLES.footerText}>{addonsList}</Text></Text>
                    )
                }
                mealPriceText = (
                    <View>
                        <Text style={[STYLES.footerText, STYLES.addonMessage]}>{ADDON_MESSAGE_1} 3 {ADDON_MESSAGE_2}</Text>
                        <Text style={STYLES.addonMessage}>{this.props.deliveryTiming.timingSelected}: <Text style={STYLES.footerText}>{productName}</Text></Text>
                        {addonDetails}
                    </View>
                )
                addMealButton = (<FagitoButton buttonInActive={false} onButtonClick={this.props.handleAddon}
                    borderColor={style.PAYMENT_BUTTON_BORDER}
                    backgroundColor={style.FAGITO_BUTTON_COLOR}
                    buttonTitle={SAVE_ADDONS}></FagitoButton>
                )
            }
            footerContent = (
                <View style={STYLES.costsSegment}>
                    <View style={STYLES.paymentText}>
                        {mealPriceText}
                    </View>
                    <View style={STYLES.paymentButton}>
                        {addMealButton}
                    </View>
                </View>
            )
        }
        return (
            <View style={STYLES.footerSegment}>
                {footerContent}
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedDate: state.deliveryTimingAndDates.selectedDate,
        monthOfSelectedDate: state.deliveryTimingAndDates.selectedMonth,
        selectedProducts: state.products.selectedProductsList,
        deliveryTiming: state.deliveryTimingAndDates.timing,
        addonsSelected: state.addons.addonsSelected
    }
}

export default connect(mapStateToProps, null)(FagitoFooterComponent);