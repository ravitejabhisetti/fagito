import { FAGITO_SET_TOKEN, FAGITO_CLEAR_TOKEN, RESET_AUTHENTICATION_STATE } from '../actions/fagito-action-types';

const initialState = {
    token: null,
    expiryTime: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FAGITO_SET_TOKEN:
            return {
                ...state,
                token: action.token,
                expiryTime: action.expiryTime
            }
        case FAGITO_CLEAR_TOKEN:
            return {
                ...state,
                token: null,
                expiryTime: null
            }
        case RESET_AUTHENTICATION_STATE:
            return initialState;
        default:
            return state;
    }
}

export default reducer;