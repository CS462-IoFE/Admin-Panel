import axios from "axios";

const configureInstance = (instanceUrl: string) => ({
    baseURL: import.meta.env.DEV
        ? `${import.meta.env.VITE_DEVELOPMENT_SERVER}/${instanceUrl}`
        : `${import.meta.env.VITE_PRODUCTION_SERVER}/${instanceUrl}`,
    setTimeout: 1000,
});

// Configure the instances by replacing the string for calling configureInstance
export const userInstance = axios.create(configureInstance("api/user"));

// Run this line to inject the user token on all request made from the above instance
userInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${import.meta.env.VITE_USER_TOKEN}`;
    return config;
});
