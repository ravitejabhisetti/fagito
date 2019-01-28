import { FAGITO_GET_TRANSACTIONS } from '../actions/fagito-action-types';

const initialState = {
    transactions: null
}

const reducer = (state = initialState.transactions, action) => {
    switch (action.type) {
        case FAGITO_GET_TRANSACTIONS:
            return {
                ...state,
                transactions: action.transactions
            }
        default:
            return state;
    }
}

export default reducer;