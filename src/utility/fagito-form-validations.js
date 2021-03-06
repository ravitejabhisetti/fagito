import {
    FAGITO_VALID_USER_NAME_ERROR, FAGITO_VALID_EMAIL_ERROR,
    FAGITO_VALID_MOBILE_NUMBER_ERROR, FAGITO_VALID_PASSWORD_ERROR, FAGITO_VALID_USER_NAME_CHARACTERS_ERROR, PROFILE, ENTER_ADDRESS_ERROR
} from '../common/fagito-constants';

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = FAGITO_VALID_USER_NAME_ERROR;
    } else if (!nameValidator(values.name)) {
        errors.name = FAGITO_VALID_USER_NAME_CHARACTERS_ERROR;
    }
    if (!values.email || !emailValidator(values.email)) {
        errors.email = FAGITO_VALID_EMAIL_ERROR;
    }
    if (!values.mobileNumber || values.mobileNumber.length !== 10 || !mobileNumberValidator(values.mobileNumber)) {
        errors.mobileNumber = FAGITO_VALID_MOBILE_NUMBER_ERROR;
    }
    if (!values.password) {
        errors.password = FAGITO_VALID_PASSWORD_ERROR;
    }
    if (!values.homeAddressLineOne || values.homeAddressLineOne === '') {
        errors.homeAddressLineOne = ENTER_ADDRESS_ERROR;
    }
    if (!values.homeAddressLineTwo || values.homeAddressLineTwo === '') {
        errors.homeAddressLineTwo = ENTER_ADDRESS_ERROR;
    }
    return errors;
}

export const validateFormEntities = (entities, sectionName) => {
    let values = {};
    let isFormValid = false;
    if (sectionName === PROFILE) {
        values['name'] = entities[0].value;
        values['mobileNumber'] = entities[2].value;
        let errors = validate(values);
        if (!errors.name && !errors.mobileNumber) {
            isFormValid = true;
        }
    } else {
        values['homeAddressLineOne'] = entities[0].value;
        values['homeAddressLineTwo'] = entities[1].value;
        let errors = validate(values);
        if (!errors.homeAddressLineOne && !errors.homeAddressLineTwo) {
            isFormValid = true;
        }
    }
    return isFormValid;
}

const nameValidator = (value) => {
    return /^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(value);
}

const emailValidator = (value) => {
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(value);
}

const mobileNumberValidator = (value) => {
    return /^[0-9]+$/.test(value);
}

export default validate;