import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import FagitoSigninSignupReducer from './reducers/fagito-signin-signup-reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers(
    {
        userDetails: FagitoSigninSignupReducer,
        form: formReducer
    }
)

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;

