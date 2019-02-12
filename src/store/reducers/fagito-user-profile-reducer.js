import {
    UPDATE_USER_LOCATION_DETAILS, UPDATE_ADDRESS, UPDATE_CITY, UPDATE_AREA,
    UPDATE_ADDRESS_TYPE, RESET_USER_PROFILE_STATE, WALLET_SCREEN_NAVIGATION
} from '../actions/fagito-action-types';
import { ADDRESS_TYPE_HOME, ADDRESS_TYPE_OFFICE, HOME_FIELD, FILTERS_CONTENT } from '../../common/fagito-constants';
import _ from 'lodash';

const initialState = {
    addressType: '',
    addressTypeIndex: null,
    city: 'Hyderabad',
    cityIndex: 0,
    area: null,
    areaIndex: null,
    walletScreen: false
}

const clonedInitialState = _.cloneDeep(initialState);

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER_LOCATION_DETAILS:
            let addressArea = action.fieldName === HOME_FIELD ? action.loggedInUserDetails.homeAddressArea : action.loggedInUserDetails.officeAddressArea;
            let selectedAreaIndex = _.findIndex(FILTERS_CONTENT.locationFilter.options, function (option) {
                return option.label === addressArea;
            });
            return {
                ...state,
                addressType: action.fieldName === HOME_FIELD ? ADDRESS_TYPE_HOME : ADDRESS_TYPE_OFFICE,
                addressTypeIndex: action.fieldName === HOME_FIELD ? 1 : 0,
                area: addressArea,
                areaIndex: selectedAreaIndex
            }
        case WALLET_SCREEN_NAVIGATION:
            return {
                ...state,
                walletScreen: action.walletScreen
            }
        case UPDATE_ADDRESS:
        case UPDATE_ADDRESS_TYPE:
            return {
                ...state,
                addressType: action.index === 1 ? ADDRESS_TYPE_HOME : ADDRESS_TYPE_OFFICE,
                addressTypeIndex: action.index
            }
        case UPDATE_CITY:
            return {
                ...state
            }
        case UPDATE_AREA:
            return {
                ...state,
                areaIndex: action.index,
                area: FILTERS_CONTENT.locationFilter.options[action.index].label
            }
        case RESET_USER_PROFILE_STATE:
            return clonedInitialState;
        default:
            return state;
    }
}

export default reducer;