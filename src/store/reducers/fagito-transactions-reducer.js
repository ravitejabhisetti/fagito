import { FAGITO_GET_TRANSACTIONS, RESET_TRANSACTIONS_STATE } from '../actions/fagito-action-types';

const initialState = {
    transactions: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FAGITO_GET_TRANSACTIONS:
            return {
                ...state,
                transactions: action.transactions
            }
        case RESET_TRANSACTIONS_STATE:
            return {
                ...state,
                transactions: null
            };
        default:
            return state;
    }
}

export default reducer;