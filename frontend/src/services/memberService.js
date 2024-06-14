import axios from 'axios';

const API_URL = 'http://localhost:5000'; 

export const addMember = async (member) => {
  try {
    const response = await axios.post(`${API_URL}/add_member`, member);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getMembers = async () => {
  try {
    const response = await axios.get(`${API_URL}/members`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
