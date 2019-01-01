import {
    FAGITO_LOAD_DELIVERY_DATES, FAGITO_UPDATE_SELECTED_DELIVERY_DATE,
    FAGITO_UPDATE_DELIVERY_TIMING, FAGITO_UPDATE_FILTER_VALUE
} from '../actions/fagito-action-types';
import { FILTERS_CONTENT, LUNCH_OPTION, DINNER_OPTION } from '../../common/fagito-constants';

const initialState = {
    deliveryDatesList: [],
    selectedDateIndex: 0,
    timing: {
        timingSelected: LUNCH_OPTION,
        lunchTiming: true,
        dinnerTiming: false,
    },
    filters: {
        dietFilter: FILTERS_CONTENT.dietFilter.options[1].label,
        cuisineFilter: FILTERS_CONTENT.cuisineFilter.options[0].label,
        locationFilter: null,
        dietFilterIndex: 0,
        cuisineFilterIndex: 0,
        locationFilterIndex: 0
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
            let indexSelected = 0;
            return {
                ...state,
                deliveryDatesList: state.deliveryDatesList.map((date, dateIndex) => {
                    if (date.day === action.selectedDate.day) {
                        indexSelected = dateIndex;
                        date.dateActive = true;
                    } else {
                        date.dateActive = false;
                    }
                    return date;
                }),
                selectedDateIndex: indexSelected
            }
        case FAGITO_UPDATE_DELIVERY_TIMING:
            return {
                ...state,
                timing: {
                    timingSelected: action.timing ? LUNCH_OPTION : DINNER_OPTION,
                    lunchTiming: action.timing,
                    dinnerTiming: !action.timing
                }

            }
        case FAGITO_UPDATE_FILTER_VALUE:
            let filterName = action.filterName;
            let index = action.filterName + 'Index';
            state.filters[filterName] = FILTERS_CONTENT[filterName].options[action.index].label;
            state.filters[index] = action.index;
            return state;
        default:
            return state;
    }
}

export default reducer;