// import axios from 'axios';

// const BASE_URL = 'https://connections-api.goit.global';

// const authApi = axios.create({
//   baseURL: BASE_URL,
// });
// // Функція для встановлення токена в заголовки Axios
// export const setAuthHeader = token => {
//   authApi.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// // Функція для очищення токена (наприклад, при виході)
// export const clearAuthHeader = () => {
//   authApi.defaults.headers.common.Authorization = '';
// };

// // Запити автентифікації
// export const registerUser = async userData => {
//   const { data } = await authApi.post('/users/signup', userData);
//   return data;
// };

// export const loginUser = async userData => {
//   const { data } = await authApi.post('/users/login', userData);
//   return data;
// };

// export const logoutUser = async () => {
//   const { data } = await authApi.post('/users/logout');
//   return data;
// };

// export const fetchCurrentUser = async () => {
//   const { data } = await authApi.get('/users/current');
//   return data;
// };
