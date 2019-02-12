import {
    FAGITO_GET_PRODUCTS, FAGITO_ADD_SELECTED_PRODUCT,
    FAGITO_DELETE_SELECTED_PRODUCT, FAGITO_UPDATE_USER_SELECTED_PRODUCTS,
    UPDATE_ADDONS_OF_PRODUCT, UPDATE_INDEX_OF_PRODUCT_TO_UPDATE_ADDONS,
    RESET_PRODUCTS_STATE, RESET_SELECTED_PRODUCTS_OF_USER
} from '../actions/fagito-action-types';
import _ from 'lodash';

const initialState = {
    productsList: {},
    selectedProductsList: [],
    productsLength: 0,
    indexOfProductToUpdateAddons: null
}

const clonedInitialState = _.cloneDeep(initialState);

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
            return {
                ...state,
                productsList: updatedProductsList
            }
        case FAGITO_ADD_SELECTED_PRODUCT:
            if (!state.selectedProductsList) {
                state.selectedProductsList = [];
            }
            state.selectedProductsList.push(action.product);
            return {
                ...state,
                productsLength: JSON.stringify(state.selectedProductsList.length),
                selectedProductsList: state.selectedProductsList
            }
        case FAGITO_DELETE_SELECTED_PRODUCT:
            state.selectedProductsList.splice(action.productIndex, 1);
            return {
                ...state,
                productsLength: JSON.stringify(state.selectedProductsList.length),
                selectedProductsList: state.selectedProductsList
            }
        case FAGITO_UPDATE_USER_SELECTED_PRODUCTS:
            return {
                ...state,
                selectedProductsList: action.productsSelected
            }
        case UPDATE_ADDONS_OF_PRODUCT:
            state.selectedProductsList[action.productIndex]['addons'] = action.addonsSelected;
            return {
                ...state,
                indexOfProductToUpdateAddons: action.productIndex
            }
        case UPDATE_INDEX_OF_PRODUCT_TO_UPDATE_ADDONS:
            return {
                ...state,
                indexOfProductToUpdateAddons: null
            }
        case RESET_SELECTED_PRODUCTS_OF_USER:
            return {
                ...state,
                selectedProductsList: []
            }
        case RESET_PRODUCTS_STATE:
            return clonedInitialState;
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