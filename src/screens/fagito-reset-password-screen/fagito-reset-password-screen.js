import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { FAGITO_RESET_PASSWORD, FAGITO_RESET_PASSWORD_BUTTON, FAGITO_RESET_PASSWORD_FORM_NAME, PASSWORD_RESET_HEADER, PASSWORD_RESET_MESSAGE } from '../../common/fagito-constants';
import { CONTAINER_STYLE } from '../../common/fagito-common-style';
import { FagitoFormComponent } from '../../components/fagito-components';
import { FAGITO_RESET_PASSWORD_FORM } from '../../common/fagito-signup-signin-constants';
import { fagitoShowAlert } from '../../store/actions/actions';

class FagitoResetPasswordScreen extends Component {
    static navigationOptions = { title: FAGITO_RESET_PASSWORD };
    handleButtonClick = (formItems) => {
        this.props.showAlert({ alertHeader: PASSWORD_RESET_HEADER, alertMessage: PASSWORD_RESET_MESSAGE });
    }

    render() {
        return (
            <View style={CONTAINER_STYLE.container}>
                <FagitoFormComponent
                    form={FAGITO_RESET_PASSWORD_FORM_NAME}
                    formButtonClick={this.handleButtonClick}
                    newForm
                    buttonTitle={FAGITO_RESET_PASSWORD_BUTTON}
                    formItems={FAGITO_RESET_PASSWORD_FORM} />
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showAlert: (alert) => dispatch(fagitoShowAlert(alert))
    }
}

export default connect(null, mapDispatchToProps)(FagitoResetPasswordScreen);