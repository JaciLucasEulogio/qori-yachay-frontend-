import axios from 'axios';
//const API_URL = process.env.REACT_APP_API_URL;
const API_URL = 'https://qoriyachay-backend-production.up.railway.app/api';

export const submitFormData = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/students`, data);
    console.log(response.data);  // Imprime la respuesta de la API
    return response.data; 
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error al enviar los datos');
  }
};
