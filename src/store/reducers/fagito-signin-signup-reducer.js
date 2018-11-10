import {
    LOAD_USER_SIGNUP_FORM_ITEMS, RESET_USER_SIGNUP_FORM_DETAILS,
    RESET_USER_SIGNIN_FORM_DETAILS, LOAD_USER_SIGNIN_FORM_ITEMS
} from '../actions/fagito-action-types';
import { FAGITO_SIGNUP_ITEMS, FAGITO_SIGNIN_ITEMS } from '../../common/fagito-signup-signin';
import _ from 'lodash';

const initialState = {
    formItems: [],
    signinItems: []
}
const signupFormList = _.cloneDeep(FAGITO_SIGNUP_ITEMS);
const signinFormList = _.cloneDeep(FAGITO_SIGNIN_ITEMS);
const reducer = (state = initialState.formItems, action) => {
    switch (action.type) {
        case LOAD_USER_SIGNUP_FORM_ITEMS:
            return {
                ...state,
                formItems: action.items
            }
        case RESET_USER_SIGNUP_FORM_DETAILS:
            return {
                ...state,
                formItems: signupFormList
            }
        case LOAD_USER_SIGNIN_FORM_ITEMS:
            return {
                ...state,
                signinItems: action.items
            }
        case RESET_USER_SIGNIN_FORM_DETAILS:
            return {
                ...state,
                signinItems: signinFormList
            }
        default:
            return state;
    }
}

export default reducer;