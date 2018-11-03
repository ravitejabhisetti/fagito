import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { STYLES } from './fagito-signup-signin-browse-buttons-screen-styles';
import { FAGITO, FAGITO_LOGO_MESSAGE } from '../../common/fagito-constants';

class FagitoSignupSigninBrowseButtonsScreen extends Component {
    render() {
        return (
            <View>
                <View style={STYLES.logo}>
                    <Text style={STYLES.fagitoLogo}>{FAGITO}</Text>
                </View>
                <View style={STYLES.buttonsContainer}>
                    <Text style={STYLES.fagitoLogoMessage}>{FAGITO_LOGO_MESSAGE}</Text>
                </View>
            </View>
        )
    }
}

export default FagitoSignupSigninBrowseButtonsScreen;