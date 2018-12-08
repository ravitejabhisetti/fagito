import { FAGITO_INVALID_PASSWORD_USERNAME_ERROR_MESSAGE, FAGITO_SOMETHING_WENT_WRONG_ERROR_MESSAGE } from '../common/fagito-constants';

const validate = (errorMessage) => {
    switch (errorMessage) {
        case 'EMAIL_NOT_FOUND':
        case 'INVALID_PASSWORD':
            return FAGITO_INVALID_PASSWORD_USERNAME_ERROR_MESSAGE;
        default:
            return FAGITO_SOMETHING_WENT_WRONG_ERROR_MESSAGE;
    }
}

export default validate;