import { FAGITO_START_LOADER, FAGITO_STOP_LOADER, RESET_LOADER_STATE } from '../actions/fagito-action-types';

const initialState = {
    showLoader: false,
    loaderText: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FAGITO_START_LOADER:
            return {
                ...state,
                showLoader: true,
                loaderText: action.loaderText
            }
        case FAGITO_STOP_LOADER:
        case RESET_LOADER_STATE:
            return {
                ...state,
                showLoader: false,
                loaderText: ''
            }
        default:
            return state;
    }
}

export default reducer;