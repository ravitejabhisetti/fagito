import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FAGITO_SIGNUP_SCREEN } from '../../common/fagito-constants';

class FagitoSignupScreen extends Component {
    static navigationOptions = { title: FAGITO_SIGNUP_SCREEN };
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Text>Sign up Screen</Text>
        )
    }
}

export default FagitoSignupScreen;