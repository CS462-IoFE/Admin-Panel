import axios, { InternalAxiosRequestConfig } from "axios";

const configureInstance = (instanceUrl: string) => ({
    baseURL: import.meta.env.DEV
        ? `${import.meta.env.VITE_DEVELOPMENT_SERVER}/${instanceUrl}`
        : `${import.meta.env.VITE_PRODUCTION_SERVER}/${instanceUrl}`,
    setTimeout: 1000,
});

// Configure the instances by replacing the string for calling configureInstance
export const userInstance = axios.create(configureInstance("api/user"));
export const eventInstance = axios.create(configureInstance("api/event"));
export const participantInstance = axios.create(
    configureInstance("api/participant")
);
export const reportInstance = axios.create(configureInstance("api/report"));

// Run this line to inject the user token on all request made from the above instance
const configCallback = (config: InternalAxiosRequestConfig<any>) => {
    config.headers.Authorization = `Bearer ${import.meta.env.VITE_USER_TOKEN}`;
    return config;
};

userInstance.interceptors.request.use(configCallback);
eventInstance.interceptors.request.use(configCallback);
participantInstance.interceptors.request.use(configCallback);
reportInstance.interceptors.request.use(configCallback);
