import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-wallet-payment-screen-style';
import { NET_BANKING_ENTITY, AMOUNTS_LIST, AMOUNT_FORM, NET_BANKING_FORM } from '../../common/fagito-constants';
import { FagitoButton, FagitoFormComponent } from '../../components/fagito-components';
import * as style from '../../common/fagito-style-constants';

class FagitoWalletPaymentScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entityName: '',
            netBankingForm: AMOUNT_FORM,
            formUpdated: false,
            amountButtonClicked: true
        }
    }

    static navigationOptions = ({ navigation, check, screenProps }) => {
        return {
            title: navigation.getParam('title')
        }
    }
    componentWillMount() {
        let entityName = this.props.navigation.getParam('entityName');
        this.setState((state) => {
            return {
                ...state,
                entityName: entityName
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
                amountButtonClicked: true
            }
        })
    }
    updateAmountForm = () => {
        if (this.state.amountButtonClicked) {
            this.setState((state) => {
                return {
                    ...state,
                    amountButtonClicked: false
                }
            })
        }
    }
    render() {
        let amountForm = null;
        let moneyButtonsSection = null;
        let moneyButtonsList = null;
        let amountSubmitButton = null;
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
            amountForm = (
                <View>
                    <FagitoFormComponent
                        hideSubmitButton
                        formUpdated={this.state.formUpdated}
                        form={NET_BANKING_FORM}
                        amountForm
                        buttonClicked={this.state.amountButtonClicked}
                        updateAmountForm={() => this.updateAmountForm()}
                        formItems={this.state.netBankingForm}>
                    </FagitoFormComponent>
                </View>
            )
        }
        return (
            <View style={STYLES.paymentSection}>
                {amountForm}
                {moneyButtonsSection}
                {amountSubmitButton}
            </View>
        )
    }
}

export default FagitoWalletPaymentScreen;