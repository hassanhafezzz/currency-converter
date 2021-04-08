import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
});

instance.interceptors.request.use((config) => {
  const [url, ...queries] = config.url ? config.url.split('?') : [];

  let newUrl = `${url}?access_key=${process.env.REACT_APP_ACCESS_KEY}`;
  if (queries && queries.length > 0) {
    newUrl = `${newUrl}&${queries.join('')}`;
  }
  config.url = newUrl;

  return config;
});

export default instance;
