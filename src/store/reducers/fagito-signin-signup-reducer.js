import { LOAD_USER_FORM_ITEMS, RESET_USER_FORM_DETAILS } from '../actions/fagito-action-types';
import { FAGITO_SIGNUP_ITEMS } from '../../common/fagito-signup-signin';
import _ from 'lodash';

const initialState = {
    formItems: []
}
const signupFormList = _.cloneDeep(FAGITO_SIGNUP_ITEMS);
const reducer = (state = initialState.formItems, action) => {
    switch (action.type) {
        case LOAD_USER_FORM_ITEMS:
            return {
                ...state,
                formItems: action.items
            }
        case RESET_USER_FORM_DETAILS:
            return {
                ...state,
                formItems: signupFormList
            }
        default:
            return state;
    }
}

export default reducer;