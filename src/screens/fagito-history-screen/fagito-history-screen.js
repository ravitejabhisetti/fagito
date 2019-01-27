import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { BackIcon, FagitoOrdersComponent, FagitoPaymentsComponent, FagitoTransactionsComponent } from '../../components/fagito-components';
import { HISTORY_TITLE, FAGITO_HOME_SCREEN } from '../../common/fagito-constants';
import * as style from '../../common/fagito-style-constants';
import { STYLES } from './fagito-history-screen-style';

class FagitoHistoryScreen extends Component {
    render() {
        return (
            <View style={STYLES.historySection}>
                <BackIcon iconColor={style.FAGITO_WHITE_COLOR} navigateToHome={() => this.props.navigation.navigate(FAGITO_HOME_SCREEN)}
                    backgroundColor={style.FAGITO_BUTTON_COLOR} title={HISTORY_TITLE} />
                <ScrollView>
                    <Text>check the transac history screen</Text>
                    <FagitoOrdersComponent></FagitoOrdersComponent>
                    <FagitoPaymentsComponent></FagitoPaymentsComponent>
                    <FagitoTransactionsComponent></FagitoTransactionsComponent>
                </ScrollView>
            </View>
        )
    }
}

export default FagitoHistoryScreen;