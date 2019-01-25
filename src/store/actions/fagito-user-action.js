import { ADD_ADDON, DELETE_ADDON, RESET_ADDONS, UPDATE_ADDONS_OF_PRODUCT } from './fagito-action-types';
import { AsyncStorage } from 'react-native';
import { getToken, updateUserDetails, fagitoStartLoader, fagitoStopLoader } from './actions';
import { FAGITO_USER_DETAILS, FIREBASE_URL, FAGITO_API_CALL_HEADERS, METHOD_PUT, PROFILE, UPDATE_PROFILE_INFO, SETTINGS_SCREEN } from '../../common/fagito-constants';
import _ from 'lodash';
import { navigatorRef } from '../../../App';
import { NavigationActions } from 'react-navigation';

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

export const updateUser = (product, addonsSelected, updateType, formEntities = []) => {
    return dispatch => {
        AsyncStorage.getItem(FAGITO_USER_DETAILS).then(userDetails => {
            let parsedUserDetails = JSON.parse(userDetails);
            if (updateType === 'addons') {
                let productIndex = _.findIndex(parsedUserDetails.productsSelected, function (selectedProduct) { return selectedProduct.id === product.id; });
                parsedUserDetails.productsSelected[productIndex]['addons'] = addonsSelected;
            }
            if (updateType === PROFILE) {
                parsedUserDetails.name = formEntities[0].value;
                parsedUserDetails.mobileNumber = formEntities[2].value;
                dispatch(fagitoStartLoader(UPDATE_PROFILE_INFO));
            }
            dispatch(getToken()).then(apiToken => {
                let url = FIREBASE_URL + 'users/' + parsedUserDetails.userId + '.json?auth=' + apiToken;
                return fetch(url, {
                    method: METHOD_PUT,
                    body: JSON.stringify(parsedUserDetails),
                    headers: FAGITO_API_CALL_HEADERS
                }).catch((error) => {
                    dispatch(fagitoStopLoader());
                }).then(res => res.json()).then(response => {
                    dispatch(fagitoStopLoader());
                    if (updateType === 'addons') {
                        dispatch(updateSelectedProductAddons(product, addonsSelected, productIndex));
                    } else {
                        navigatorRef.dispatch(NavigationActions.navigate({ routeName: SETTINGS_SCREEN }));
                    }
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