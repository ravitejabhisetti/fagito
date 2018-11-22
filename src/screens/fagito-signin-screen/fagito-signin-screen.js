import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { CONTAINER_STYLE } from '../../common/fagito-common-style';
import { FagitoFormComponent } from '../../components/fagito-components';
import { FAGITO_SIGNIN_SCREEN, FAGITO_SIGNIN, FAGITO_RESET_PASSWORD_SCREEN, FAGITO_SIGNIN_AUTH_MODE } from '../../common/fagito-constants';
import { FAGITO_SIGNIN_FORM } from '../../common/fagito-signup-signin-constants';
import { userAuthentication } from '../../store/actions/actions';

class FagitoSigninScreen extends Component {
    static navigationOptions = { title: FAGITO_SIGNIN_SCREEN };
    handleButtonClick = (formItems) => {
        console.log('in button click check--', formItems);
        this.props.userAuthentication(formItems, FAGITO_SIGNIN_AUTH_MODE);
    }
    handleResetPassword = () => {
        this.props.navigation.navigate(FAGITO_RESET_PASSWORD_SCREEN);
    }
    render() {
        return (
            <View style={CONTAINER_STYLE.container}>
                <FagitoFormComponent formButtonClick={this.handleButtonClick} handleReset={this.handleResetPassword} newForm resetPassword buttonTitle={FAGITO_SIGNIN} formItems={FAGITO_SIGNIN_FORM} />
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userAuthentication: (userData, authMode) => dispatch(userAuthentication(userData, authMode))
    }
}

FagitoSigninScreen = reduxForm({
    form: 'signinForm'
})(FagitoSigninScreen);

export default connect(null, mapDispatchToProps)(FagitoSigninScreen);