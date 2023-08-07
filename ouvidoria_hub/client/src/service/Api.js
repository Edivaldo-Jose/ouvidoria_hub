import axios from "axios";


export const api = axios.create({
    baseURL: 'http://localhost:8080',
    timeout:5000,
    headers: { 'Content-Type': 'application/json' }
})

api.interceptors.request.use((pacote) => {
    const token = localStorage.getItem('token')
    if (token) {
        pacote.headers = {
            ...pacote.headers,
            "Authorization": token,
            "Access-Control-Allow-Origin": "*"
        }
    }
    return pacote
});

api.interceptors.response.use((response) => {
    return response
});