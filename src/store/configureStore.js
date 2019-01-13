import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import FagitoSigninSignupReducer from './reducers/fagito-signin-signup-reducer';
import FagitoLoaderReducer from './reducers/fagito-loader-reducer';
import FagitoAuthenticationReducer from './reducers/fagito-authentication-reducer';
import FagitoAlertReducer from './reducers/fagito-alert-reducer';
import FagitoDeliveryTimingAndDatesReducer from './reducers/fagito-delivery-timing-dates-reducer';
import ProductsReducer from './reducers/fagito-products-reducer';
import AddonsReducer from './reducers/fagito-addon-reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers(
    {
        userDetails: FagitoSigninSignupReducer,
        fagitoLoader: FagitoLoaderReducer,
        authentication: FagitoAuthenticationReducer,
        fagitoAlert: FagitoAlertReducer,
        form: formReducer,
        deliveryTimingAndDates: FagitoDeliveryTimingAndDatesReducer,
        products: ProductsReducer,
        addons: AddonsReducer
    }
)

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;

