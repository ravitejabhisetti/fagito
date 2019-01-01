import { FAGITO_GET_PRODUCTS } from '../actions/fagito-action-types';

const initialState = {
    productsList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FAGITO_GET_PRODUCTS:
            return {
                ...state,
                productsList: action.productsList
            }
        default:
            return state;
    }
}

export default reducer;