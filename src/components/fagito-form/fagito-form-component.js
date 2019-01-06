import React, { Component } from 'react';
import { ScrollView, Text, View, Keyboard } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { FAGITO_SIGNIN_SIGNUP_CONTAINERS } from '../../common/fagito-common-style';
import { FagitoTextInput, FagitoButton, FagitoTermsAndCondition } from '../../components/fagito-components';
import { STYLES } from './fagito-form-style';
import {
    FAGITO_DEFAULT_KEYBOARD, FAGITO_NUMERIC_KEYBOARD, FAGITO_FIELD_NAME_PASSWORD,
    FAGITO_FIELD_NAME_MOBILE_NUMBER
} from '../../common/fagito-constants';
import validate from '../../utility/fagito-form-validations';

const FagitoFormComponent = (props) => {

    const handleFormButtonClick = (values) => {
        Keyboard.dismiss();
        props.formButtonClick(values);
    }
    let termsText = null;
    let resetPasswordText = null;
    const { handleSubmit } = props;
    const scrollViewItems = (props.formItems.map((item, key) => {
        if (props.newForm) {
            item.value = '';
        }
        return <Field
            component={FagitoTextInput}
            key={key}
            name={item.fieldName}
            label={item.label}
            props={{
                value: item.value,
                secureTextEntry: item.fieldName === FAGITO_FIELD_NAME_PASSWORD ? true : false,
                keyboardType: item.fieldName === FAGITO_FIELD_NAME_MOBILE_NUMBER ? FAGITO_NUMERIC_KEYBOARD : FAGITO_DEFAULT_KEYBOARD
            }}
        // input={{ value: item.value }}
        // onChangeText={(newText) => this.handleTextChange(newText, key)}
        />
    }));
    if (props.termsText) {
        termsText = (
            <FagitoTermsAndCondition />
        );
    }
    if (props.resetPassword) {
        resetPasswordText = (
            <View style={STYLES.resetPassword}>
                <Text onPress={props.handleReset} style={STYLES.resetPasswordText}>Reset Password</Text>
            </View>
        )
    }
    return (
        <ScrollView keyboardShouldPersistTaps='handled' style={FAGITO_SIGNIN_SIGNUP_CONTAINERS.signupSigninContainer}>
            {scrollViewItems}
            {termsText}
            <View style={STYLES.formButton}>
                <FagitoButton onButtonClick={handleSubmit((values) => handleFormButtonClick(values))} buttonTitle={props.buttonTitle} />
            </View>
            {resetPasswordText}
        </ScrollView>
    )
}

export default reduxForm({
    validate
})(FagitoFormComponent);