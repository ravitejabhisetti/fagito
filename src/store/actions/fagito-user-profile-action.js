import { UPDATE_USER_LOCATION_DETAILS, UPDATE_ADDRESS, UPDATE_CITY, UPDATE_AREA, UPDATE_ADDRESS_TYPE, WALLET_SCREEN_NAVIGATION } from './fagito-action-types';
import { HOME_FIELD, CITY_FIELD, LOCATION_FILTER, ADDRESS_TYPE, OFFICE_FIELD } from '../../common/fagito-constants';

export const updateUserLocationDetails = (fieldName, loggedInUserDetails) => {
    return {
        type: UPDATE_USER_LOCATION_DETAILS,
        fieldName: fieldName,
        loggedInUserDetails: loggedInUserDetails
    }
}

export const updateAddressDetails = (fieldName, index) => {
    let type = null;
    if (fieldName === HOME_FIELD) {
        type = UPDATE_ADDRESS;
    }
    if (fieldName === CITY_FIELD) {
        type = UPDATE_CITY;
    }
    if (fieldName === LOCATION_FILTER) {
        type = UPDATE_AREA;
    }
    if (fieldName === ADDRESS_TYPE) {
        type = UPDATE_ADDRESS_TYPE;
    }
    return {
        type: type,
        fieldName: fieldName,
        index: index
    }
}

export const updateWalletScreenNavigation = (walletScreen) => {
    return {
        type: WALLET_SCREEN_NAVIGATION,
        walletScreen: walletScreen
    }
}