import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-footer.style';
import { connect } from 'react-redux';
import { FagitoButton } from '../../components/fagito-components';
import * as style from '../../common/fagito-style-constants';
import {
    MAKE_PAYMENT, PAYMENT_LABEL_1, PAYMENT_LABEL_2, ADD_MEAL, SAVE_ADDONS, WALLET_FIELD,
    ADDON_MESSAGE_1, ADDON_MESSAGE_2, NULL, CURRENT_WALLET_BALANCE_TEXT, FAGITO_SIGNIN_SCREEN,
    UPDATE_USER_DETAILS_SCREEN, ADDRESS, HOME_FIELD, WALLET_SCREEN, WALLET_PAYMENT_SCREEN,
    NET_BANKING_ENTITY, NET_BANKING_TITLE, PAYMENT_DONE_ALERT
} from '../../common/fagito-constants';
import _ from 'lodash';
import { updateUser, updateUserLocationDetails, fagitoShowAlert } from '../../store/actions/actions';
import { withNavigation } from 'react-navigation';

class FagitoFooterComponent extends Component {
    constructor(props) {
        super(props);
    }

    handleAddon = () => {
        this.props.hideModal();
        this.props.updateUser(this.props.selectedProduct, this.props.addonsSelected, 'addons');
    }
    handlePayment = (productsCost) => {
        if (this.props.userLoggedIn) {
            if (this.props.locationFilterContent.areas) {
                this.props.updateUserLocationDetails(HOME_FIELD, this.props.loggedInUserDetails);
                this.props.navigation.navigate(UPDATE_USER_DETAILS_SCREEN, {
                    sectionName: ADDRESS, loggedInUserDetails: this.props.loggedInUserDetails,
                    fieldName: HOME_FIELD, showPayment: true
                });
            } else {
                let walletAmount = this.props.loggedInUserDetails[WALLET_FIELD] ? this.props.loggedInUserDetails[WALLET_FIELD] : 0;
                if (walletAmount <= productsCost) {
                    this.props.navigation.navigate(WALLET_PAYMENT_SCREEN, {
                        entityName: NET_BANKING_ENTITY, title: NET_BANKING_TITLE, currentWalletAmount: walletAmount,
                        selectedProducts: this.props.selectedProducts, mealPayment: true
                    });
                } else {
                    this.props.showPaymentAlert(PAYMENT_DONE_ALERT);
                }
            }
        } else {
            this.props.navigation.navigate(FAGITO_SIGNIN_SCREEN);
        }
    }
    render() {
        let footerContent = null;
        let productsCost = 0;
        let currentWalletBalance = null;
        if (!this.props.modalFooter) {
            if (this.props.selectedProducts && this.props.selectedProducts.length) {
                let currentDate = new Date().getTime();
                let currentMonth = new Date(currentDate).getMonth();
                this.props.selectedProducts.map((product, index) => {
                    let dateCheck = (this.props.selectedDate === product.selectedDate) && (product.monthOfSelectedDate >= currentMonth);
                    if (dateCheck) {
                        productsCost += product.base.price;
                    }
                    if (dateCheck && product.addons && product.addons.length > 0) {
                        product.addons.map((addon, index) => {
                            productsCost += addon.price;
                        })
                    }
                });
                if (productsCost) {
                    if (this.props.loggedInUserDetails.walletAmount && this.props.loggedInUserDetails.walletAmount > 0) {
                        currentWalletBalance = (
                            <Text style={STYLES.footerText}>
                                {CURRENT_WALLET_BALANCE_TEXT}{this.props.loggedInUserDetails.walletAmount}
                            </Text>
                        )
                    }
                    footerContent = (
                        <View style={STYLES.costsSegment}>
                            <View style={STYLES.paymentText}>
                                {currentWalletBalance}
                                <Text style={STYLES.footerText}>{PAYMENT_LABEL_1}{productsCost + 5} (Rs {productsCost}{PAYMENT_LABEL_2}
                                </Text>
                            </View>
                            <View style={STYLES.paymentButton}>
                                <FagitoButton
                                    onButtonClick={() => this.handlePayment(productsCost + 5)}
                                    borderColor={style.PAYMENT_BUTTON_BORDER}
                                    backgroundColor={style.FAGITO_BUTTON_COLOR}
                                    buttonTitle={MAKE_PAYMENT}>
                                </FagitoButton>
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
                        <FagitoButton
                            buttonInActive={this.props.buttonInActive} onButtonClick={() => { return; }}
                            borderColor={style.PAYMENT_BUTTON_BORDER}
                            backgroundColor={style.FAGITO_BUTTON_COLOR}
                            buttonTitle={ADD_MEAL}>
                        </FagitoButton>
                    )
                } else {
                    addMealButton = (
                        <FagitoButton
                            buttonInActive={false} onButtonClick={this.props.handleMeal}
                            borderColor={style.PAYMENT_BUTTON_BORDER}
                            backgroundColor={style.FAGITO_BUTTON_COLOR}
                            buttonTitle={ADD_MEAL}>
                        </FagitoButton>
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
                        <Text style={[STYLES.footerText, STYLES.addonMessage]}>{ADDON_MESSAGE_1} {3 - this.props.addonsCount} {ADDON_MESSAGE_2}</Text>
                        <Text style={STYLES.addonMessage}>{this.props.deliveryTiming.timingSelected}: <Text style={STYLES.footerText}>{productName}</Text></Text>
                        {addonDetails}
                    </View>
                )
                addMealButton = (<FagitoButton buttonInActive={false} onButtonClick={this.handleAddon}
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
        addonsCount: state.addons.addonsCount,
        addonsSelected: state.addons.addonsSelected,
        indexOfProductToUpdateAddons: state.products.indexOfProductToUpdateAddons,
        loggedInUserDetails: state.userDetails.loggedInUserDetails,
        userLoggedIn: state.userDetails.userLoggedInStatus,
        locationFilterContent: state.deliveryTimingAndDates.filters.locationFilterContent,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (product, addonsSelected, updateType, formEntities,
            addressType, city, area, addAddress, fetchProductsInfo) => dispatch(updateUser(product, addonsSelected, updateType, formEntities,
                addressType, city, area, addAddress, fetchProductsInfo)),
        updateUserLocationDetails: (fieldName, loggedInUserDetails) => dispatch(updateUserLocationDetails(fieldName, loggedInUserDetails)),
        showPaymentAlert: (alert) => dispatch(fagitoShowAlert(alert))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(FagitoFooterComponent));