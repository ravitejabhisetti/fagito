import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-wallet-payment-screen-style';
import {
    NET_BANKING_ENTITY, AMOUNTS_LIST, AMOUNT_FORM,
    NET_BANKING_FORM, MAKE_PAYMENT, PAYTM_ENTITY, SODEXO_FORM, SODEXO_ENTITY, SODEXO_FORM_ENTITIES,
    SODEXO_MINIMUM_AMOUNT_ALERT, NEXT_MEAL_COST_TYPE, PAYMENT_NEEDED_TYPE
} from '../../common/fagito-constants';
import { FagitoButton, FagitoFormComponent, FagitoAmount } from '../../components/fagito-components';
import * as style from '../../common/fagito-style-constants';
import { connect } from 'react-redux';
import { updateUserWallet, fagitoShowAlert } from '../../store/actions/actions';

class FagitoWalletPaymentScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entityName: '',
            netBankingForm: AMOUNT_FORM,
            sodexoForm: SODEXO_FORM_ENTITIES,
            formUpdated: false,
            amountButtonClicked: true,
            buttonInActive: true,
            currentWalletAmount: 0,
            mealPayment: false,
            selectedProducts: [],
            productsCost: 0
        }
    }

    static navigationOptions = ({ navigation, check, screenProps }) => {
        return {
            title: navigation.getParam('title')
        }
    }
    componentWillMount() {
        let entityName = this.props.navigation.getParam('entityName');
        let currentWalletAmount = this.props.navigation.getParam('currentWalletAmount');
        let mealPayment = this.props.navigation.getParam('mealPayment');
        let selectedProductsList = this.props.navigation.getParam('selectedProducts');
        let productsCost = 0;
        if (selectedProductsList && selectedProductsList.length > 0) {
            let currentDate = new Date().getTime();
            let currentMonth = new Date(currentDate).getMonth();
            selectedProductsList.map((product, index) => {
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
        }
        this.setState((state) => {
            return {
                ...state,
                entityName: entityName,
                currentWalletAmount: currentWalletAmount,
                mealPayment: mealPayment ? true : false,
                selectedProducts: selectedProductsList ? selectedProductsList : [],
                productsCost: productsCost
            }
        })
    }
    handleAmount = (amount) => {
        this.setState((state) => {
            state.netBankingForm[0].value = amount;
            return {
                ...state,
                netBankingForm: state.netBankingForm,
                formUpdated: !state.formUpdated,
                amountButtonClicked: true,
                buttonInActive: false
            }
        })
    }
    updateAmountForm = (value) => {
        if (value === '') {
            this.setState((state) => {
                return {
                    ...state,
                    buttonInActive: true
                }
            })
        }
        if (this.state.buttonInActive && value !== '') {
            this.setState((state) => {
                return {
                    ...state,
                    buttonInActive: false
                }
            })
        }
        if (this.state.amountButtonClicked) {
            this.setState((state) => {
                return {
                    ...state,
                    amountButtonClicked: false
                }
            })
        }
    }
    addAmountToUser = () => {
        if (this.state.entityName !== SODEXO_ENTITY) {
            if (!this.state.buttonInActive) {
                this.props.updateUserWallet(this.state.netBankingForm[0].value);
            }
        } else {
            if (this.state.sodexoForm[0].value >= 1000) {
                if (!this.state.buttonInActive) {
                    this.props.updateUserWallet(this.state.sodexoForm[0].value);
                }
            } else {
                this.props.showSodexoMinimumAmountAlert(SODEXO_MINIMUM_AMOUNT_ALERT);
            }
        }
    }
    render() {
        let amountForm = null;
        let moneyButtonsSection = null;
        let moneyButtonsList = null;
        let amountSubmitButton = null;
        let currentWalletAmount = null;
        let sodexoPickups = null;
        let nextPaymentCost = null;
        let nextPaymentNeeded = null;
        if (this.state.entityName === NET_BANKING_ENTITY || this.state.entityName === PAYTM_ENTITY) {
            if (this.state.entityName === NET_BANKING_ENTITY) {
                moneyButtonsList = AMOUNTS_LIST.map((amountEntity, index) => {
                    let buttonTitle = 'Rs ' + amountEntity.amount;
                    return (
                        <View key={index} style={STYLES.moneyButton}>
                            <FagitoButton
                                onButtonClick={() => this.handleAmount(amountEntity.amount)}
                                borderColor={style.FAGITO_BUTTON_COLOR}
                                backgroundColor={style.FAGITO_WHITE_COLOR}
                                buttonTitle={buttonTitle}>
                            </FagitoButton>
                        </View>
                    )
                })
                moneyButtonsSection = (
                    <View style={STYLES.moneyButtonsSection}>
                        {moneyButtonsList}
                    </View>
                )
                if (this.state.productsCost) {
                    nextPaymentCost = (
                        <FagitoAmount type={NEXT_MEAL_COST_TYPE} amount={this.state.productsCost}></FagitoAmount>
                    )
                }
                nextPaymentNeeded = (
                    <FagitoAmount
                        handleAmount={(amount) => this.handleAmount(String(amount))}
                        type={PAYMENT_NEEDED_TYPE}
                        amount={this.state.productsCost}
                        currentWalletAmount={this.state.currentWalletAmount}>
                    </FagitoAmount>
                )
            }
            amountForm = (
                <View>
                    <FagitoFormComponent
                        hideSubmitButton
                        formUpdated={this.state.formUpdated}
                        form={NET_BANKING_FORM}
                        amountForm
                        buttonClicked={this.state.amountButtonClicked}
                        updateAmountForm={(value) => this.updateAmountForm(value)}
                        formItems={this.state.netBankingForm}>
                    </FagitoFormComponent>
                </View>
            )
            amountSubmitButton = (
                <View style={STYLES.amountSubmitButton}>
                    <FagitoButton
                        onButtonClick={() => this.addAmountToUser()}
                        buttonInActive={this.state.buttonInActive}
                        borderColor={style.FAGITO_WHITE_COLOR}
                        backgroundColor={style.FAGITO_BUTTON_COLOR}
                        buttonTitle={MAKE_PAYMENT}>
                    </FagitoButton>
                </View>
            )
            if (this.state.currentWalletAmount > 0) {
                currentWalletAmount = (
                    <View style={STYLES.currentWalletAmount}>
                        <Text style={STYLES.amountText}>Current Wallet Balance: Rs {this.state.currentWalletAmount}</Text>
                    </View>
                )
            }
        }
        if (this.state.entityName === SODEXO_ENTITY) {
            amountForm = (
                <View>
                    <FagitoFormComponent
                        hideSubmitButton
                        formUpdated={this.state.formUpdated}
                        form={SODEXO_FORM}
                        amountForm
                        buttonClicked={this.state.amountButtonClicked}
                        updateAmountForm={(value) => this.updateAmountForm(value)}
                        formItems={this.state.sodexoForm}>
                    </FagitoFormComponent>
                </View>
            )
            amountSubmitButton = (
                <View style={STYLES.amountSubmitButton}>
                    <FagitoButton
                        onButtonClick={() => this.addAmountToUser()}
                        buttonInActive={this.state.buttonInActive}
                        borderColor={style.FAGITO_WHITE_COLOR}
                        backgroundColor={this.state.buttonInActive ? style.SODEXO_INACTIVE_BUTTON : style.SODEXO_ACTIVE_BUTTON}
                        buttonTitle={MAKE_PAYMENT}>
                    </FagitoButton>
                </View>
            )
            sodexoPickups = (
                <View style={STYLES.sodexoPickupsSection}>
                    <Text style={STYLES.pickupHeader}>Pending Sodexo pickups</Text>
                    <Text>No Pending requests</Text>
                </View>
            )
        }
        return (
            <View style={STYLES.paymentSection}>
                {amountForm}
                {currentWalletAmount}
                {nextPaymentCost}
                {nextPaymentNeeded}
                {moneyButtonsSection}
                {amountSubmitButton}
                {sodexoPickups}
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedDate: state.deliveryTimingAndDates.selectedDate,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUserWallet: (walletAmount) => dispatch(updateUserWallet(walletAmount)),
        showSodexoMinimumAmountAlert: (alert) => dispatch(fagitoShowAlert(alert))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FagitoWalletPaymentScreen);