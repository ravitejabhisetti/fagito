import { FAGITO_GET_PRODUCTS, FAGITO_ADD_SELECTED_PRODUCT, FAGITO_DELETE_SELECTED_PRODUCT } from './fagito-action-types';
import { fagitoStartLoader, fagitoStopLoader, getToken, handleError } from './actions';
import {
    FETCH_MESSAGE_1, FETCH_MESSAGE_2, FIREBASE_URL,
    LUNCH_OPTION, AUTH_URL, FAGITO_TOKEN, DINNER_OPTION, METHOD_GET, FAGITO_USER_DETAILS, FAGITO_API_CALL_HEADERS
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

export const updatedProductsOfUser = (product, timingSelected, dateSelected) => {
    console.log('in add product to backend---', product);
    return dispatch => {
        AsyncStorage.getItem(FAGITO_USER_DETAILS).then(userDetails => {
            let parsedUserDetails = JSON.parse(userDetails);
            parsedUserDetails.mobileNumber = '1234567890';
            dispatch(getToken()).then(apiToken => {
                let url = FIREBASE_URL + 'users/' + parsedUserDetails.userId + '.json?auth=' + apiToken;
                return fetch(url, {
                    method: 'PUT',
                    body: JSON.stringify(parsedUserDetails),
                    headers: FAGITO_API_CALL_HEADERS
                }).catch((error) => {
                }).then(res => res.json()).then(response => {
                    console.log('response final is---', response);
                })
            })
        })
    }
}

export const addSelectedProduct = (product, timingSelected, selectedDate) => {
    product.timingSelected = timingSelected;
    product.selectedDate = selectedDate;
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