import {
    FAGITO_UPDATE_SELECTED_DELIVERY_DATE, FAGITO_UPDATE_DELIVERY_TIMING,
    FAGITO_UPDATE_FILTER_VALUE,
    UPDATE_LOCATION_FILTER
} from './fagito-action-types';

export const handleSelectedDate = (selectedDate) => {
    return {
        type: FAGITO_UPDATE_SELECTED_DELIVERY_DATE,
        selectedDate: selectedDate
    }
}

export const updateDeliveryTiming = (timing) => {
    return {
        type: FAGITO_UPDATE_DELIVERY_TIMING,
        timing: timing
    }
}

export const updateFilter = (filterName, index) => {
    return {
        type: FAGITO_UPDATE_FILTER_VALUE,
        filterName: filterName,
        index: index
    }
}

export const updateLocationFilter = (locationSelected, locationIndex) => {
    return {
        type: UPDATE_LOCATION_FILTER,
        locationSelected: locationSelected,
        locationIndex: locationIndex
    }
}