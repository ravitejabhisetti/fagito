import { getToken } from './actions';
import { FAGITO_TRANSACTIONS_URL, METHOD_GET, FAGITO_USER_TRANSACTIONS } from '../../common/fagito-constants';
import { FAGITO_GET_TRANSACTIONS } from './fagito-action-types';
import { AsyncStorage } from 'react-native';

export const getUserTransactions = () => {
    return dispatch => {
        AsyncStorage.getItem(FAGITO_USER_TRANSACTIONS).then(userTransactions => {
            let parsedUserTransactions = JSON.parse(userTransactions);
            if (!parsedUserTransactions) {
                dispatch(getToken()).then(apiToken => {
                    let transactionsUrl = FAGITO_TRANSACTIONS_URL + apiToken;
                    fetch(transactionsUrl, {
                        method: METHOD_GET
                    }).catch((error) => {
                    }).then(res => res.json()).then(transactionsResponse => {
                        AsyncStorage.setItem(FAGITO_USER_TRANSACTIONS, JSON.stringify(transactionsResponse));
                        dispatch(updateTransactions(transactionsResponse));
                    })
                })
            } else {
                dispatch(updateTransactions(parsedUserTransactions));
            }
        })
    }
}

export const updateTransactions = (transactions) => {
    return {
        type: FAGITO_GET_TRANSACTIONS,
        transactions: transactions
    }
}