import axios from "axios";
import NProgress from "nprogress";

NProgress.configure({
    showSpinner: false,
    trickleSpeed: 100,
})

// jeremy - ww commented on Dec 18, 2018
// I override AxiosResponse in my axios.d.ts:
// https://github.com/axios/axios/issues/1510

declare module 'axios' {
    export interface AxiosResponse<T = any> extends Promise<T> { }
}

const instance = axios.create({
    baseURL: 'https://reqres.in',
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    NProgress.start();
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


// Add a response interceptor
instance.interceptors.response.use(function (response: any) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    NProgress.done();
    return response.data ? response.data : { statusCode: response.status };
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    NProgress.done();
    let res: any = {}
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        res.data = error.response.data
        res.status = error.response.status
        res.headers = error.response.headers
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser 
        // and an instance of http.ClientRequest in node.js
        console.log(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
    }
    return res
    // return Promise.reject(error);
});


export default instance