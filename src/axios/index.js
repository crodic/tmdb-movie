import axios from 'axios';

const customizeAxios = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

customizeAxios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

customizeAxios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default customizeAxios;

