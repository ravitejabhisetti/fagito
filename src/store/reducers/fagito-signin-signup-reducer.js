import {
    LOAD_USER_SIGNUP_FORM_ITEMS, LOAD_USER_SIGNIN_FORM_ITEMS
} from '../actions/fagito-action-types';

const initialState = {
    signupForm: [],
    signinForm: []
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
        default:
            return state;
    }
}

export default reducer;