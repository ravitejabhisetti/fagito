import { FAGITO_SHOW_ALERT, FAGITO_HIDE_ALERT } from './fagito-action-types';

export const fagitoShowAlert = (alertItems, radioOptionIndex = 0) => {
    alertItems.radioOptionIndex = radioOptionIndex;
    return {
        type: FAGITO_SHOW_ALERT,
        alertItems: alertItems
    }
}

export const fagitoHideAlert = () => {
    return {
        type: FAGITO_HIDE_ALERT
    }
}