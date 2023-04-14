import { PRODUCTS_LOADED,PRODUCT_LOADED } from '../actions/types';

const initialState = {
    product:{},
    products:[],
};

export default function(state = initialState, action) {
    const { type,payload } = action;

    switch(type){
        case PRODUCTS_LOADED:
            return {
                ...state,
                products:payload
            };
        case PRODUCT_LOADED:
            return {
                ...state,
                product:payload
            };
        default:
            return state;
    }
}