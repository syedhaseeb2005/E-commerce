import axios from "axios";

const base_Url = "http://localhost:8000/api/";

// Retrieve the token from localStorage
const token = localStorage.getItem("accessToken") || JSON.parse(localStorage.getItem("user"))?.accessToken;

export const publiceRequest = axios.create({
    baseURL: base_Url,
});

export const privateRequest = axios.create({
    baseURL: base_Url,
    headers: {
        Authorization: `Bearer ${token}`
    }
});