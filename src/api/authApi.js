import axios from 'axios';

const BASE_URL = 'https://connections-api.goit.global';

const authApi = axios.create({
  baseURL: BASE_URL,
});
