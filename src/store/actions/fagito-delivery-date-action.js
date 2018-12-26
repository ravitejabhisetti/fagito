import { FAGITO_UPDATE_SELECTED_DELIVERY_DATE } from './fagito-action-types';

export const handleSelectedDate = (selectedDate) => {
    return {
        type: FAGITO_UPDATE_SELECTED_DELIVERY_DATE,
        selectedDate: selectedDate
    }
}