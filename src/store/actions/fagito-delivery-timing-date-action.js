import { FAGITO_UPDATE_SELECTED_DELIVERY_DATE, FAGITO_UPDATE_DELIVERY_TIMING } from './fagito-action-types';

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