import * as types from './fagito-action-types';
import { FAGITO_FIREBASE_SIGNUP_URL, FAGITO_FIREBASE_SIGNIN_URL, FAGITO_FIREBASE_REFRESH_TOKEN_URL } from '../../common/fagito-signup-signin-constants';
import {
    FAGITO_API_CALL_HEADERS, FAGITO_FIREBASE_API_KEY, FAGITO_LOGIN_AUTHENTICATING_USER,
    FAGITO_HOME_SCREEN, FAGITO_SIGNIN_AUTH_MODE, FAGITO_TOKEN, FAGITO_REFRESH_TOKEN, FAGITO_EXPIRY_TIME,
    FAGITO_REFRESH_TOKEN_REQUEST_BODY, FAGITO_ENCODED_HEADERS, FAGITO_USERS_URL, METHOD_POST, FAGITO_USER_DETAILS
} from '../../common/fagito-constants';
import { AsyncStorage } from 'react-native';
import { fagitoStartLoader, fagitoStopLoader, fagitoShowAlert, fagitoHideAlert } from './actions';
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
            method: METHOD_POST,
            body: JSON.stringify({
                email: userData.email,
                password: userData.password,
                returnSecureToken: true
            }),
            headers: FAGITO_API_CALL_HEADERS,
        }).then(res => res.json()).then(parsedResponse => {
            if (!parsedResponse.idToken) {
                dispatch(fagitoStopLoader());
                dispatch(fagitoShowAlert(parsedResponse));
            } else {
                let usersDataUrl = FAGITO_USERS_URL + parsedResponse.idToken;
                userData.returnSecureToken = true;
                fetch(usersDataUrl, {
                    method: METHOD_POST,
                    body: JSON.stringify(userData),
                    headers: FAGITO_API_CALL_HEADERS
                }).catch((error) => {
                    dispatch(fagitoStopLoader());
                    dispatch(fagitoShowAlert(error));
                }).then(res => res.json()).then(response => {
                    dispatch(fagitoStopLoader());
                    dispatch(storeTokenAndUserDetails(parsedResponse.idToken, parsedResponse.expiresIn, parsedResponse.refreshToken, userData));
                    navigatorRef.dispatch(NavigationActions.navigate({ routeName: FAGITO_HOME_SCREEN }));
                })
            }
        }).catch((error) => {
            dispatch(fagitoStopLoader());
            dispatch(fagitoShowAlert(error));
        })
    }
}

export const storeTokenAndUserDetails = (token, expiresIn, refreshToken, userDetails) => {
    return dispatch => {
        let date = new Date();
        let expiryTime = date.getTime() + expiresIn * 1000;
        dispatch(setTokenAndExpiryTime(token, expiryTime));
        AsyncStorage.setItem(FAGITO_TOKEN, token);
        AsyncStorage.setItem(FAGITO_EXPIRY_TIME, expiryTime.toString());
        AsyncStorage.setItem(FAGITO_REFRESH_TOKEN, refreshToken);
        AsyncStorage.setItem(FAGITO_USER_DETAILS, JSON.stringify(userDetails));
    }
}

export const setTokenAndExpiryTime = (token, expiryTime) => {
    return {
        type: types.FAGITO_SET_TOKEN,
        token: token,
        expiryTime: expiryTime
    }
}

export const getToken = () => {
    return (dispatch, getState) => {
        const promise = new Promise((resolve, reject) => {
            const token = getState().authentication.token;
            const expiryTime = getState().authentication.expiryTime;
            if (!token || new Date(expiryTime) <= new Date()) {
                let fetchedToken;
                AsyncStorage.getItem(FAGITO_TOKEN)
                    .catch(err => reject())
                    .then(tokenFromStorage => {
                        fetchedToken = tokenFromStorage;
                        if (!tokenFromStorage) {
                            reject();
                            return;
                        }
                        return AsyncStorage.getItem(FAGITO_EXPIRY_TIME);
                    })
                    .then(expiryTime => {
                        const parsedExpiryTime = new Date(parseInt(expiryTime));
                        const now = new Date();
                        if (parsedExpiryTime > now) {
                            dispatch(setTokenAndExpiryTime(fetchedToken, parsedExpiryTime));
                            resolve(fetchedToken);
                        } else {
                            reject();
                        }
                    })
                    .catch(err => reject())
            } else {
                resolve(token);
            }
        });
        return promise.catch(err => {
            return AsyncStorage.getItem(FAGITO_REFRESH_TOKEN)
                .then(refreshToken => {
                    return fetch(FAGITO_FIREBASE_REFRESH_TOKEN_URL + FAGITO_FIREBASE_API_KEY, {
                        method: 'POST',
                        headers: FAGITO_ENCODED_HEADERS,
                        body: FAGITO_REFRESH_TOKEN_REQUEST_BODY + refreshToken
                    })
                })
                .then(res => res.json())
                .then(parsedRes => {
                    if (parsedRes.idToken) {
                        dispatch(storeToken(parsedResponse.idToken, parsedResponse.expiresIn, parsedResponse.refreshToken));
                        return parsedRes.idToken;
                    } else {
                        dispatch(clearStorage());
                    }
                });
        }).then(token => {
            if (!token) {
                throw new Error();
            } else {
                return token;
            }
        })
    }
}

export const clearStorage = () => {
    return dispatch => {
        AsyncStorage.removeItem(FAGITO_TOKEN);
        AsyncStorage.removeItem(FAGITO_REFRESH_TOKEN);
        AsyncStorage.removeItem(FAGITO_USER_DETAILS);
        return AsyncStorage.removeItem(FAGITO_EXPIRY_TIME);
    }
}

export const autoSignIn = () => {
    return dispatch => {
        dispatch(getToken()).then(token => {
            navigatorRef.dispatch(NavigationActions.navigate({ routeName: FAGITO_HOME_SCREEN }));
        })
            .catch(err => { });

    }
}