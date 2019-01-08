import * as types from './fagito-action-types';
import { FAGITO_FIREBASE_SIGNUP_URL, FAGITO_FIREBASE_SIGNIN_URL, FAGITO_FIREBASE_REFRESH_TOKEN_URL } from '../../common/fagito-signup-signin-constants';
import {
    FAGITO_API_CALL_HEADERS, FAGITO_FIREBASE_API_KEY, FAGITO_LOGIN_AUTHENTICATING_USER,
    FAGITO_HOME_SCREEN, FAGITO_SIGNIN_AUTH_MODE, FAGITO_TOKEN, FAGITO_REFRESH_TOKEN, FAGITO_EXPIRY_TIME,
    FAGITO_REFRESH_TOKEN_REQUEST_BODY, FAGITO_ENCODED_HEADERS, FAGITO_USERS_URL, METHOD_POST, FAGITO_USER_DETAILS,
    FAGITO_DRAWER_NAVIGATOR, METHOD_GET, DAYS, TOMORROW, DAYS_LABEL,
    FAGITO_SIGNUP_AUTH_MODE
} from '../../common/fagito-constants';
import { AsyncStorage } from 'react-native';
import { fagitoStartLoader, fagitoStopLoader, fagitoShowAlert, fagitoHideAlert, updateUserSelectedProducts } from './actions';
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
                handleError(parsedResponse, dispatch);
            } else {
                if (authMode === FAGITO_SIGNUP_AUTH_MODE) {
                    let usersDataUrl = FAGITO_USERS_URL + parsedResponse.idToken;
                    userData.usersSelected = [];
                    fetch(usersDataUrl, {
                        method: METHOD_POST,
                        body: JSON.stringify(userData),
                        headers: FAGITO_API_CALL_HEADERS
                    }).catch((error) => {
                        handleError(error, dispatch);
                    }).then(res => res.json()).then(response => {
                        userData.userId = response.name;
                        navigateToHome(parsedResponse, userData, dispatch);
                    })
                } else if (authMode === FAGITO_SIGNIN_AUTH_MODE) {
                    let usersUrl = FAGITO_USERS_URL + parsedResponse.idToken;
                    fetch(usersUrl, {
                        method: METHOD_GET
                    }).catch((error) => {
                        handleError(error, dispatch);
                    }).then(res => res.json()).then(usersResponse => {
                        let user = null;
                        for (let key in usersResponse) {
                            if (usersResponse[key].email === userData.email) {
                                user = usersResponse[key];
                                user.userId = key;
                                navigateToHome(parsedResponse, user, dispatch);
                                break;
                            }
                        }
                        
                    })
                }
            }
        }).catch((error) => {
            handleError(error, dispatch);
        })
    }
}

export const storeTokenAndUserDetails = (token, expiresIn, refreshToken, userDetails) => {
    return dispatch => {
        let date = new Date();
        let expiryTime = date.getTime() + 20 * 1000;
        dispatch(setTokenAndExpiryTime(token, expiryTime));
        AsyncStorage.setItem(FAGITO_TOKEN, token);
        AsyncStorage.setItem(FAGITO_EXPIRY_TIME, expiryTime.toString());
        AsyncStorage.setItem(FAGITO_REFRESH_TOKEN, refreshToken);
        AsyncStorage.setItem(FAGITO_USER_DETAILS, JSON.stringify(userDetails));
        dispatch(updateUserSelectedProducts(userDetails));
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
                        method: METHOD_POST,
                        headers: FAGITO_ENCODED_HEADERS,
                        body: FAGITO_REFRESH_TOKEN_REQUEST_BODY + refreshToken
                    })
                })
                .then(res => res.json())
                .then(parsedRes => {
                    if (parsedRes.id_token) {
                        return AsyncStorage.getItem(FAGITO_USER_DETAILS)
                            .then(userInfo => {
                                dispatch(storeTokenAndUserDetails(parsedRes.id_token, parsedRes.expires_in, parsedRes.refresh_token, JSON.parse(userInfo)));
                                return parsedRes.id_token;
                            })
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
            AsyncStorage.getItem(FAGITO_USER_DETAILS).then(userDetails => {
                userDetails = JSON.parse(userDetails);
                dispatch(updateUserSelectedProducts(userDetails));
            })
            dispatch(formDatestoDeliver());
            navigatorRef.dispatch(NavigationActions.navigate({ routeName: FAGITO_DRAWER_NAVIGATOR }));
        })
            .catch(err => { });
    }
}

const formDatestoDeliver = () => {
    let currentDate = new Date().getTime();
    let currentDay = new Date(currentDate).getDay();
    let datesToDeliverList = [];
    for (let dateEntity = 0; dateEntity < 7; dateEntity++) {
        let dateObject = { date: '', day: '', dayLabel: '', dateActive: false };
        let nextDay = new Date(currentDate + ((dateEntity + 1) * 86400000));
        dateObject.date = nextDay.getDate();
        dateObject.day = DAYS[nextDay.getDay()];
        dateObject.dayLabel = DAYS_LABEL[nextDay.getDay()];
        if (nextDay.getDay()) {
            datesToDeliverList.push(dateObject);
        }
    }
    if (currentDay !== 6) {
        datesToDeliverList[0].day = TOMORROW;
    }
    datesToDeliverList[0].dateActive = true;
    return {
        type: types.FAGITO_LOAD_DELIVERY_DATES,
        deliveryDates: datesToDeliverList
    }
}

const navigateToHome = (response, user, dispatch) => {
    dispatch(fagitoStopLoader());
    dispatch(storeTokenAndUserDetails(response.idToken, response.expiresIn, response.refreshToken, user));
    dispatch(formDatestoDeliver());
    navigatorRef.dispatch(NavigationActions.navigate({ routeName: FAGITO_DRAWER_NAVIGATOR }));
}

export const handleError = (error, dispatch) => {
    dispatch(fagitoStopLoader());
    dispatch(fagitoShowAlert(error));
}