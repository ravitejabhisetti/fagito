import { ADD_ADDON, DELETE_ADDON, RESET_ADDONS, UPDATE_ADDONS_OF_PRODUCT } from './fagito-action-types';
import { AsyncStorage } from 'react-native';
import { getToken, updateUserDetails } from './actions';
import { FAGITO_USER_DETAILS, FIREBASE_URL, FAGITO_API_CALL_HEADERS, METHOD_PUT } from '../../common/fagito-constants';
import _ from 'lodash';

export const addAddon = (addon) => {
    return {
        type: ADD_ADDON,
        addon: addon
    }
}

export const deleteAddon = (addon) => {
    return {
        type: DELETE_ADDON,
        addon: addon
    }
}

export const resetAddons = () => {
    return {
        type: RESET_ADDONS
    }
}

export const updateAddonsOfProduct = (product, addonsSelected) => {
    return dispatch => {
        AsyncStorage.getItem(FAGITO_USER_DETAILS).then(userDetails => {
            let parsedUserDetails = JSON.parse(userDetails);
            let productIndex = _.findIndex(parsedUserDetails.productsSelected, function (selectedProduct) { return selectedProduct.id === product.id; });
            parsedUserDetails.productsSelected[productIndex]['addons'] = addonsSelected;
            dispatch(getToken()).then(apiToken => {
                let url = FIREBASE_URL + 'users/' + parsedUserDetails.userId + '.json?auth=' + apiToken;
                return fetch(url, {
                    method: METHOD_PUT,
                    body: JSON.stringify(parsedUserDetails),
                    headers: FAGITO_API_CALL_HEADERS
                }).catch((error) => {
                }).then(res => res.json()).then(response => {
                    dispatch(updateSelectedProductAddons(product, addonsSelected, productIndex));
                    dispatch(updateUserDetails(response));
                    AsyncStorage.setItem(FAGITO_USER_DETAILS, JSON.stringify(response));
                })
            })
        })
    }
}

export const updateSelectedProductAddons = (product, addonsSelected, productIndex) => {
    return {
        type: UPDATE_ADDONS_OF_PRODUCT,
        product: product,
        addonsSelected: addonsSelected,
        productIndex: productIndex
    }

}