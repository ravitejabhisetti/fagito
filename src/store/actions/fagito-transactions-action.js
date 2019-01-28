import { getToken } from './actions';
import { FAGITO_TRANSACTIONS_URL, METHOD_GET } from '../../common/fagito-constants';
import { FAGITO_GET_TRANSACTIONS } from './fagito-action-types';

export const getUserTransactions = () => {
    return dispatch => {
        dispatch(getToken()).then(apiToken => {
            let transactionsUrl = FAGITO_TRANSACTIONS_URL + apiToken;
            fetch(transactionsUrl, {
                method: METHOD_GET
            }).catch((error) => {
            }).then(res => res.json()).then(transactionsResponse => {
                console.log('transactions response is---', transactionsResponse);
                dispatch(updateTransactions(transactionsResponse));
            })
        })
    }
}

export const updateTransactions = (transactions) => {
    return {
        type: FAGITO_GET_TRANSACTIONS,
        transactions: transactions
    }
}