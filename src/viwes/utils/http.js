import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8081',
    // timeout: 10000,
    // headers: { 'X-Custom-Header': 'foobar' }
});




// 添加一个请求拦截器
http.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// 添加一个响应拦截器
http.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default http