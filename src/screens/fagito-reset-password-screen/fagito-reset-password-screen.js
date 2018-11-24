import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { FAGITO_RESET_PASSWORD, FAGITO_RESET_PASSWORD_BUTTON, FAGITO_RESET_PASSWORD_FORM_NAME } from '../../common/fagito-constants';
import { CONTAINER_STYLE } from '../../common/fagito-common-style';
import { FagitoFormComponent } from '../../components/fagito-components';
import { FAGITO_RESET_PASSWORD_FORM } from '../../common/fagito-signup-signin-constants';

class FagitoResetPasswordScreen extends Component {
    static navigationOptions = { title: FAGITO_RESET_PASSWORD };
    handleButtonClick = (formItems) => {
        console.log('form reset items in reset are---', formItems);
    }

    render() {
        return (
            <View style={CONTAINER_STYLE.container}>
                <FagitoFormComponent form={FAGITO_RESET_PASSWORD_FORM_NAME} formButtonClick={this.handleButtonClick} newForm buttonTitle={FAGITO_RESET_PASSWORD_BUTTON} formItems={FAGITO_RESET_PASSWORD_FORM} />
            </View>
        )
    }
}

// FagitoResetPasswordScreen = reduxForm({
//     form: 'resetPasswordForm'
// })(FagitoResetPasswordScreen);

export default connect(null, null)(FagitoResetPasswordScreen);