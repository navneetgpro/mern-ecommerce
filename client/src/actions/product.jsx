import axiosConfig from "../axiosConfig"
import { PRODUCTS_LOADED,PRODUCT_LOADED } from './types'

export const searchProduct = (q) => async dispatch => {
    try {
        const res = await axiosConfig.get(`/product/search?s=${q}`,);
        const response = res.data;
        if(response.products.length > 0){
            dispatch({
                type: PRODUCTS_LOADED,
                payload: response.products
            })
        }
        return true;
    } catch (err) {
        const errors = err.response.data.errors;
        if(errors){
            console.log(errors);
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger',4000)));
        }

        return false;
    }
}

export const loadProduct = (id) => async dispatch => {
    try {
        const res = await axiosConfig.get(`/product/id/${id}`,);
        const response = res.data;
        if(response.product){
            dispatch({
                type: PRODUCT_LOADED,
                payload: response.product
            })
        }
        return true;
    } catch (err) {
        const errors = err.response.data.errors;
        if(errors){
            console.log(errors);
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger',4000)));
        }

        return false;
    }
}