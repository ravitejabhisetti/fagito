import React, { Component } from 'react';
import { View, Text, AsyncStorage, ScrollView } from 'react-native';
import { BackIcon, SettingsEntity } from '../../components/fagito-components';
import { SETTINGS_TITLE, FAGITO_HOME_SCREEN, FAGITO_USER_DETAILS, AT_ICON, PHONE_ICON, HOME_ICON, OFFICE_ICON } from '../../common/fagito-constants';
import { STYLES } from './fagito-settings-screen-style';
import * as style from '../../common/fagito-style-constants';
import { connect } from 'react-redux';
import { PERSON_OUTLINE_ICON, ARROW_FORWARD_ICON } from '../../common/fagito-constants';

class FagitoSettingsScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={STYLES.settingsSection}>
                <BackIcon iconColor={style.FAGITO_WHITE_COLOR} navigateToHome={() => this.props.navigation.navigate(FAGITO_HOME_SCREEN)}
                    backgroundColor={style.FAGITO_BUTTON_COLOR} title={SETTINGS_TITLE} />
                <ScrollView>
                    <View style={STYLES.profileSegment}>
                        <View style={STYLES.profileSection}>
                            <Text style={STYLES.profileText}>Profile</Text>
                        </View>
                        <SettingsEntity entityName="Name" iconName={PERSON_OUTLINE_ICON} entityValue={this.props.loggedInUserDetails && this.props.loggedInUserDetails.name}></SettingsEntity>
                        <SettingsEntity entityName="Email" iconName={AT_ICON} entityValue={this.props.loggedInUserDetails && this.props.loggedInUserDetails.email}></SettingsEntity>
                        <SettingsEntity entityName="Mobile Number" iconName={PHONE_ICON} entityValue={this.props.loggedInUserDetails && this.props.loggedInUserDetails.mobileNumber}></SettingsEntity>
                    </View>
                    <View style={STYLES.locationsSegment}>
                        <View style={STYLES.profileSection}>
                            <Text style={STYLES.profileText}>Locations</Text>
                        </View>
                        <SettingsEntity entityName="Home Address" iconName={HOME_ICON} entityValue={this.props.loggedInUserDetails && this.props.loggedInUserDetails.homeAddress}></SettingsEntity>
                        <SettingsEntity entityName="Office Address" iconName={OFFICE_ICON} entityValue={this.props.loggedInUserDetails && this.props.loggedInUserDetails.officeAddress}></SettingsEntity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state check settings---', state);
    return {
        loggedInUserDetails: state.userDetails.loggedInUserDetails
    }
}

export default connect(mapStateToProps, null)(FagitoSettingsScreen);