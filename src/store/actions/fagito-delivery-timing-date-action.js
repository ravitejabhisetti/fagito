import {
    FAGITO_UPDATE_SELECTED_DELIVERY_DATE, FAGITO_UPDATE_DELIVERY_TIMING,
    FAGITO_UPDATE_FILTER_VALUE,
    UPDATE_LOCATION_FILTER,
    UPDATE_LOCATION_DROPDOWN_CONTENT
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

export const updateLocationFilterContent = (locationFilterContent) => {
    console.log('in location content check---');
    return {
        type: UPDATE_LOCATION_DROPDOWN_CONTENT,
        locationFilterContent: locationFilterContent
    }
}