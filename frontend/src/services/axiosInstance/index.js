import axios from 'axios';

const swapi = axios.create({
    baseURL: 'http://localhost:5000/api/',
    timeout: 1000,
});

export default swapi