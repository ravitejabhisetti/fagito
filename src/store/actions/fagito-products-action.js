import { FAGITO_GET_PRODUCTS } from './fagito-action-types';
import { fagitoStartLoader, fagitoStopLoader, getToken } from './actions';
import {
    FETCH_MESSAGE_1, FETCH_MESSAGE_2, FIREBASE_URL,
    LUNCH_OPTION, AUTH_URL, FAGITO_TOKEN, DINNER_OPTION
} from '../../common/fagito-constants';
import { AsyncStorage } from 'react-native';

export const getProductsOfDate = (timing, filters, selectedDateIndex) => {
    console.log('timing is---', timing);
    console.log('filters are---', filters);
    console.log('date index is----', selectedDateIndex);
    return dispatch => {
        let url = '';
        dispatch(fagitoStartLoader(FETCH_MESSAGE_1 + timing.timingSelected + FETCH_MESSAGE_2 + filters.locationFilter));
        console.log('latest token is---', dispatch(getToken()).then(tokenfetched => { console.log('token fetched is---', tokenfetched) }));
        AsyncStorage.getItem(FAGITO_TOKEN).then(apiToken => {
            if (timing.lunchTiming) {
                url = FIREBASE_URL + LUNCH_OPTION + selectedDateIndex + AUTH_URL + apiToken;
            } else {
                let dinnerIndex = selectedDateIndex < 3 ? selectedDateIndex : 1;
                url = FIREBASE_URL + DINNER_OPTION + dinnerIndex + AUTH_URL + apiToken;
                console.log('dinner url is---', url);
            }
        });
        dispatch(dispatchProductDetails(timing, filters, selectedDateIndex));
    }
}

export const dispatchProductDetails = (timing, filters, selectedDateIndex) => {
    return {
        type: FAGITO_GET_PRODUCTS
    }
}