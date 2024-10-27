import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const submitFormData = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/students`, data);
    //imprimir respuesta de api
    console.log(response.data);
    return response.data; 
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error al enviar los datos');
  }
};