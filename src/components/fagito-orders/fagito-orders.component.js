import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { DOWN_ICON, FAGITO_BUTTON_COLOR } from '../../common/fagito-style-constants';
import { SettingsEntity } from '../../components/fagito-components';

class FagitoOrdersComponent extends Component {
    render() {
        let ordersSection = null;
        ordersSection = this.props.orders.map((order, index) => {
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
        return (
            <ScrollView>
                {ordersSection}
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.transactions.transactions.orders.results
    }
}

export default connect(mapStateToProps, null)(FagitoOrdersComponent);