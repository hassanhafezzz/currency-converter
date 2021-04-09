import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
});

instance.interceptors.request.use(
  (config) => {
    const { url } = config;
    config.url = `${url}?access_key=${process.env.REACT_APP_ACCESS_KEY}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      return Promise.reject(error.response.data.error);
    } else if (error.request) {
      return Promise.reject(error.request);
    }
    return Promise.reject(error);
  },
);

export const fetchLatestRates = () => instance.get('/latest');

export default instance;
