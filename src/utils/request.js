import Axios from 'axios';
const request = Axios.create({
    //dev-api||prod-api
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000,//超时响应
});

//请求拦截
request.interceptors.request.use(config => {
    //请求拦截
    return config
}, err => {
    //出现错误
    return Promise.reject(err);
})

//响应拦截
request.interceptors.response.use(response => {
    //响应拦截
    return response
}, err => {
    //出现错误
    return Promise.reject(err);
})

export default request;