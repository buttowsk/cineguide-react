import axios from 'axios';

export const dbApi = axios.create({
  baseURL: 'http://localhost:8080/',
});
