import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { SettingsEntity } from '../../components/fagito-components';
import { GREEN_UP_ICON, GREEN_UP_ICON_COLOR } from '../../common/fagito-style-constants';

class FagitoPaymentsComponent extends Component {
    render() {
        let paymentsSection = null;
        paymentsSection = this.props.payments.map((payment, index) => {
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
                {paymentsSection}
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        payments: state.transactions.transactions.payments.results
    }
}

export default connect(mapStateToProps, null)(FagitoPaymentsComponent);
