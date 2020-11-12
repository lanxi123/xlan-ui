import http from '../utils/http';
import Qs from 'qs'


export const setlogin = (data)=> {
    return http.post('/login',data);
}