import {
    FAGITO_LOAD_DELIVERY_DATES, FAGITO_UPDATE_SELECTED_DELIVERY_DATE,
    FAGITO_UPDATE_DELIVERY_TIMING, FAGITO_UPDATE_FILTER_VALUE, UPDATE_LOCATION_FILTER,
    RESET_DELIVERY_TIMING_DATE_STATE, UPDATE_LOCATION_DROPDOWN_CONTENT, UPDATE_LUNCH_DINNER_LOCATION
} from '../actions/fagito-action-types';
import { FILTERS_CONTENT, LUNCH_OPTION, DINNER_OPTION, LOCATION_FILTER, OFFICE_FIELD } from '../../common/fagito-constants';
import _ from 'lodash';

const initialState = {
    deliveryDatesList: [],
    selectedDateIndex: 0,
    selectedDate: null,
    selectedDay: null,
    selectedMonth: null,
    officeAddressSelected: false,
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
        locationFilterIndex: null,
        dinnerLocation: '',
        lunchLocation: '',
        lunchLocationIndex: null,
        dinnerLocationIndex: null,
        locationFilterContent: FILTERS_CONTENT.locationFilter,
        addressArea: ''
    }
}

const clonedInitialState = _.cloneDeep(initialState);

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
        case UPDATE_LUNCH_DINNER_LOCATION:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    locationFilter: action.location,
                    locationFilterIndex: action.lunchTiming ? state.filters.lunchLocationIndex : state.filters.dinnerLocationIndex
                }
            }
        case UPDATE_LOCATION_FILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    locationFilter: action.locationSelected,
                    locationFilterIndex: action.locationIndex,
                    addressArea: action.addressArea
                }
            }
        case UPDATE_LOCATION_DROPDOWN_CONTENT:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    locationFilterContent: action.locationFilterContent
                }
            }
        case RESET_DELIVERY_TIMING_DATE_STATE:
            return clonedInitialState;

        case FAGITO_UPDATE_FILTER_VALUE:
            let filterName = action.filterName;
            let index = action.filterName + 'Index';
            if (filterName !== LOCATION_FILTER) {
                state.filters[filterName] = FILTERS_CONTENT[filterName].options[action.index].label;
            } else {
                state.filters[filterName] = state.filters.locationFilterContent.options[action.index].label;
                state.filters.addressArea = state.filters.locationFilterContent.options[action.index].addressArea;
                if (state.timing.timingSelected === LUNCH_OPTION) {
                    state.filters.lunchLocation = state.filters.locationFilterContent.options[action.index].label;
                    state.filters.lunchLocationIndex = action.index;
                } else {
                    state.filters.dinnerLocation = state.filters.locationFilterContent.options[action.index].label;
                    state.filters.dinnerLocationIndex = action.index;
                }
                if (state.filters.locationFilterContent.options[action.index].addressType) {
                    state.officeAddressSelected = state.filters.locationFilterContent.options[action.index].addressType === OFFICE_FIELD ? true : false;
                } else {
                    state.officeAddressSelected = false;
                }
            }
            state.filters[index] = action.index;
            return state;
        default:
            return state;
    }
}

export default reducer;