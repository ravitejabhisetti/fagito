import { UPDATE_USER_LOCATION_DETAILS, UPDATE_ADDRESS } from './fagito-action-types';

export const updateUserLocationDetails = (fieldName) => {
    return {
        type: UPDATE_USER_LOCATION_DETAILS,
        fieldName: fieldName
    }
}

export const updateAddressDetails = (fieldName, index) => {
    return {
        type: UPDATE_ADDRESS,
        fieldName: fieldName,
        index: index
    }
}