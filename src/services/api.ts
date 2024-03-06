import axios from 'axios';

const baseURL = 'https://reqres.in/api';

// Function to perform user authentication
export const signIn = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${baseURL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw new Error('Failed to sign in');
  }
};

// Function to register a new user
export const signUp = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${baseURL}/register`, { email, password });
    return response.data;
  } catch (error) {
    throw new Error('Failed to sign up');
  }
};

// Function to fetch user data
export const fetchUserData = async () => {
  try {
    const response = await axios.get(`${baseURL}/users/2`);
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch user data');
  }
};
