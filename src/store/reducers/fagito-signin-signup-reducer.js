import {
    LOAD_USER_SIGNUP_FORM_ITEMS, LOAD_USER_SIGNIN_FORM_ITEMS, UPDATE_USER_LOGGED_IN_STATUS
} from '../actions/fagito-action-types';

const initialState = {
    signupForm: [],
    signinForm: [],
    userLoggedInStatus: false,
    backIconDisplay: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USER_SIGNUP_FORM_ITEMS:
            return {
                ...state,
                signupForm: action.items
            }
        case LOAD_USER_SIGNIN_FORM_ITEMS:
            return {
                ...state,
                signinForm: action.items
            }
        case UPDATE_USER_LOGGED_IN_STATUS:
            return {
                ...state,
                userLoggedInStatus: action.userLoggedInStatus,
                backIconDisplay: action.backIconDisplay
            }
        default:
            return state;
    }
}

export default reducer;