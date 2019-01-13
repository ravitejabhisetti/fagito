import { ADD_ADDON, DELETE_ADDON, RESET_ADDONS } from '../actions/fagito-action-types';

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
                addonsCount: count
            }
        case DELETE_ADDON:
            let updatedCount = state.addonsCount;
            if (updatedCount) {
                updatedCount = updatedCount - 1;
            }
            return {
                ...state,
                addonsCount: updatedCount
            }
        case RESET_ADDONS:
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