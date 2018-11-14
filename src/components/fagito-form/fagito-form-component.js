import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Field } from 'redux-form';
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
        this.props.formItems[key].value = newText;
    }
    handleFormButtonClick = () => {
        this.props.formButtonClick(this.props.formItems);
    }
    componentWillUnmount() {
        console.log('in unmount---', this.props.formItems);
        // this.props.formItems = [];
    }
    render() {
        let termsText = null;
        let resetPasswordText = null;
        console.log('form items are---', this.props.formItems);
        const scrollViewItems = (this.props.formItems.map((item, key) => (
            <Field component={FagitoTextInput} key={key} name={item.label} label={item.label} input={item.value} onChangeText={(newText) => this.handleTextChange(newText, key)} />
        )));
        if (this.props.termsText) {
            termsText = (
                <FagitoTermsAndCondition />
            );
        }
        if (this.props.resetPassword) {
            resetPasswordText = (
                <View style={STYLES.resetPassword}>
                    <Text onPress={this.props.handleReset} style={STYLES.resetPasswordText}>Reset Password</Text>
                </View>
            )
        }
        return (
            <ScrollView style={FAGITO_SIGNIN_SIGNUP_CONTAINERS.signupSigninContainer}>
                {scrollViewItems}
                {termsText}
                <View style={STYLES.formButton}>
                    <FagitoButton onButtonClick={this.handleFormButtonClick} buttonTitle={this.props.buttonTitle} />
                </View>
                {resetPasswordText}
            </ScrollView>
        )
    }
}

export default FagitoFormComponent;