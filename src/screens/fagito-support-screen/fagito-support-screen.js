import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { BackIcon, SettingsEntity } from '../../components/fagito-components';
import { SUPPORT_TITLE, FAGITO_HOME_SCREEN, AT_ICON, PHONE_ICON } from '../../common/fagito-constants';
import * as style from '../../common/fagito-style-constants';
import { STYLES } from './fagito-support-screen-style';
import { connect } from 'react-redux';

class FagitoSupportScreen extends Component {
    render() {
        return (
            <View style={STYLES.supportSection}>
                <BackIcon iconColor={style.FAGITO_WHITE_COLOR} navigateToHome={() => this.props.navigation.navigate(FAGITO_HOME_SCREEN)}
                    backgroundColor={style.FAGITO_BUTTON_COLOR} title={SUPPORT_TITLE} />
                <View>
                    <View style={STYLES.contactSection}>
                        <Text style={STYLES.contactText}>Contact us</Text>
                    </View>
                    <SettingsEntity
                        support
                        entityName="Email"
                        fieldName="supportEmail"
                        iconName={AT_ICON}
                        loggedInUserDetails={this.props.loggedInUserDetails}>
                    </SettingsEntity>
                    <SettingsEntity
                        support
                        entityName="Mobile"
                        fieldName="supportMobile"
                        iconName={PHONE_ICON}
                        loggedInUserDetails={this.props.loggedInUserDetails}>
                    </SettingsEntity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedInUserDetails: state.userDetails.loggedInUserDetails
    }
}

export default connect(mapStateToProps, null)(FagitoSupportScreen);