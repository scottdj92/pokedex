import axios, { AxiosInstance } from "axios";

const client: AxiosInstance = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
    headers: {
        "Content-Type": "application/json",
    },
});

export default client;
