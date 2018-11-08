import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FAGITO_SIGNUP_SCREEN } from '../../common/fagito-constants';
import { FagitoButton, FagitoTextInput } from '../../components/fagito-components';

class FagitoSignupScreen extends Component {
    static navigationOptions = { title: FAGITO_SIGNUP_SCREEN };
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <FagitoTextInput />
            </View>
        )
    }
}

export default FagitoSignupScreen;