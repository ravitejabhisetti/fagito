import {
    FAGITO_LOAD_DELIVERY_DATES, FAGITO_UPDATE_SELECTED_DELIVERY_DATE,
    FAGITO_UPDATE_DELIVERY_TIMING
} from '../actions/fagito-action-types';

const initialState = {
    deliveryDatesList: [],
    timing: {
        lunchTiming: true,
        dinnerTiming: false
    }
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
                    if (date.day === action.selectedDate.day) {
                        date.dateActive = true;
                    } else {
                        date.dateActive = false;
                    }
                    return date;
                })
            }
        case FAGITO_UPDATE_DELIVERY_TIMING:
            return {
                ...state,
                timing: {
                    lunchTiming: action.timing,
                    dinnerTiming: !action.timing
                }

            }
        default:
            return state;
    }
}

export default reducer;