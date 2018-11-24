import * as types from './fagito-action-types';
import { FAGITO_FIREBASE_SIGNUP_URL, FAGITO_FIREBASE_SIGNIN_URL } from '../../common/fagito-signup-signin-constants';
import {
    FAGITO_API_CALL_HEADERS, FAGITO_FIREBASE_API_KEY, FAGITO_LOGIN_AUTHENTICATING_USER,
    FAGITO_HOME_SCREEN, FAGITO_SIGNIN_AUTH_MODE,
} from '../../common/fagito-constants';
import { AsyncStorage } from 'react-native';
import { fagitoStartLoader, fagitoStopLoader } from './actions';
import { navigatorRef } from '../../../App';
import { NavigationActions } from 'react-navigation';

export const userAuthentication = (userData, authMode) => {
    return dispatch => {
        dispatch(fagitoStartLoader(FAGITO_LOGIN_AUTHENTICATING_USER));
        let url = FAGITO_FIREBASE_SIGNUP_URL + FAGITO_FIREBASE_API_KEY;
        if (authMode === FAGITO_SIGNIN_AUTH_MODE) {
            url = FAGITO_FIREBASE_SIGNIN_URL + FAGITO_FIREBASE_API_KEY;
        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: userData.email,
                password: userData.password,
                returnSecureToken: true
            }),
            headers: FAGITO_API_CALL_HEADERS,
        }).then(res => res.json()).then(parsedResponse => {
            console.log('parsed response is---', parsedResponse);
            dispatch(fagitoStopLoader());
            if (!parsedResponse.idToken) {
                alert('Authentication failed, please try again!!');
            } else {
                // console.log('user created successfully----', navigatorRef);
                navigatorRef.dispatch(NavigationActions.navigate({ routeName: FAGITO_HOME_SCREEN }));
                // alert('Success!!User is successfully created');
            }
        })
    }
}