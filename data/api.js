import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.marcelosantos.bsb.br"
});

export default api;