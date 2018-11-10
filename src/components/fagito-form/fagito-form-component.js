import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { FAGITO_SIGNIN_SIGNUP_CONTAINERS } from '../../common/fagito-common-style';
import { FagitoTextInput, FagitoButton, FagitoTermsAndCondition } from '../../components/fagito-components';
import { STYLES } from './fagito-form-style';

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
        let termsText = null;
        this.state.formItems = this.props.formItems;
        const scrollViewItems = (this.state.formItems.map((item, key) => (
            <FagitoTextInput key={key} label={item.label} value={item.value} onChangeText={(newText) => this.handleTextChange(newText, key)} />
        )));
        if (this.props.termsText) {
            termsText = (
                <FagitoTermsAndCondition />
            );
        }
        return (
            <ScrollView style={FAGITO_SIGNIN_SIGNUP_CONTAINERS.signupSigninContainer}>
                {scrollViewItems}
                {termsText}
                <View style={STYLES.formButton}>
                    <FagitoButton buttonTitle={this.props.buttonTitle} />
                </View>
            </ScrollView>
        )
    }
}

export default FagitoFormComponent;