import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { FAGITO_SIGNIN_SIGNUP_CONTAINERS } from '../../common/fagito-common-style';
import { FagitoTextInput } from '../../components/fagito-components';

class FagitoFormComponent extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        formItems: []
    }
    handleTextChange = (newText, key) => {
        this.setState(prevState => {
            prevState.formItems[key].value = newText;
            return { prevState };
        })
    }
    render() {
        this.state.formItems = this.props.formItems;
        const scrollViewItems = (this.state.formItems.map((item, key) => (
            <FagitoTextInput key={key} label={item.label} value={item.value} onChangeText={(newText) => this.handleTextChange(newText, key)} />
        )));
        return (
            <ScrollView style={FAGITO_SIGNIN_SIGNUP_CONTAINERS.signupSigninContainer}>
                {scrollViewItems}
            </ScrollView>
        )
    }
}

export default FagitoFormComponent;