//import axios from "axios";
import axiosConfig from "../axiosConfig";


const setAuthToken = token => {
    if(token) {
        axiosConfig.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete axiosConfig.defaults.headers.common['x-auth-token'];
    }
}

export default setAuthToken;