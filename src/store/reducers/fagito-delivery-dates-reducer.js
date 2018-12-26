import { FAGITO_LOAD_DELIVERY_DATES, FAGITO_UPDATE_SELECTED_DELIVERY_DATE } from '../actions/fagito-action-types';

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
        case FAGITO_UPDATE_SELECTED_DELIVERY_DATE:
            return {
                ...state,
                deliveryDatesList: state.deliveryDatesList.map((date) => {
                    if(date.day === action.selectedDate.day) {
                        date.dateActive = true;
                    } else {
                        date.dateActive = false;
                    }
                    return date;
                })
            }
        default:
            return state;
    }
}

export default reducer;