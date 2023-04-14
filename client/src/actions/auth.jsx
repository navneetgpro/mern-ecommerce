import axiosConfig from "../axiosConfig";
import { setAlert } from "./alert";
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from './types';
import setAuthToken from "../utils/setAuthToken";

// Load User
export const loadUser = () => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axiosConfig.get('/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data.user
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
}

export const register = ({ name, email, password, confirmpassword }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, email, password, confirmpassword });

    try {
        const res = await axiosConfig.post('/user/register', body, config);
        const response = res.data;
        dispatch({
            type: REGISTER_SUCCESS,
            payload: response
        })

        dispatch(loadUser());

        dispatch(setAlert("User registered successfully", 'success'));

        return true;
    } catch(err){
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger',4000)));
        }

        dispatch({
            type: REGISTER_FAIL
        })

        return false;
    }
}

export const login = ({ email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password });

    try {
        const res = await axiosConfig.post('/auth', body, config);
        const response = res.data;
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response
        })

        dispatch(loadUser());

        dispatch(setAlert("User Logged in", 'success'));

        return true;
    } catch(err){
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger',4000)));
        }

        dispatch({
            type: LOGIN_FAIL
        })

        return false;
    }
}

// Logout / Clear Token
export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
}