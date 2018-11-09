import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';
import { STYLES } from './fagito-signup-signin-browse-buttons-screen-style';
import {
    FAGITO, FAGITO_LOGO_MESSAGE, FAGITO_BROWSE, FAGITO_SIGNIN,
    FAGITO_SIGNUP, FAGITO_SIGNUP_SCREEN, FAGITO_SIGNIN_SCREEN
} from '../../common/fagito-constants';
import { FagitoButton } from '../../components/fagito-components';
import { FAGITO_SIGNIN_ITEMS, FAGITO_SIGNUP_ITEMS } from '../../common/fagito-signup-signin';


class FagitoSignupSigninBrowseButtonsScreen extends Component {
    static navigationOptions = { header: null };
    constructor(props) {
        super(props);
    }
    buttonClickHandler = (screenName, formItems) => {
        this.props.navigation.navigate(screenName, {
            formItems: formItems
        });
    }
    componentDidMount() {
    }
    render() {
        return (
            <View>
                <View style={STYLES.logo}>
                    <Text style={STYLES.fagitoLogo}>{FAGITO}</Text>
                </View>
                <View style={STYLES.buttonsContainer}>
                    <Text style={STYLES.fagitoLogoMessage}>{FAGITO_LOGO_MESSAGE}</Text>
                    <View style={STYLES.buttonsSection}>
                        <FagitoButton buttonTitle={FAGITO_BROWSE} />
                        <View style={STYLES.signupSigninBtnsSection}>
                            <View style={STYLES.button}>
                                <FagitoButton onButtonClick={() => this.buttonClickHandler(FAGITO_SIGNUP_SCREEN, FAGITO_SIGNUP_ITEMS)} buttonTitle={FAGITO_SIGNUP} />
                            </View>
                            <View style={STYLES.button}>
                                <FagitoButton onButtonClick={() => this.buttonClickHandler(FAGITO_SIGNIN_SCREEN, FAGITO_SIGNIN_ITEMS)} buttonTitle={FAGITO_SIGNIN} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default FagitoSignupSigninBrowseButtonsScreen;