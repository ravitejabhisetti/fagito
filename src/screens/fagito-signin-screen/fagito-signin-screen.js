import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { CONTAINER_STYLE } from '../../common/fagito-common-style';
import { FagitoFormComponent, BackIcon } from '../../components/fagito-components';
import {
    FAGITO_SIGNIN_SCREEN, FAGITO_SIGNIN, FAGITO_RESET_PASSWORD_SCREEN,
    FAGITO_SIGNIN_AUTH_MODE, FAGITO_SIGNIN_FORM_NAME, FAGITO_HOME_SCREEN
} from '../../common/fagito-constants';
import { FAGITO_SIGNIN_FORM } from '../../common/fagito-signup-signin-constants';
import { userAuthentication } from '../../store/actions/actions';
import * as style from '../../common/fagito-style-constants';

class FagitoSigninScreen extends Component {
    static navigationOptions = { title: FAGITO_SIGNIN_SCREEN };

    handleButtonClick = (formItems) => {
        this.props.userAuthentication(formItems, FAGITO_SIGNIN_AUTH_MODE);
    }
    handleResetPassword = () => {
        this.props.navigation.navigate(FAGITO_RESET_PASSWORD_SCREEN);
    }

    componentWillMount() {
        console.log('in will mount sign in---');
    }

    render() {
        let backIconHeader = null;
        if (this.props.backIconDisplay) {
            backIconHeader = (
                <View>
                    <BackIcon iconColor={style.FAGITO_WHITE_COLOR} navigateToHome={() => this.props.navigation.navigate(FAGITO_HOME_SCREEN)}
                        backgroundColor={style.FAGITO_BUTTON_COLOR} title={FAGITO_SIGNIN_SCREEN} />
                </View>
            )
        }
        return (
            <View style={CONTAINER_STYLE.container}>
                {backIconHeader}
                <FagitoFormComponent form={FAGITO_SIGNIN_FORM_NAME} formButtonClick={this.handleButtonClick} handleReset={this.handleResetPassword} newForm resetPassword buttonTitle={FAGITO_SIGNIN} formItems={FAGITO_SIGNIN_FORM} />
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userAuthentication: (userData, authMode) => dispatch(userAuthentication(userData, authMode))
    }
}

const mapStateToProps = (state) => {
    return {
        userLoggedInStatus: state.userDetails.userLoggedInStatus,
        backIconDisplay: state.userDetails.backIconDisplay
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FagitoSigninScreen);