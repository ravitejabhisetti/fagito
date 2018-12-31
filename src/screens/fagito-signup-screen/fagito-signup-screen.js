import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { CONTAINER_STYLE } from '../../common/fagito-common-style';
import { FAGITO_SIGNUP_SCREEN, FAGITO_REGISTER, FAGITO_SIGNUP_FORM_NAME, FAGITO_SIGNUP_AUTH_MODE } from '../../common/fagito-constants';
import { FagitoFormComponent } from '../../components/fagito-components';
import { FAGITO_SIGNUP_FORM } from '../../common/fagito-signup-signin-constants';
import { userAuthentication } from '../../store/actions/actions';

class FagitoSignupScreen extends Component {
    static navigationOptions = { title: FAGITO_SIGNUP_SCREEN };

    handleButtonClick = (formItems) => {
        this.props.userAuthentication(formItems, FAGITO_SIGNUP_AUTH_MODE);
    }

    render() {
        return (
            <View style={CONTAINER_STYLE.container}>
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

// FagitoSignupScreen = reduxForm({
//     form: 'signupForm'
// })(FagitoSignupScreen);


export default connect(null, mapDispatchToProps)(FagitoSignupScreen);