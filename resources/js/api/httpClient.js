import axios from 'axios';

const httpsClient = axios.create({
    baseUrl: process.env.VUE_APP_BASE_URL,
    timeout: 20000, // indicates, 5000ms ie. 5 second
    headers: {
        "Content-Type": "application/json",
    }
});

// Adding token to request
const getAuthToken = () => localStorage.getItem('jwt');

const authInterceptor = (config) => {
    config.headers['Authorization'] = getAuthToken();
    return config;
}

httpsClient.interceptors.request.use(authInterceptor);

export default httpsClient;