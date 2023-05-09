import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config();
// console.log(process.env.REACT_APP_DATABASE_URL);
// axios.defaults.baseURL = process.env.REACT_APP_DATABASE_URL;
axios.defaults.baseURL = 'https://644d5b9bcfdddac970a315a5.mockapi.io/api/v1/';
export const getUsers = async () => {
  try {
    const response = await axios.get('/users');
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
