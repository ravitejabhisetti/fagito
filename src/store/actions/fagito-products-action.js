import { FAGITO_GET_PRODUCTS, FAGITO_ADD_SELECTED_PRODUCT, FAGITO_DELETE_SELECTED_PRODUCT } from './fagito-action-types';
import { fagitoStartLoader, fagitoStopLoader, getToken, handleError } from './actions';
import {
    FETCH_MESSAGE_1, FETCH_MESSAGE_2, FIREBASE_URL,
    LUNCH_OPTION, AUTH_URL, FAGITO_TOKEN, DINNER_OPTION, METHOD_GET
} from '../../common/fagito-constants';
import { AsyncStorage } from 'react-native';

export const getProductsOfDate = (timing, filters, selectedDateIndex) => {
    return dispatch => {
        let url = '';
        dispatch(updateProductsList([]));
        dispatch(fagitoStartLoader(FETCH_MESSAGE_1 + timing.timingSelected + FETCH_MESSAGE_2 + filters.locationFilter));
        dispatch(getToken()).then(apiToken => {
            if (timing.lunchTiming) {
                url = FIREBASE_URL + LUNCH_OPTION + selectedDateIndex + AUTH_URL + apiToken;
            } else {
                let dinnerIndex = selectedDateIndex < 3 ? selectedDateIndex : 1;
                url = FIREBASE_URL + DINNER_OPTION + dinnerIndex + AUTH_URL + apiToken;
            }
            return fetch(url, {
                method: METHOD_GET
            })
        }).catch(err => {
            handleError(err, dispatch);
        }).then(res => res.json()).then(productsResponse => {
            dispatch(fagitoStopLoader());
            let productsList = [];
            if (productsResponse.result.length > 1) {
                productsList = productsResponse.result;
            }
            console.log('products response is---', productsResponse);
            dispatch(updateProductsList(productsList));
        });
    }
}

export const addSelectedProduct = (product) => {
    return {
        type: FAGITO_ADD_SELECTED_PRODUCT,
        product: product
    }
}

export const deleteSelectedProduct = (product) => {
    return {
        type: FAGITO_DELETE_SELECTED_PRODUCT,
        product: product
    }
}

export const updateProductsList = (productsList) => {
    return {
        type: FAGITO_GET_PRODUCTS,
        productsList: productsList
    }
}