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
                    updatedProductsList[chefName] = { isVeg: [], isNonVeg: [], tags: '' };
                    updatedProductsList[chefName].tags = product.base.kitchen.tags;
                    isVegProduct(updatedProductsList[chefName], product.base.isVeg, product);
                } else {
                    isVegProduct(updatedProductsList[chefName], product.base.isVeg, product);
                }
            })
            console.log('updated products list--', updatedProductsList);
            return {
                ...state,
                productsList: updatedProductsList
            }
        default:
            return state;
    }
}

const isVegProduct = (chef, isVeg, product) => {
    if (isVeg) {
        chef.isVeg.push(product);
    } else {
        chef.isNonVeg.push(product);
    }
}

export default reducer;