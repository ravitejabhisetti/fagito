import React, { Component } from 'react';
import { ScrollView, Text, View, Keyboard } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { FAGITO_SIGNIN_SIGNUP_CONTAINERS } from '../../common/fagito-common-style';
import { FagitoTextInput, FagitoButton, FagitoTermsAndCondition } from '../../components/fagito-components';
import { STYLES } from './fagito-form-style';
import {
    FAGITO_DEFAULT_KEYBOARD, FAGITO_NUMERIC_KEYBOARD, FAGITO_FIELD_NAME_PASSWORD,
    FAGITO_FIELD_NAME_MOBILE_NUMBER,
    STRING,
    AMOUNT_FIELD
} from '../../common/fagito-constants';
import validate from '../../utility/fagito-form-validations';
import * as style from '../../common/fagito-style-constants';

// const FagitoFormComponent = (props) => {
class FagitoFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formEntities: []
        }
    }

    componentWillMount() {
        this.setState((state) => {
            return {
                ...state,
                formEntities: this.props.formItems
            }
        })
    }

    handleFormButtonClick = (values) => {
        Keyboard.dismiss();
        this.props.formButtonClick(values);
    }

    handleUpdateForm = () => {
        Keyboard.dismiss();
        this.props.formButtonClick(this.state.formEntities);
    }

    updateCheck = (value, key, fieldName) => {
        if (this.props.amountForm) {
            this.props.updateAmountForm();
        }
        if (typeof (value) === STRING) {
            this.state.formEntities[key].value = value;
        }
    }

    render() {
        let termsText = null;
        let resetPasswordText = null;
        let submitButton = null;
        let { handleSubmit, ...props } = this.props;
        let scrollViewItems = (props.formItems.map((item, key) => {
            if (props.newForm) {
                item.value = '';
            }
            return <Field
                component={FagitoTextInput}
                key={key}
                name={item.fieldName}
                label={item.label}
                nonEditable={item.nonEditable}
                formUpdated={props.amountForm && props.buttonClicked}
                newForm={props.newForm}
                onChange={(value) => this.updateCheck(value, key, item.fieldName)}
                props={{
                    value: item.value,
                    secureTextEntry: item.fieldName === FAGITO_FIELD_NAME_PASSWORD ? true : false,
                    keyboardType: (item.fieldName === FAGITO_FIELD_NAME_MOBILE_NUMBER || item.fieldName === AMOUNT_FIELD) ?
                        FAGITO_NUMERIC_KEYBOARD : FAGITO_DEFAULT_KEYBOARD
                }}
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
        if (!props.hideSubmitButton) {
            submitButton = (
                <View style={STYLES.formButton}>
                    <FagitoButton
                        borderColor={style.FAGITO_BUTTON_COLOR}
                        backgroundColor={style.FAGITO_WHITE_COLOR}
                        onButtonClick={!props.updateForm ? handleSubmit((values) => this.handleFormButtonClick(values)) : () => this.handleUpdateForm()} buttonTitle={props.buttonTitle} />
                </View>
            )
        }
        return (
            <ScrollView keyboardShouldPersistTaps='handled' style={FAGITO_SIGNIN_SIGNUP_CONTAINERS.signupSigninContainer}>
                {scrollViewItems}
                {termsText}
                {submitButton}
                {resetPasswordText}
            </ScrollView>
        )
    }
}

export default reduxForm({
    validate
})(FagitoFormComponent);