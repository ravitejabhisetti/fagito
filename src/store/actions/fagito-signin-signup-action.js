import * as types from './fagito-action-types';
import { FAGITO_SIGNUP_FORM, FAGITO_SIGNIN_FORM } from '../../common/fagito-signup-signin';

export const getUserSignupDetails = () => {
    return {
        type: types.LOAD_USER_SIGNUP_FORM_ITEMS,
        items: FAGITO_SIGNUP_FORM
    }
}

export const getUserSigninDetails = () => {
    return {
        type: types.LOAD_USER_SIGNIN_FORM_ITEMS,
        items: FAGITO_SIGNIN_FORM
    }
}