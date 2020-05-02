import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
});

api.interceptors.request.use(async (config) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return config;
});

export default api;
