import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';
// import { Navigation } from 'react-native-navigation';
import { STYLES } from './fagito-signup-signin-browse-buttons-screen-style';
import { FAGITO, FAGITO_LOGO_MESSAGE, FAGITO_BROWSE, FAGITO_SIGNIN, FAGITO_SIGNUP, FAGITO_SIGNUP_SCREEN } from '../../common/fagito-constants';
import { FagitoButton } from '../../components/fagito-components';

class FagitoSignupSigninBrowseButtonsScreen extends Component {
    constructor(props) {
        super(props);
    }
    buttonClickHandler = async () => {
        console.log('in button click handler---');
        // await Navigation.push(this.props.componentId, {
        //     component: {
        //         name: FAGITO_SIGNUP_SCREEN
        //     },
        //     passProps: {}
        // })
    }
    componentDidMount() {
        console.log('in mount---');
        console.log('component id is----', this.props.componentId);
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
                                <FagitoButton onButtonClick={this.buttonClickHandler} buttonTitle={FAGITO_SIGNUP} />
                            </View>
                            <View style={STYLES.button}>
                                <FagitoButton onButtonClick={this.buttonClickHandler} buttonTitle={FAGITO_SIGNIN} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default FagitoSignupSigninBrowseButtonsScreen;