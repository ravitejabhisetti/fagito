import {
    FAGITO_LOAD_DELIVERY_DATES, FAGITO_UPDATE_SELECTED_DELIVERY_DATE,
    FAGITO_UPDATE_DELIVERY_TIMING, FAGITO_UPDATE_FILTER_VALUE
} from '../actions/fagito-action-types';
import { FILTERS_CONTENT, LUNCH_OPTION, DINNER_OPTION } from '../../common/fagito-constants';

const initialState = {
    deliveryDatesList: [],
    selectedDateIndex: 0,
    selectedDate: null,
    selectedDay: null,
    selectedMonth: null,
    timing: {
        timingSelected: LUNCH_OPTION,
        lunchTiming: true,
        dinnerTiming: false,
    },
    filters: {
        dietFilter: FILTERS_CONTENT.dietFilter.options[0].label,
        cuisineFilter: FILTERS_CONTENT.cuisineFilter.options[0].label,
        locationFilter: null,
        dietFilterIndex: 0,
        cuisineFilterIndex: 0,
        locationFilterIndex: null
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FAGITO_LOAD_DELIVERY_DATES:
            return {
                ...state,
                deliveryDatesList: action.deliveryDates,
                selectedDate: action.deliveryDates[0].date,
                selectedDay: action.deliveryDates[0].dayLabel,
                selectedMonth: action.deliveryDates[0].month
            }
        case FAGITO_UPDATE_SELECTED_DELIVERY_DATE:
            let indexSelected = 0;
            let selectedDate = null;
            let selectedDay = null;
            let month = null;
            return {
                ...state,
                deliveryDatesList: state.deliveryDatesList.map((date, dateIndex) => {
                    if (date.day === action.selectedDate.day) {
                        indexSelected = dateIndex;
                        selectedDate = action.selectedDate.date;
                        selectedDay = action.selectedDate.dayLabel;
                        month = action.selectedDate.month;
                        date.dateActive = true;
                    } else {
                        date.dateActive = false;
                    }
                    return date;
                }),
                selectedDay: selectedDay,
                selectedDate: selectedDate,
                selectedDateIndex: indexSelected,
                selectedMonth: month
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