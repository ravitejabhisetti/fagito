import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { CONTAINER_STYLE } from '../../common/fagito-common-style';
import { FAGITO_SIGNUP_SCREEN, FAGITO_REGISTER, FAGITO_SIGNUP_FORM_NAME, FAGITO_SIGNUP_AUTH_MODE, FAGITO_HOME_SCREEN } from '../../common/fagito-constants';
import { FagitoFormComponent,BackIcon } from '../../components/fagito-components';
import { FAGITO_SIGNUP_FORM } from '../../common/fagito-signup-signin-constants';
import { userAuthentication } from '../../store/actions/actions';
import * as style from '../../common/fagito-style-constants';

class FagitoSignupScreen extends Component {
    static navigationOptions = { title: FAGITO_SIGNUP_SCREEN };

    handleButtonClick = (formItems) => {
        this.props.userAuthentication(formItems, FAGITO_SIGNUP_AUTH_MODE);
    }

    render() {
        let backIconHeader = null;
        if (this.props.backIconDisplay) {
            backIconHeader = (
                <View>
                    <BackIcon iconColor={style.FAGITO_WHITE_COLOR} navigateToHome={() => this.props.navigation.navigate(FAGITO_HOME_SCREEN)}
                        backgroundColor={style.FAGITO_BUTTON_COLOR} title={FAGITO_SIGNUP_SCREEN} />
                </View>
            )
        }
        return (
            <View style={CONTAINER_STYLE.container}>
                {backIconHeader}
                <FagitoFormComponent form={FAGITO_SIGNUP_FORM_NAME} formButtonClick={this.handleButtonClick} termsText buttonTitle={FAGITO_REGISTER} newForm formItems={FAGITO_SIGNUP_FORM} />
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


export default connect(mapStateToProps, mapDispatchToProps)(FagitoSignupScreen);