import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { FAGITO_SIGNUP_SCREEN } from '../../common/fagito-constants';
import { FagitoButton, FagitoTextInput } from '../../components/fagito-components';
import { FAGITO_SIGNIN_SIGNUP_CONTAINERS, CONTAINER_STYLE } from '../../common/fagito-common-style';

class FagitoSignupScreen extends Component {
    static navigationOptions = { title: FAGITO_SIGNUP_SCREEN };
    state = {
        value: ''
    }
    constructor(props) {
        super(props);
    }
    handleTextChange = (newText) => {
        this.setState({ value: newText });
    }
    render() {
        return (
            <View style={CONTAINER_STYLE.container}>
                <ScrollView style={FAGITO_SIGNIN_SIGNUP_CONTAINERS.signupSigninContainer}>
                    <FagitoTextInput label="Email" value={this.state.value} onChangeText={this.handleTextChange} />
                </ScrollView>
            </View>
        )
    }
}

export default FagitoSignupScreen;