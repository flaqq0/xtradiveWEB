import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const BACKEND_URL = 'http://54.164.82.199:8080/'; 

// Obtiene el endpoint que corresponde al token
export const getRoleBasedOnToken = () => {
  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  return decodedToken.role;
}


// Consume el endpoint "/login" del backend y hace un post
export const fetchLogin = async (body) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/auth/login`, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {;
      localStorage.setItem('token', response.data.token); 
      return response.data;
    } else {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};
