import axiosConfig from "../axiosConfig"
import { setAlert } from "./alert"
import { UPDATE_USER } from './types'

export const updateShipping = (data,token) => async dispatch => {
    try {
        // set header
        axiosConfig.defaults.headers.common['x-auth-token'] = token;
        const res = await axiosConfig.put('/user/shipping',data);
        const response = res.data;
        dispatch({
            type: UPDATE_USER,
            payload: response
        })
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