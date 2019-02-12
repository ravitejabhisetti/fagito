import { ADD_ADDON, DELETE_ADDON, RESET_ADDONS, UPDATE_ADDONS_OF_PRODUCT } from './fagito-action-types';
import { AsyncStorage } from 'react-native';
import {
    getToken, updateUserDetails, fagitoStartLoader, fagitoStopLoader,
    updateLocationFilter, getProductsOfDate, updateLocationFilterContent, fagitoShowAlert
} from './actions';
import {
    FAGITO_USER_DETAILS, FIREBASE_URL, FAGITO_API_CALL_HEADERS,
    METHOD_PUT, PROFILE, UPDATE_PROFILE_INFO, SETTINGS_SCREEN, ADDRESS,
    HOME_FIELD, ADDRESS_TYPE_HOME, FAGITO_HOME_SCREEN, ADDRESS_TYPE_OFFICE,
    UPDATE_WALLET, WALLET_ALERT_HEADER, WALLET_ALERT_MESSAGE, WALLET_PAYMENT_SCREEN,
    NET_BANKING_ENTITY, NET_BANKING_TITLE, FILTERS_CONTENT, ADD_ADDRESS_ARRAY
} from '../../common/fagito-constants';
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

export const updateUser = (product, addonsSelected, updateType, formEntities,
    addressType, city, area, addAddress, fetchProductsInfo) => {
    return dispatch => {
        AsyncStorage.getItem(FAGITO_USER_DETAILS).then(userDetails => {
            let productIndex = null;
            let parsedUserDetails = JSON.parse(userDetails);
            if (updateType === 'addons') {
                productIndex = _.findIndex(parsedUserDetails.productsSelected, function (selectedProduct) {
                    return selectedProduct.id === product.id;
                });
                parsedUserDetails.productsSelected[productIndex]['addons'] = addonsSelected;
            }
            if (updateType === PROFILE) {
                parsedUserDetails.name = formEntities[0].value;
                parsedUserDetails.mobileNumber = formEntities[2].value;
                dispatch(fagitoStartLoader(UPDATE_PROFILE_INFO));
            }
            if (updateType === ADDRESS) {
                if (addressType === ADDRESS_TYPE_HOME) {
                    parsedUserDetails['homeAddressLineOne'] = formEntities[0].value;
                    parsedUserDetails['homeAddressLineTwo'] = formEntities[1].value;
                    parsedUserDetails['homeAddressArea'] = area;
                    parsedUserDetails['homeAddressCity'] = city;
                } else {
                    parsedUserDetails['officeAddressLineOne'] = formEntities[0].value;
                    parsedUserDetails['officeAddressLineTwo'] = formEntities[1].value;
                    parsedUserDetails['officeAddressArea'] = area;
                    parsedUserDetails['officeAddressCity'] = city;
                }
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
                        // if (!addAddress && !fetchProductsInfo) {
                        // if (!addAddress) { /** main condition */
                        if ((updateType === PROFILE) || (!addAddress && !fetchProductsInfo.showPaymentScreen)) {
                            navigatorRef.dispatch(NavigationActions.navigate({ routeName: SETTINGS_SCREEN }));
                        } else {
                            if (!fetchProductsInfo.showPaymentScreen) {
                                navigatorRef.dispatch(NavigationActions.navigate({ routeName: FAGITO_HOME_SCREEN }));
                            } else {
                                fetchProductsInfo.locationFilterContent = _.cloneDeep(FILTERS_CONTENT.locationFilter);
                                fetchProductsInfo.locationFilterContent.areas = false;
                                fetchProductsInfo.locationFilterContent.options = _.cloneDeep(ADD_ADDRESS_ARRAY);
                                navigatorRef.dispatch(NavigationActions.navigate({
                                    routeName: WALLET_PAYMENT_SCREEN, params: {
                                        entityName: NET_BANKING_ENTITY, title: NET_BANKING_TITLE,
                                        currentWalletAmount: fetchProductsInfo.walletAmount,
                                        selectedProducts: fetchProductsInfo.selectedProducts, mealPayment: true
                                    }
                                }))
                            }
                            let address = '';
                            let addressIndex = null;
                            let addressArea = '';
                            if (addressType === ADDRESS_TYPE_OFFICE) {
                                addressIndex = 0;
                                address = 'OFFICE: ' + parsedUserDetails.officeAddressLineOne + ',' + parsedUserDetails.officeAddressLineTwo;
                                fetchProductsInfo.locationFilterContent.options[0].label = address;
                                fetchProductsInfo.filters.addressArea = parsedUserDetails.officeAddressArea;
                                addressArea = parsedUserDetails.officeAddressArea;
                            } else {
                                addressIndex = 1;
                                address = 'HOME: ' + parsedUserDetails.homeAddressLineOne + ',' + parsedUserDetails.homeAddressLineTwo;
                                fetchProductsInfo.locationFilterContent.options[1].label = address;
                                fetchProductsInfo.filters.addressArea = parsedUserDetails.homeAddressArea;
                                addressArea = parsedUserDetails.homeAddressArea;
                            }
                            dispatch(updateLocationFilter(address, addressIndex, addressArea));
                            dispatch(updateLocationFilterContent(fetchProductsInfo.locationFilterContent));
                            if (!fetchProductsInfo.showPaymentScreen) {
                                dispatch(getProductsOfDate(fetchProductsInfo.deliveryTiming, fetchProductsInfo.filters,
                                    fetchProductsInfo.dateIndex));
                            }
                        }
                    }
                    dispatch(updateUserDetails(response));
                    AsyncStorage.setItem(FAGITO_USER_DETAILS, JSON.stringify(response));
                })
            })
        })
    }
}

export const updateUserWallet = (walletAmount) => {
    return dispatch => {
        AsyncStorage.getItem(FAGITO_USER_DETAILS).then(userDetails => {
            let parsedUserDetails = JSON.parse(userDetails);
            if (parsedUserDetails.walletAmount) {
                let amount = Number(parsedUserDetails.walletAmount) + Number(walletAmount);
                parsedUserDetails.walletAmount = String(amount);
            } else {
                parsedUserDetails['walletAmount'] = walletAmount;
            }
            dispatch(fagitoStartLoader(UPDATE_WALLET));
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
                    dispatch(updateUserDetails(response));
                    AsyncStorage.setItem(FAGITO_USER_DETAILS, JSON.stringify(response));
                    navigatorRef.dispatch(NavigationActions.navigate({ routeName: FAGITO_HOME_SCREEN }));
                    dispatch(fagitoShowAlert({ alertHeader: WALLET_ALERT_HEADER, alertMessage: 'Rs ' + walletAmount + WALLET_ALERT_MESSAGE + 'Rs ' + response.walletAmount }));
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