import axios from 'axios';

const httpsClient = axios.create({
    baseUrl: process.env.VUE_APP_BASE_URL,
    timeout: 5000, // indicates, 5000ms ie. 5 second
    headers: {
        "Content-Type": "application/json",
    }
});

export default httpsClient;