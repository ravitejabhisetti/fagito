import * as types from './fagito-action-types';
import { FAGITO_FIREBASE_SIGNUP_URL } from '../../common/fagito-signup-signin-constants';
import { FAGITO_API_CALL_HEADERS, FAGITO_FIREBASE_API_KEY } from '../../common/fagito-constants';
import { AsyncStorage } from 'react-native';
import { fagitoStartLoader, fagitoStopLoader } from './actions';

export const userAuthentication = (userData, authMode) => {
    return dispatch => {
        dispatch(fagitoStartLoader());
        let url = FAGITO_FIREBASE_SIGNUP_URL + FAGITO_FIREBASE_API_KEY;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: userData.email,
                password: userData.password,
                returnSecureToken: true
            }),
            headers: FAGITO_API_CALL_HEADERS,
        }).then(res => res.json()).then(parsedResponse => {
            dispatch(fagitoStopLoader());
            if (!parsedResponse.idToken) {
                alert('Authentication failed, please try again!!');
            } else {
                console.log('user created successfully');
                alert('Success!!User is successfully created');
            }
        })
    }
}