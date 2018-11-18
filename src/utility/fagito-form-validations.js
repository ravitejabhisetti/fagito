import {
    FAGITO_VALID_USER_NAME_ERROR, FAGITO_VALID_EMAIL_ERROR,
    FAGITO_VALID_MOBILE_NUMBER_ERROR, FAGITO_VALID_PASSWORD_ERROR
} from '../common/fagito-constants';

const validate = values => {
    const errors = {};
    if (!values.name || !nameValidator(values.name)) {
        errors.name = FAGITO_VALID_USER_NAME_ERROR;
    }
    console.log('errors are---', errors);
    return errors;
}

const nameValidator = (value) => {
    console.log('in check valid---', /^[A-Za-z]+$/.test(value));
    return /^[A-Za-z]+$/.test(value);
}

export default validate;