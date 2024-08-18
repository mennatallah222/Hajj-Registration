import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/user', // Adjust the base URL as needed
    timeout: 1000, // Optional: Set a timeout if needed
});

export default instance;
