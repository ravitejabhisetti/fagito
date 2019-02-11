import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { BackIcon, SettingsEntity } from '../../components/fagito-components';
import {
    WALLET_TITLE, FAGITO_HOME_SCREEN, EMAIL_ICON, WALLET_ICON, NET_BANKING_ENTITY,
    SODEXO_ENTITY, PAYTM_ENTITY, TRANSACTION_ENTITY, TRANSACTION_ICON, WALLET_ENTITY, EMAIL_ENTITY, NET_BANKING_TITLE, SODEXO_TITLE, PAYTM_TITLE
} from '../../common/fagito-constants';
import * as style from '../../common/fagito-style-constants';
import { STYLES } from './fagito-wallet-screen-style';
import { connect } from 'react-redux';

class FagitoWalletScreen extends Component {
    render() {
        return (
            <View style={STYLES.walletSection}>
                <BackIcon iconColor={style.FAGITO_WHITE_COLOR} navigateToHome={() => this.props.navigation.navigate(FAGITO_HOME_SCREEN)}
                    backgroundColor={style.FAGITO_BUTTON_COLOR} title={WALLET_TITLE} />
                <ScrollView>
                    <View style={STYLES.walletSegment}>
                        <View style={STYLES.walletInfoSection}>
                            <Text style={STYLES.walletInfoText}>Wallet Info</Text>
                        </View>
                        <SettingsEntity
                            wallet
                            entityName={EMAIL_ENTITY}
                            fieldName="email"
                            iconName={EMAIL_ICON}
                            loggedInUserDetails={this.props.loggedInUserDetails}>
                        </SettingsEntity>
                        <SettingsEntity
                            wallet
                            entityName={WALLET_ENTITY}
                            fieldName="walletAmount"
                            iconName={WALLET_ICON}
                            loggedInUserDetails={this.props.loggedInUserDetails}>
                        </SettingsEntity>
                    </View>
                    <View style={STYLES.walletSegment}>
                        <View style={STYLES.walletInfoSection}>
                            <Text style={STYLES.walletInfoText}>Add money to wallet</Text>
                        </View>
                        <SettingsEntity
                            title={NET_BANKING_TITLE}
                            wallet
                            entityName={NET_BANKING_ENTITY}
                            loggedInUserDetails={this.props.loggedInUserDetails}
                            iconName={WALLET_ICON}>
                        </SettingsEntity>
                        <SettingsEntity
                            title={SODEXO_TITLE}
                            wallet
                            entityName={SODEXO_ENTITY}
                            loggedInUserDetails={this.props.loggedInUserDetails}
                            iconName={WALLET_ICON}>
                        </SettingsEntity>
                        <SettingsEntity
                            title={PAYTM_TITLE}
                            wallet
                            entityName={PAYTM_ENTITY}
                            loggedInUserDetails={this.props.loggedInUserDetails}
                            iconName={WALLET_ICON}>
                        </SettingsEntity>
                    </View>
                    <View>
                        <View style={STYLES.walletInfoSection}>
                            <Text style={STYLES.walletInfoText}>History</Text>
                        </View>
                        <SettingsEntity
                            wallet
                            entityName={TRANSACTION_ENTITY}
                            iconName={TRANSACTION_ICON}>
                        </SettingsEntity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedInUserDetails: state.userDetails.loggedInUserDetails
    }
}

export default connect(mapStateToProps, null)(FagitoWalletScreen);