import {
    FAGITO_GET_PRODUCTS, FAGITO_ADD_SELECTED_PRODUCT,
    FAGITO_DELETE_SELECTED_PRODUCT, FAGITO_UPDATE_USER_SELECTED_PRODUCTS, UPDATE_INDEX_OF_PRODUCT_TO_UPDATE_ADDONS
} from './fagito-action-types';
import { fagitoStartLoader, fagitoStopLoader, getToken, handleError, updateUserDetails } from './actions';
import {
    FETCH_MESSAGE_1, FETCH_MESSAGE_2, FIREBASE_URL,
    LUNCH_OPTION, AUTH_URL, FAGITO_TOKEN, DINNER_OPTION, METHOD_GET, FAGITO_USER_DETAILS, FAGITO_API_CALL_HEADERS, METHOD_PUT
} from '../../common/fagito-constants';
import { AsyncStorage } from 'react-native';

export const getProductsOfDate = (timing, filters, selectedDateIndex) => {
    return dispatch => {
        let url = '';
        dispatch(updateProductsList([]));
        // let location = '';
        // if (filters.addressArea !== '') {
        //     location = filters.addressArea;
        // } else {
        //     location = filters.locationFilter;
        // }
        dispatch(fagitoStartLoader(FETCH_MESSAGE_1 + timing.timingSelected + FETCH_MESSAGE_2 + filters.addressArea));
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
            dispatch(updateProductsList(productsList));
        });
    }
}

export const updatedProductsOfUser = (product, timingSelected, dateSelected, month, variantIndex, update, index) => {
    return dispatch => {
        AsyncStorage.getItem(FAGITO_USER_DETAILS).then(userDetails => {
            let parsedUserDetails = JSON.parse(userDetails);
            if (update) {
                updateProductTimingAndDate(product, timingSelected, dateSelected, month, variantIndex);
                product.id = Math.random().toString(11).replace('0.', '');
                if (!parsedUserDetails.productsSelected) {
                    parsedUserDetails.productsSelected = [];
                    parsedUserDetails.productsSelected.push(product);
                } else {
                    parsedUserDetails.productsSelected.push(product);
                }
            } else {
                parsedUserDetails.productsSelected.splice(index, 1);
            }
            dispatch(getToken()).then(apiToken => {
                let url = FIREBASE_URL + 'users/' + parsedUserDetails.userId + '.json?auth=' + apiToken;
                return fetch(url, {
                    method: METHOD_PUT,
                    body: JSON.stringify(parsedUserDetails),
                    headers: FAGITO_API_CALL_HEADERS
                }).catch((error) => {
                }).then(res => res.json()).then(response => {
                    if (update) {
                        dispatch(addSelectedProduct(product, timingSelected, dateSelected, month, variantIndex));
                    } else {
                        dispatch(deleteSelectedProduct(index));
                    }
                    dispatch(updateUserDetails(response));
                    AsyncStorage.setItem(FAGITO_USER_DETAILS, JSON.stringify(response));
                })
            })
        })
    }
}

export const addSelectedProduct = (product, timingSelected, selectedDate, month, variantIndex) => {
    updateProductTimingAndDate(product, timingSelected, selectedDate, month, variantIndex);
    return {
        type: FAGITO_ADD_SELECTED_PRODUCT,
        product: product
    }
}

export const updateUserSelectedProducts = (userDetails) => {
    if (!userDetails.productsSelected) {
        userDetails.productsSelected = [];
    }
    return {
        type: FAGITO_UPDATE_USER_SELECTED_PRODUCTS,
        productsSelected: userDetails.productsSelected
    }
}

const updateProductTimingAndDate = (product, timing, date, month, variantIndex) => {
    product.timingSelected = timing;
    product.selectedDate = date;
    product.monthOfSelectedDate = month;
    product.variantIndex = variantIndex;
}

export const deleteSelectedProduct = (productIndex) => {
    return {
        type: FAGITO_DELETE_SELECTED_PRODUCT,
        productIndex: productIndex
    }
}

export const updateProductsList = (productsList) => {
    return {
        type: FAGITO_GET_PRODUCTS,
        productsList: productsList
    }
}

export const updateIndexOfProductToAddAddons = () => {
    return {
        type: UPDATE_INDEX_OF_PRODUCT_TO_UPDATE_ADDONS
    }
}