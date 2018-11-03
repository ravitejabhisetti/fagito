import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { STYLES } from './fagito-signup-signin-browse-buttons-screen-styles';
import { FAGITO } from '../../common/fagito-constants';

class FagitoSignupSigninBrowseButtonsScreen extends Component {
    render() {
        return (
            <View>
                <View style={STYLES.logo}>
                    <Text style={STYLES.fagitoLogo}>{FAGITO}</Text>
                </View>
                <Text>Buttons content will be loaded here</Text>
            </View>
        )
    }
}

export default FagitoSignupSigninBrowseButtonsScreen;