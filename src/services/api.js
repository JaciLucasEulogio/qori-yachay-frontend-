import axios from 'axios';

const API_URL = 'https://qoriyachay-backend-production.up.railway.app/api'; // Cambia esta URL a la de tu API

export const submitFormData = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/students`, data);
    //imprimir respuesta de api
    console.log(response.data);
    return response.data; // Retorna la respuesta del servidor
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error al enviar los datos');
  }
};