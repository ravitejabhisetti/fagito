import { FAGITO_GET_PRODUCTS } from './fagito-action-types';

export const getProductsOfDate = (timing, filters, selectedDateIndex) => {
    console.log('timing is---', timing);
    console.log('filters are---', filters);
    console.log('date index is----', selectedDateIndex);
    return {
        type: FAGITO_GET_PRODUCTS
    }
}