import * as types from './fagito-action-types';
import { FAGITO_SIGNUP_ITEMS } from '../../common/fagito-signup-signin';

export const getUserDetails = () => {
    return {
        type: types.LOAD_USER_FORM_ITEMS,
        items: FAGITO_SIGNUP_ITEMS
    }
}

export const resetUserDetails = () => {
    return {
        type: types.RESET_USER_FORM_DETAILS,
        items: []
    }
}