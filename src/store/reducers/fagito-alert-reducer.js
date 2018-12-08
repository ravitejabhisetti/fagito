import { FAGITO_SHOW_ALERT, FAGITO_HIDE_ALERT } from '../actions/fagito-action-types';

const initialState = {
    showAlert: false,
    alertItems: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FAGITO_SHOW_ALERT:
            return {
                ...state,
                showAlert: true,
                alertItems: action.alertItems
            }
        case FAGITO_HIDE_ALERT:
            return {
                ...state,
                showAlert: false,
                alertItems: null
            }
        default:
            return state;
    }
}

export default reducer;