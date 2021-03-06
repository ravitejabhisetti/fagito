import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, StyleSheet, View, Dimensions } from 'react-native';
import { STYLES } from './fagito-signup-signin-browse-buttons-screen-style';
import {
    FAGITO, FAGITO_LOGO_MESSAGE, FAGITO_BROWSE, FAGITO_SIGNIN,
    FAGITO_SIGNUP, FAGITO_SIGNUP_SCREEN, FAGITO_SIGNIN_SCREEN, FAGITO_HOME_SCREEN, FAGITO_LOGIN_AUTHENTICATING_USER
} from '../../common/fagito-constants';
import { FagitoButton } from '../../components/fagito-components';
import { autoSignIn, updateUserLoggedInStatus, formDatestoDeliver, fagitoStartLoader } from '../../store/actions/actions';
import * as style from '../../common/fagito-style-constants';

class FagitoSignupSigninBrowseButtonsScreen extends Component {
    static navigationOptions = { header: null };
    constructor(props) {
        super(props);
    }
    buttonClickHandler = (screenName, goToHomeScreen) => {
        if (goToHomeScreen) {
            this.props.formDatestoDeliver();
            this.props.updateUserLoggedInStatus(false, true);
        } else {
            this.props.updateUserLoggedInStatus(false, false);
        }
        this.props.navigation.navigate(screenName);
    }
    componentWillMount() {
        this.props.showLoader(FAGITO_LOGIN_AUTHENTICATING_USER);
    }
    componentDidMount() {
        this.props.auth();
    }
    render() {
        return (
            <View style={STYLES.home}>
                <View style={STYLES.logo}>
                    <Text style={STYLES.fagitoLogo}>{FAGITO}</Text>
                </View>
                <View style={STYLES.buttonsContainer}>
                    <Text style={STYLES.fagitoLogoMessage}>{FAGITO_LOGO_MESSAGE}</Text>
                    <View style={STYLES.buttonsSection}>
                        <FagitoButton
                            borderColor={style.FAGITO_BUTTON_COLOR}
                            backgroundColor={style.FAGITO_WHITE_COLOR}
                            onButtonClick={() => this.buttonClickHandler(FAGITO_HOME_SCREEN, true)}
                            buttonTitle={FAGITO_BROWSE} />
                        <View style={STYLES.signupSigninBtnsSection}>
                            <View style={STYLES.button}>
                                <FagitoButton
                                    borderColor={style.FAGITO_BUTTON_COLOR}
                                    backgroundColor={style.FAGITO_WHITE_COLOR}
                                    onButtonClick={() => this.buttonClickHandler(FAGITO_SIGNUP_SCREEN)}
                                    buttonTitle={FAGITO_SIGNUP} />
                            </View>
                            <View style={STYLES.button}>
                                <FagitoButton
                                    borderColor={style.FAGITO_BUTTON_COLOR}
                                    backgroundColor={style.FAGITO_WHITE_COLOR}
                                    onButtonClick={() => this.buttonClickHandler(FAGITO_SIGNIN_SCREEN)}
                                    buttonTitle={FAGITO_SIGNIN} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showLoader: (loaderText) => dispatch(fagitoStartLoader(loaderText)),
        auth: () => dispatch(autoSignIn()),
        updateUserLoggedInStatus: (status, backIcon) => dispatch(updateUserLoggedInStatus(status, backIcon)),
        formDatestoDeliver: () => dispatch(formDatestoDeliver())
    }
}

export default connect(null, mapDispatchToProps)(FagitoSignupSigninBrowseButtonsScreen);