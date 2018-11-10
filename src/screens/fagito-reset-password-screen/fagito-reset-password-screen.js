import React, { Component } from 'react';
import { Text } from 'react-native';
import { FAGITO_RESET_PASSWORD } from '../../common/fagito-constants';

class FagitoResetPasswordScreen extends Component {
    static navigationOptions = { title: FAGITO_RESET_PASSWORD };
    render() {
        return (
            <Text>Reset password screen</Text>
        )
    }
}

export default FagitoResetPasswordScreen;