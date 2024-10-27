// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#344955', // Azul marino
    },
    secondary: {
      main: '#F9AA33', // Naranja suave
    },
    background: {
      default: '#FFFFFF', // Fondo principal
      paper: '#F4F4F9',   // Fondo para contenedores
    },
    text: {
      primary: '#232323', // Texto principal
      secondary: '#6D6D6D', // Texto secundario
    },
    success: {
      main: '#4CAF50', // Verde de éxito
    },
    warning: {
      main: '#F57F17', // Amarillo oscuro
    },
  },
});

export default theme;
