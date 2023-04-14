import axios from 'axios';
import { baseUrl } from './Config';
const instance = axios.create({
    baseURL: baseUrl+'/api'
});

export default instance;