import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { CONTAINER_STYLE } from '../../common/fagito-common-style';
import { FagitoFormComponent } from '../../components/fagito-components';
import { FAGITO_SIGNIN_SCREEN, FAGITO_SIGNIN, FAGITO_RESET_PASSWORD_SCREEN } from '../../common/fagito-constants';
import { FAGITO_SIGNIN_FORM } from '../../common/fagito-signup-signin';

class FagitoSigninScreen extends Component {
    static navigationOptions = { title: FAGITO_SIGNIN_SCREEN };
    handleButtonClick = (formItems) => {
        console.log('in button click check--', formItems);
    }
    handleResetPassword = () => {
        this.props.navigation.navigate(FAGITO_RESET_PASSWORD_SCREEN);
    }
    render() {
        return (
            <View style={CONTAINER_STYLE.container}>
                <FagitoFormComponent formButtonClick={this.handleButtonClick} handleReset={this.handleResetPassword} resetPassword buttonTitle={FAGITO_SIGNIN} formItems={this.props.signinForm} />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        signinForm: state.userDetails.signinForm
    }
}

FagitoSigninScreen = reduxForm({
    form: 'signinForm'
})(FagitoSigninScreen);

export default connect(mapStateToProps, null)(FagitoSigninScreen);