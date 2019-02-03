import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { STYLES } from './fagito-settings-entity.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import * as style from '../../common/fagito-style-constants';
import { connect } from 'react-redux';
import {
    ARROW_FORWARD_ICON, EMAIL_ENTITY, MOBILE_NUMBER_ENTITY,
    OFFICE_ADDRESS_ENTITY, UPDATE_USER_DETAILS_SCREEN, ADDRESS, PROFILE,
    ADDRESS_LINE_ONE, ADDRESS_LINE_TWO, ADDRESS_CITY, ADDRESS_AREA, HOME_FIELD,
    OFFICE_FIELD, WALLET_ENTITY, NET_BANKING_ENTITY, SODEXO_ENTITY, PAYTM_ENTITY,
    TRANSACTION_ENTITY, HISTORY_SCREEN, WALLET_PAYMENT_SCREEN, WALLET_FIELD
} from '../../common/fagito-constants';
import { withNavigation } from 'react-navigation';
import { updateUserLocationDetails } from '../../store/actions/actions';

class SettingsEntity extends Component {
    handleSettingsEntity = (entityName, locationsSection, loggedInUserDetails, fieldName) => {
        if (entityName !== EMAIL_ENTITY) {
            if (locationsSection) {
                this.props.updateUserLocationDetails(fieldName, loggedInUserDetails);
            }
            this.props.navigation.navigate(UPDATE_USER_DETAILS_SCREEN, {
                sectionName: locationsSection ? ADDRESS : PROFILE,
                loggedInUserDetails: loggedInUserDetails, fieldName: fieldName
            });
        }
    }
    handleWallet = (entityName, title) => {
        if (entityName !== EMAIL_ENTITY && entityName !== WALLET_ENTITY) {
            if (entityName === TRANSACTION_ENTITY) {
                this.props.navigation.navigate(HISTORY_SCREEN, {
                    walletScreen: true
                });
            } else {
                let walletAmount = this.props.loggedInUserDetails[WALLET_FIELD] ? this.props.loggedInUserDetails[WALLET_FIELD] : 0;
                this.props.navigation.navigate(WALLET_PAYMENT_SCREEN, {
                    title: title, entityName: entityName, currentWalletAmount: walletAmount
                });
            }
        }
    }
    render() {
        let entityIcon = null;
        let forwardIcon = null;
        let entityDetails = null;
        let entityName = null;
        if (!this.props.transaction) {
            if (!this.props.wallet) {
                entityName = (
                    <Text style={STYLES.entity}>{this.props.entityName}</Text>
                )
                if (this.props.entityName === EMAIL_ENTITY) {
                    entityIcon = (
                        <Ionicons name={this.props.iconName} color={style.FAGITO_BLACK_COLOR} size={28}></Ionicons>
                    )
                    forwardIcon = null;
                } else {
                    entityIcon = (
                        <Icon name={this.props.iconName} color={style.FAGITO_BLACK_COLOR} size={28}></Icon>
                    )
                    forwardIcon = (
                        <Ionicons name={ARROW_FORWARD_ICON} color={style.FAGITO_BLACK_COLOR} size={25}></Ionicons>
                    )
                }
                let fieldName = this.props.fieldName;
                let addressType = fieldName + ADDRESS_LINE_ONE;
                if (fieldName === HOME_FIELD || fieldName === OFFICE_FIELD) {
                    if (this.props.loggedInUserDetails && this.props.loggedInUserDetails[addressType]) {
                        entityDetails = (
                            <Text style={[STYLES.entity, STYLES.entityDetails]}>{this.props.loggedInUserDetails[fieldName + ADDRESS_LINE_ONE]} {this.props.loggedInUserDetails[fieldName + ADDRESS_LINE_TWO]} {this.props.loggedInUserDetails[fieldName + ADDRESS_AREA]} {this.props.loggedInUserDetails[fieldName + ADDRESS_CITY]}</Text>
                        )
                    } else {
                        if (this.props.displayNotAddedYet) {
                            entityDetails = (
                                <Text style={[STYLES.entity, STYLES.entityDetails]}>Not Added Yet</Text>
                            )
                        }
                    }
                } else {
                    if (this.props.loggedInUserDetails && this.props.loggedInUserDetails[fieldName]) {
                        entityDetails = (
                            <Text style={[STYLES.entity, STYLES.entityDetails]}>{this.props.loggedInUserDetails[fieldName]}</Text>
                        )
                    } else {
                        if (this.props.displayNotAddedYet) {
                            entityDetails = (
                                <Text style={[STYLES.entity, STYLES.entityDetails]}>Not Added Yet</Text>
                            )
                        }
                    }
                }
            } else {
                let fieldName = this.props.fieldName;
                let entity = this.props.entityName;
                entityName = (
                    <Text style={STYLES.entity}>{entity}</Text>
                )
                if (entity === EMAIL_ENTITY) {
                    entityIcon = (
                        <EntypoIcon name={this.props.iconName} color={style.FAGITO_BLACK_COLOR} size={25}></EntypoIcon>
                    )
                    forwardIcon = null;
                    entityDetails = (
                        <Text style={[STYLES.entity, STYLES.entityDetails]}>{this.props.loggedInUserDetails[fieldName]}</Text>
                    )
                } else {
                    entityIcon = (
                        <AntIcon name={this.props.iconName} color={style.FAGITO_BLACK_COLOR} size={25}></AntIcon>
                    )
                    if (entity === WALLET_ENTITY) {
                        forwardIcon = null;
                        let walletBalance = 0;
                        if (this.props.loggedInUserDetails[fieldName]) {
                            walletBalance = this.props.loggedInUserDetails[fieldName];
                        }
                        entityDetails = (
                            <Text style={[STYLES.entity, STYLES.entityDetails]}>Rs {walletBalance}</Text>
                        )
                    } else {
                        if (entity !== TRANSACTION_ENTITY) {
                            forwardIcon = (
                                <Ionicons name={ARROW_FORWARD_ICON} color={style.FAGITO_BLACK_COLOR} size={25}></Ionicons>
                            )
                        }
                        entityDetails = null;
                    }
                }
            }
        } else {
            let transactionDetails = null;
            let amountDetails = null;
            let categoryDetails = null;
            let date = new Date(this.props.transactionEntity.updatedAt);
            let dateString = date.toDateString();
            entityIcon = (
                <AntIcon name={this.props.iconName} color={this.props.iconColor} size={24}></AntIcon>
            )
            if (this.props.type === 'payment') {
                amountDetails = (
                    <Text style={STYLES.entity}>Rs {this.props.transactionEntity.amount}</Text>
                )
                transactionDetails = (
                    <View>
                        <Text style={[STYLES.entity, STYLES.entityDetails]}>{this.props.transactionEntity.paymentId}</Text>
                        <Text style={[STYLES.entity, STYLES.entityDetails]}>{this.props.transactionEntity.linkTitle}</Text>
                    </View>
                )
            }
            if (this.props.type === 'orders') {
                let price = this.props.transactionEntity.price - this.props.transactionEntity.tax;
                amountDetails = (
                    <Text style={STYLES.entity}>Rs {this.props.transactionEntity.price}</Text>
                )
                transactionDetails = (
                    <View>
                        <Text style={[STYLES.entity, STYLES.entityDetails]}>Rs {price} + Rs {this.props.transactionEntity.tax} GST</Text>
                        <Text style={[STYLES.entity, STYLES.entityDetails]}>{this.props.transactionEntity.name}</Text>
                    </View>
                )
                if (this.props.transactionEntity.type !== 'mealpasss') {
                    categoryDetails = (
                        <Text style={[STYLES.entity, STYLES.entityDetails]}>{this.props.transactionEntity.category}</Text>
                    )
                }
            }
            entityDetails = (
                <View>
                    {amountDetails}
                    {transactionDetails}
                    {categoryDetails}
                    <Text style={[STYLES.entity, STYLES.entityDetails]}>{dateString}</Text>
                </View>
            )
        }
        return (
            <TouchableOpacity
                onPress={!this.props.wallet ? () => this.handleSettingsEntity(this.props.entityName, this.props.locationsSection, this.props.loggedInUserDetails, this.props.fieldName) :
                    () => this.handleWallet(this.props.entityName, this.props.title)}
                activeOpacity={1} style={STYLES.settingsEntity}>
                <View style={STYLES.settingsEntityIcon}>
                    {entityIcon}
                </View>
                <View style={[STYLES.settingsEntityDetails,
                (this.props.entityName !== MOBILE_NUMBER_ENTITY && this.props.entityName !== PAYTM_ENTITY && this.props.entityName !== TRANSACTION_ENTITY &&
                    this.props.entityName !== OFFICE_ADDRESS_ENTITY && this.props.entityName !== WALLET_ENTITY) ? STYLES.settingsEntityBottomBorder : null]}>
                    <View>
                        {entityName}
                        {entityDetails}
                    </View>
                    <View>
                        {forwardIcon}
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUserLocationDetails: (fieldName, loggedInUserDetails) => dispatch(updateUserLocationDetails(fieldName, loggedInUserDetails))
    }
}

export default connect(null, mapDispatchToProps)(withNavigation(SettingsEntity));