import React from 'react';
import { Box, Container } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Fondo con blob */}
      <div className="fixed inset-0 w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>

      {/* Contenido principal */}
      <Box sx={{ position: 'relative' }}>
        <Navbar />
        <Container sx={{ mt: 8, mb: 4 }}>
          {children}
        </Container>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;