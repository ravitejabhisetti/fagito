import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { SettingsEntity } from '../../components/fagito-components';
import { DOWN_ICON, FAGITO_BUTTON_COLOR, GREEN_UP_ICON, GREEN_UP_ICON_COLOR } from '../../common/fagito-style-constants';

class FagitoTransactionsComponent extends Component {
    render() {
        let ordersSection = null;
        let paymentsSection = null;
        ordersSection = this.props.transactions.orders.results.map((order, index) => {
            return (
                <View key={index}>
                    <SettingsEntity
                        iconName={DOWN_ICON}
                        iconColor={FAGITO_BUTTON_COLOR}
                        transaction
                        type="orders"
                        transactionEntity={order}></SettingsEntity>
                </View>
            )
        })
        paymentsSection = this.props.transactions.payments.results.map((payment, index) => {
            return (
                <View key={index}>
                    <SettingsEntity
                        iconName={GREEN_UP_ICON}
                        iconColor={GREEN_UP_ICON_COLOR}
                        transaction
                        type="payment"
                        transactionEntity={payment}></SettingsEntity>
                </View>
            )
        })
        return (
            <ScrollView>
                {ordersSection}
                {paymentsSection}
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        transactions: state.transactions.transactions
    }
}

export default connect(mapStateToProps, null)(FagitoTransactionsComponent);
