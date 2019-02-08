import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from './fagito-amount-component-style';
import { NEXT_MEAL_COST_TYPE, PAYMENT_NEEDED_TYPE } from '../../common/fagito-constants';
import { FagitoButton } from '../../components/fagito-components';
import * as style from '../../common/fagito-style-constants';

class FagitoAmount extends Component {
    constructor(props) {
        super(props);
    }
    handleAmount = (amount) => {
        this.props.handleAmount(amount);
    }
    render() {
        let amountSection = null;
        const { ...props } = this.props;
        if (props.type === NEXT_MEAL_COST_TYPE) {
            let amount = props.amount - 6;
            amountSection = (
                <View style={STYLES.amountSection}>
                    <View>
                        <Text style={STYLES.amountText}>Next meal cost:</Text>
                        <Text style={STYLES.amountText}>Rs {amount} + Rs 6 GST</Text>
                    </View>
                    <View>
                        <Text style={STYLES.amountText}>Rs {props.amount}</Text>
                    </View>
                </View>
            )
        }
        if (props.type === PAYMENT_NEEDED_TYPE) {
            let amount = props.amount - props.currentWalletAmount;
            let buttonTitle = 'RS ' + amount;
            amountSection = (
                <View style={STYLES.amountSection}>
                    <View>
                        <Text style={STYLES.amountText}>Payment needed for next meal:</Text>
                        <Text style={STYLES.amountText}>Rs {props.amount} - ({props.currentWalletAmount})</Text>
                    </View>
                    <View>
                        <FagitoButton
                            onButtonClick={() => this.handleAmount(amount)}
                            borderColor={style.FAGITO_BUTTON_COLOR}
                            backgroundColor={style.FAGITO_WHITE_COLOR}
                            buttonTitle={buttonTitle}></FagitoButton>
                    </View>
                </View>
            )
        }
        return (
            <View>
                {amountSection}
            </View>
        )
    }
}

export default FagitoAmount;