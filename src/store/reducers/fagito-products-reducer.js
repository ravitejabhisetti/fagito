import { FAGITO_GET_PRODUCTS } from '../actions/fagito-action-types';

const initialState = {
    productsList: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FAGITO_GET_PRODUCTS:
            let updatedProductsList = {};
            action.productsList.map((product, index) => {
                let chefName = product.base.kitchen.name;
                if (!updatedProductsList[chefName]) {
                    updatedProductsList[chefName] = [];
                    updatedProductsList[chefName].push(product);
                } else {
                    updatedProductsList[chefName].push(product);
                }
            })
            return {
                ...state,
                productsList: updatedProductsList
            }
        default:
            return state;
    }
}

export default reducer;