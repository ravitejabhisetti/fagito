import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import FagitoSigninSignupReducer from './reducers/fagito-signin-signup-reducer';

const rootReducer = combineReducers({
    userDetails: FagitoSigninSignupReducer
})

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;

