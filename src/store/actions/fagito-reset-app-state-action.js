import { updateLocationFilter } from './actions';
import {
    RESET_DELIVERY_TIMING_DATE_STATE, RESET_PRODUCTS_STATE,
    RESET_ADDONS_STATE, RESET_AUTHENTICATION_STATE, RESET_ALERT_STATE,
    RESET_LOADER_STATE, RESET_SIGNIN_SIGNUP_STATE, RESET_TRANSACTIONS_STATE, RESET_USER_PROFILE_STATE
} from './fagito-action-types';

export const resetAppState = () => {
    return dispatch => {
        dispatch(resetDeliveryTimingDatesState());
        dispatch(resetProductsState());
        dispatch(resetAddonsState());
        dispatch(resetAuthenticationState());
        dispatch(resetAlertState());
        dispatch(resetLoaderState());
        dispatch(resetSigninSignupState());
        dispatch(resetTransactionsState());
        dispatch(resetUserProfileState());
    }
}

const resetDeliveryTimingDatesState = () => {
    return {
        type: RESET_DELIVERY_TIMING_DATE_STATE
    }
}

const resetProductsState = () => {
    return {
        type: RESET_PRODUCTS_STATE
    }
}

const resetAddonsState = () => {
    return {
        type: RESET_ADDONS_STATE
    }
}

const resetAuthenticationState = () => {
    return {
        type: RESET_AUTHENTICATION_STATE
    }
}

const resetAlertState = () => {
    return {
        type: RESET_ALERT_STATE
    }
}

const resetLoaderState = () => {
    return {
        type: RESET_LOADER_STATE
    }
}

const resetSigninSignupState = () => {
    return {
        type: RESET_SIGNIN_SIGNUP_STATE
    }
}

const resetTransactionsState = () => {
    return {
        type: RESET_TRANSACTIONS_STATE
    }
}

const resetUserProfileState = () => {
    return {
        type: RESET_USER_PROFILE_STATE
    }
}