import { ADD_ADDON, DELETE_ADDON, RESET_ADDONS, RESET_ADDONS_STATE } from '../actions/fagito-action-types';
import _ from 'lodash';

const initialState = {
    addonsCount: 0,
    addonsSelected: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ADDON:
            let count = state.addonsCount;
            if (count < 3) {
                count = count + 1;
            }
            return {
                ...state,
                addonsCount: count,
                addonsSelected: [...state.addonsSelected, action.addon]
            }
        case DELETE_ADDON:
            let updatedCount = state.addonsCount;
            let updatedAddonsList = [];
            if (updatedCount) {
                updatedCount = updatedCount - 1;
            }
            let addonIndex = _.findLastIndex(state.addonsSelected, function (entity) { return entity.name === action.addon.name; });
            state.addonsSelected.map((addonEntity, index) => {
                if (index !== addonIndex) {
                    updatedAddonsList.push(addonEntity);
                }
            })
            return {
                ...state,
                addonsCount: updatedCount,
                addonsSelected: updatedAddonsList
            }
        case RESET_ADDONS:
        case RESET_ADDONS_STATE:
            return {
                ...state,
                addonsCount: 0,
                addonsSelected: []
            }
        default:
            return state;
    }
}

export default reducer;