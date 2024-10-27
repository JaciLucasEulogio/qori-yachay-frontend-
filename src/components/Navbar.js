import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Menu, 
  MenuItem,
  Box,
  Container,
  Stack,
  Fade
} from '@mui/material';
import { 
  Home, 
  BarChart, 
  Person, 
  Menu as MenuIcon, 
  Close as CloseIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

// Componentes estilizados
const StyledAppBar = styled(AppBar)(({ theme, scrolled }) => ({
  background: 'rgba(255, 255, 255, 0.0)', // Cambia a completamente transparente
  backdropFilter: 'blur(10px)',
  boxShadow: scrolled ? theme.shadows[3] : 'none',
  transition: 'all 0.3s ease-in-out',
  position: 'fixed', // Cambiado a 'fixed' para que permanezca en la parte superior
  width: '100%',
  zIndex: theme.zIndex.appBar,
}));

const GradientTypography = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(to right, #9333ea, #ec4899)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 'bold',
}));

const NavButton = styled(Button)(({ theme, active }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: '8px 16px',
  color: active ? '#fff' : theme.palette.text.primary,
  background: active 
    ? 'linear-gradient(to right, #9333ea, #ec4899)'
    : 'transparent',
  '&:hover': {
    background: active 
      ? 'linear-gradient(to right, #9333ea, #ec4899)'
      : 'rgba(147, 51, 234, 0.1)',
    opacity: active ? 0.9 : 1,
  },
  transition: 'all 0.3s ease-in-out',
}));

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 0); // Cambia isScrolled si hay scroll
    };

    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const NavLink = ({ to, children, icon: Icon }) => {
    const isActive = location.pathname === to;

    return (
      <Link to={to} style={{ textDecoration: 'none' }}>
        <NavButton
          active={isActive ? 1 : 0}
          startIcon={<Icon />}
        >
          {children.toLowerCase()}  {/* Convertir a minúsculas */}
        </NavButton>
      </Link>
    );
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  return (
    <StyledAppBar position="fixed" scrolled={isScrolled ? 1 : 0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo Section */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src="https://i.ibb.co/mqxh7jg/Sin-t-tulo-7500-x-1563-px.png"
              alt="QoriYachay"
              sx={{ width: 80, height: 40, mr: 1 }}
            />
            <GradientTypography variant="h6">
              QoriYachay
            </GradientTypography>
          </Link>

          <Box flexGrow={1} />

          {/* Desktop Navigation */}
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: { xs: 'none', md: 'flex' } }}
            alignItems="center"
          >
            <NavLink to="/" icon={Home}>Inicio</NavLink>
            <NavLink to="/form" icon={ImportContactsIcon}>Obtén tu Ruta</NavLink>
            <NavLink to="/results" icon={BarChart}>Resultados</NavLink>
            <NavLink to="/team" icon={Person}>Conoce al equipo</NavLink>
          </Stack>

          {/* Mobile Menu Button */}
          <IconButton
            size="large"
            edge="end"
            onClick={handleMobileMenuOpen}
            sx={{ display: { xs: 'flex', md: 'none' }, ml: 2 }}
          >
            {mobileMenuAnchor ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>

        {/* Mobile Menu */}
        <Menu
          anchorEl={mobileMenuAnchor}
          open={Boolean(mobileMenuAnchor)}
          onClose={handleMobileMenuClose}
          TransitionComponent={Fade}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          PaperProps={{
            sx: {
              mt: 1.5,
              width: '100%',
              maxWidth: { xs: '100%', sm: 300 },
              background: 'white',
              borderRadius: 2,
            }
          }}
        >
          <MenuItem onClick={handleMobileMenuClose}>
            <NavLink to="/" icon={Home}>Inicio</NavLink>
          </MenuItem>
          <MenuItem onClick={handleMobileMenuClose}>
            <NavLink to="/results" icon={BarChart}>Resultados</NavLink>
          </MenuItem>
          <MenuItem onClick={handleMobileMenuClose}>
            <NavLink to="/team" icon={Person}>Conoce al equipo</NavLink>
          </MenuItem>
          <MenuItem 
            onClick={handleMobileMenuClose}
            sx={{ 
              mt: 1,
              '& .MuiButton-root': {
                width: '100%',
              }
            }}
          >
          </MenuItem>
        </Menu>
      </Container>
    </StyledAppBar>
  );
};

export default Navbar;

