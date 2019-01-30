import {
    LOAD_USER_SIGNUP_FORM_ITEMS, LOAD_USER_SIGNIN_FORM_ITEMS, UPDATE_USER_LOGGED_IN_STATUS,
    UPDATE_USER_DETAILS, RESET_SIGNIN_SIGNUP_STATE
} from '../actions/fagito-action-types';

const initialState = {
    signupForm: [],
    signinForm: [],
    userLoggedInStatus: false,
    backIconDisplay: false,
    loggedInUserDetails: null
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
        case UPDATE_USER_DETAILS:
            return {
                ...state,
                loggedInUserDetails: action.userDetails
            }
        case RESET_SIGNIN_SIGNUP_STATE:
            return initialState;
        default:
            return state;
    }
}

export default reducer;