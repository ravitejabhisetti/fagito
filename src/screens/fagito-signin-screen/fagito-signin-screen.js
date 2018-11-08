import React, { Component } from 'react';
import { Text } from 'react-native';
import { FAGITO_SIGNIN_SCREEN } from '../../common/fagito-constants';

class FagitoSigninScreen extends Component {
    static navigationOptions = { title: FAGITO_SIGNIN_SCREEN };
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Text>Sign In screen</Text>
        )
    }
}

export default FagitoSigninScreen;