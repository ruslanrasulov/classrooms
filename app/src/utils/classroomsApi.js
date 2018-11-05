import axios from 'axios';

const config = {
    baseURL: process.env.API_URL
}

export default axios.create(config);