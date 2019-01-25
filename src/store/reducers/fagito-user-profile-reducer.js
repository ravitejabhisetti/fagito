import { UPDATE_USER_LOCATION_DETAILS, UPDATE_ADDRESS } from '../actions/fagito-action-types';
import { ADDRESS_TYPE_HOME, ADDRESS_TYPE_OFFICE, HOME_FIELD } from '../../common/fagito-constants';

const initialState = {
    addressType: '',
    addressTypeIndex: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER_LOCATION_DETAILS:
            return {
                ...state,
                addressType: action.fieldName === HOME_FIELD ? ADDRESS_TYPE_HOME : ADDRESS_TYPE_OFFICE,
                addressTypeIndex: action.fieldName === HOME_FIELD ? 1 : 0
            }
        case UPDATE_ADDRESS:
            return {
                ...state,
                addressType: action.index === 1 ? ADDRESS_TYPE_HOME : ADDRESS_TYPE_OFFICE,
                addressTypeIndex: action.index
            }
        default:
            return state;
    }
}

export default reducer;