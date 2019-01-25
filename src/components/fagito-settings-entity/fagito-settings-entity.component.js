import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { STYLES } from './fagito-settings-entity.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as style from '../../common/fagito-style-constants';
import { connect } from 'react-redux';
import {
    ARROW_FORWARD_ICON, EMAIL_ENTITY, MOBILE_NUMBER_ENTITY,
    OFFICE_ADDRESS_ENTITY, UPDATE_USER_DETAILS_SCREEN, ADDRESS, PROFILE
} from '../../common/fagito-constants';
import { withNavigation } from 'react-navigation';
import { updateUserLocationDetails } from '../../store/actions/actions';

class SettingsEntity extends Component {
    handleSettingsEntity = (entityName, locationsSection, loggedInUserDetails, fieldName) => {
        if (entityName !== EMAIL_ENTITY) {
            if (locationsSection) {
                this.props.updateUserLocationDetails(fieldName);
            }
            this.props.navigation.navigate(UPDATE_USER_DETAILS_SCREEN, {
                sectionName: locationsSection ? ADDRESS : PROFILE,
                loggedInUserDetails: loggedInUserDetails, fieldName: fieldName
            });
        }
    }
    render() {
        let entityIcon = null;
        let forwardIcon = null;
        let entityDetails = null;
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
        if (this.props.loggedInUserDetails && this.props.loggedInUserDetails[this.props.fieldName]) {
            entityDetails = (
                <Text style={[STYLES.entity, STYLES.entityDetails]}>{this.props.loggedInUserDetails[this.props.fieldName]}</Text>
            )
        } else {
            entityDetails = (
                <Text style={[STYLES.entity, STYLES.entityDetails]}>Not Added Yet</Text>
            )
        }
        return (
            <TouchableOpacity
                onPress={() => this.handleSettingsEntity(this.props.entityName, this.props.locationsSection, this.props.loggedInUserDetails, this.props.fieldName)}
                activeOpacity={1} style={STYLES.settingsEntity}>
                <View style={STYLES.settingsEntityIcon}>
                    {entityIcon}
                </View>
                <View style={[STYLES.settingsEntityDetails,
                (this.props.entityName !== MOBILE_NUMBER_ENTITY &&
                    this.props.entityName !== OFFICE_ADDRESS_ENTITY) ? STYLES.settingsEntityBottomBorder : null]}>
                    <View>
                        <Text style={STYLES.entity}>{this.props.entityName}</Text>
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
        updateUserLocationDetails: (fieldName) => dispatch(updateUserLocationDetails(fieldName))
    }
}

export default connect(null, mapDispatchToProps)(withNavigation(SettingsEntity));