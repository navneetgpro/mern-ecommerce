import { CART_ADDITEM,CART_DELITEM } from './types'

export const addTocart = (product) => async dispatch => {
    dispatch({
        type: CART_ADDITEM,
        payload: product
    })
    return ['success'];
}

export const delCartItem = (item) => async dispatch => {
    dispatch({
        type: CART_DELITEM,
        payload: item
    })
    return ['success'];
}