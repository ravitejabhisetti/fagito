import { FAGITO_LOAD_DELIVERY_DATES } from '../actions/fagito-action-types';

const initialState = {
    deliveryDatesList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FAGITO_LOAD_DELIVERY_DATES:
            return {
                ...state,
                deliveryDatesList: action.deliveryDates
            }
        default:
            return state;
    }
}

export default reducer;