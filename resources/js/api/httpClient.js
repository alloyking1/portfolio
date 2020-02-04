import axios from 'axios';

const httpsClient = axios.create({
    baseUrl: process.env.VUE_APP_BASE_URL,
    timeout: 20000, // indicates, 5000ms ie. 5 second
    headers: {
        "Content-Type": "application/json",
        'Authorization':""
    }
});

export default httpsClient;