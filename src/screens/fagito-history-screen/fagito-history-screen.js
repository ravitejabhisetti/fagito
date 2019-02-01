import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { BackIcon, FagitoOrdersComponent, FagitoPaymentsComponent, FagitoTransactionsComponent } from '../../components/fagito-components';
import { HISTORY_TITLE, FAGITO_HOME_SCREEN, WALLET_SCREEN } from '../../common/fagito-constants';
import * as style from '../../common/fagito-style-constants';
import { STYLES } from './fagito-history-screen-style';
import { createBottomTabNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

class FagitoHistoryScreen extends Component {
    render() {
        let walletScreen = this.props.navigation.getParam('walletScreen');
        return (
            <View style={STYLES.historySection}>
                <BackIcon iconColor={style.FAGITO_WHITE_COLOR} navigateToHome={!walletScreen ? () => this.props.navigation.navigate(FAGITO_HOME_SCREEN) :
                    () => this.props.navigation.navigate(WALLET_SCREEN)}
                    backgroundColor={style.FAGITO_BUTTON_COLOR} title={HISTORY_TITLE} />
                <TransactionsTabNavigator></TransactionsTabNavigator>
            </View>
        )
    }
}

const TransactionsTabNavigator = createMaterialTopTabNavigator({
    ALL: FagitoTransactionsComponent,
    PAYMENTS: FagitoPaymentsComponent,
    ORDERS: FagitoOrdersComponent,
},
    {
        tabBarOptions: {
            labelStyle: {
                fontSize: 12,
                fontFamily: style.FAGITO_FONT_FAMILY_LATO,
                fontWeight: '400'
            },
            indicatorStyle: {
                backgroundColor: style.FAGITO_BUTTON_COLOR
            },
            activeTintColor: style.FAGITO_BUTTON_COLOR,
            inactiveTintColor: style.FAGITO_BUTTON_COLOR,
            style: {
                backgroundColor: style.TAB_TOP_BACKGROUND,
                borderColor: style.TAB_TOP_BORDER_COLOR,
                borderBottomWidth: 1
            }
        }
    }
)

export default FagitoHistoryScreen;