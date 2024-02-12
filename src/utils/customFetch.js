import axios from 'axios';

const customFetch = axios.create({
    baseURL: 'http://192.168.43.68:5000',
    // baseURL: "http://localhost:5000",
    withCredentials: true
});

export default customFetch;
