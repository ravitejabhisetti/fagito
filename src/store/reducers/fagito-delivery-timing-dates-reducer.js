import {
    FAGITO_LOAD_DELIVERY_DATES, FAGITO_UPDATE_SELECTED_DELIVERY_DATE,
    FAGITO_UPDATE_DELIVERY_TIMING, FAGITO_UPDATE_FILTER_VALUE
} from '../actions/fagito-action-types';
import { FILTERS_CONTENT } from '../../common/fagito-constants';

const initialState = {
    deliveryDatesList: [],
    timing: {
        lunchTiming: true,
        dinnerTiming: false,
    },
    filters: {
        dietFilter: FILTERS_CONTENT.dietFilter.options[1].label,
        cuisineFilter: FILTERS_CONTENT.cuisineFilter.options[0].label,
        locationFilter: null
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
        case FAGITO_UPDATE_FILTER_VALUE:
            let filterName = action.filterName;
            state.filters[filterName] = FILTERS_CONTENT[filterName].options[action.index].label;
            return state;
                
                // filters: state.filters.map((filter) => {
                //     if (filter === action.filterName) {
                //         state.filters[action.filterName] = FILTERS_CONTENT[action.filterName].options[action.index].label
                //     }
                // })
        default:
            return state;
    }
}

export default reducer;