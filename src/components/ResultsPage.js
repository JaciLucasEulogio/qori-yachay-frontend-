import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Divider,
  Chip,
  CircularProgress,
  Button,
  Link
} from '@mui/material';
import {
  School as SchoolIcon,
  Star as StarIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  School as GraduationIcon,
  Interests as InterestsIcon,
  Timer as TimerIcon,
  ArrowForward as ArrowIcon
} from '@mui/icons-material';

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [learningPath, setLearningPath] = useState(() => {
    const savedPath = localStorage.getItem('learningPath');
    return savedPath ? JSON.parse(savedPath) : location.state?.result;
  });
  const { data, recommendation } = learningPath || {};
  const mainPath = recommendation?.mainRecommendation?.path;
  const alternatives = recommendation?.alternatives || [];
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!learningPath) {
      setError("No se encontraron resultados. Por favor, ingresa los datos en el apartado de formulario antes.");
    } else if (!data || !recommendation) {
      setError("Error al obtener los datos. Por favor, intenta nuevamente más tarde.");
    }
  }, [learningPath, data, recommendation]);

  useEffect(() => {
    if (learningPath) {
      //localStorage.setItem('learningPath', JSON.stringify(learningPath));
    }
  }, [learningPath]);

  const GradientCard = ({ children, className = '' }) => (
    <Card 
      className={`bg-white hover:shadow-xl transition-all duration-300 ${className}`}
      sx={{ 
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.3)',
      }}
    >
      {children}
    </Card>
  );

  const GradientTypography = ({ variant, children, className = '' }) => (
    <Typography 
      variant={variant} 
      className={`bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold ${className}`}
    >
      {children}
    </Typography>
  );

  const GradientButton = ({ onClick, children, disabled }) => (
    <Button
      variant="contained"
      onClick={onClick}
      disabled={disabled}
      sx={{
        background: disabled ? '#ccc' : 'linear-gradient(to right, #9333ea, #ec4899)',
        '&:hover': {
          background: disabled ? '#ccc' : 'linear-gradient(to right, #7e22ce, #db2777)',
        },
        textTransform: 'none',
        borderRadius: '8px',
        py: 1.5,
        px: 4,
      }}
    >
      {children}
    </Button>
  );

  const InfoRow = ({ icon: Icon, label, value }) => (
    <Box className="flex items-center gap-2 mb-2">
      <Icon className="text-purple-600" />
      <Typography variant="body1" className="font-medium">
        {label}:&nbsp;
        <span className="text-gray-700">{value}</span>
      </Typography>
    </Box>
  );

  const handleGenerateNewPath = () => {
    localStorage.removeItem('learningPath');
    navigate('/path-form');
  };

  return (
    <Container maxWidth="lg" className="py-8">
      <GradientTypography variant="h3" className="text-center mb-8">
        Tu Ruta de Aprendizaje Personalizada
      </GradientTypography>

      <Box display="flex" justifyContent="center" className="mb-8 mt-8">
        <GradientButton onClick={handleGenerateNewPath} className="mt-4">
          Generar Nueva Ruta
        </GradientButton>
      </Box>

      {error ? (
        <Box className="text-center bg-red-100 border border-red-300 text-red-600 px-4 py-3 rounded-md mb-8">
          <Typography variant="body1">{error}</Typography>
        </Box>
      ) : (
        <>
          {data && (
            <GradientCard className="mb-8">
              <CardContent>
                <GradientTypography variant="h5" className="mb-4">
                  Perfil del Estudiante
                </GradientTypography>
                <Divider className="mb-4" />
                
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <InfoRow 
                      icon={PersonIcon} 
                      label="Nombre"
                      value={`${data.datos_basicos.nombres} ${data.datos_basicos.apellidos}`}
                    />
                    <InfoRow 
                      icon={EmailIcon} 
                      label="Correo"
                      value={data.datos_basicos.correo}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InfoRow 
                      icon={GraduationIcon} 
                      label="Carrera"
                      value={data.perfil_academico.carrera}
                    />
                    <InfoRow 
                      icon={SchoolIcon} 
                      label="Ciclo"
                      value={data.perfil_academico.ciclo}
                    />
                    <InfoRow 
                      icon={InterestsIcon} 
                      label="Intereses"
                      value={data.perfil_academico.intereses.join(', ')}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </GradientCard>
          )}

          {mainPath && (
            <GradientCard className="mb-8">
              <CardContent>
                <Box className="flex items-center justify-between mb-4">
                  <GradientTypography variant="h5">
                    Ruta Principal Recomendada
                  </GradientTypography>
                  <Chip
                    label={`${(recommendation.mainRecommendation.metrics.similarity * 100).toFixed(0)}% Match`}
                    color="success"
                    icon={<StarIcon />}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                  />
                </Box>
                
                <Typography variant="h6" className="font-bold text-purple-800 mb-2">
                  {mainPath.nombre_ruta}
                </Typography>
                
                <Typography className="text-gray-600 mb-4">
                  {mainPath.descripcion}
                </Typography>

                <Box className="flex items-center gap-4 mb-6">
                  <CircularProgress
                    variant="determinate"
                    value={data.ruta_aprendizaje.progreso}
                    sx={{
                      color: '#9333ea',
                      '& .MuiCircularProgress-circle': {
                        strokeLinecap: 'round',
                      },
                    }}
                    size={60}
                  />
                  <Box>
                    <Typography variant="h6" className="font-bold text-purple-800">
                      {data.ruta_aprendizaje.progreso}% Completado
                    </Typography>
                    <Typography className="text-gray-600">
                      de tu ruta de aprendizaje
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="h6" className="font-bold text-purple-800 mb-4">
                  Módulos del Programa
                </Typography>

                <Grid container spacing={3}>
                  {mainPath.modulos.map((modulo, index) => (
                    <Grid item xs={12} key={modulo._id}>
                      <GradientCard>
                        <CardContent>
                          <Box className="flex items-center gap-2 mb-2">
                            <TimerIcon className="text-purple-600" />
                            <Typography variant="body2" className="text-gray-600">
                              {modulo.duracion_estimada}
                            </Typography>
                          </Box>
                          
                          <Typography variant="h6" className="font-bold text-purple-800 mb-2">
                            {modulo.nombre}
                          </Typography>

                          <Grid container spacing={2}>
                            {modulo.contenido.map((contenido) => (
                              <Grid item xs={12} key={contenido._id}>
                                <Box className="border border-gray-200 rounded-lg p-4">
                                  <Typography variant="subtitle1" className="font-medium mb-2">
                                    {contenido.titulo}
                                  </Typography>
                                  <Typography variant="body2" className="text-gray-600 mb-3">
                                    {contenido.descripcion}
                                  </Typography>
                                  <Link
                                    href={contenido.url_recurso}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="no-underline"
                                  >
                                    <Button
                                      variant="outlined"
                                      size="small"
                                      endIcon={<ArrowIcon />}
                                      sx={{
                                        borderColor: '#9333ea',
                                        color: '#9333ea',
                                        '&:hover': {
                                          borderColor: '#7e22ce',
                                          color: '#7e22ce',
                                        },
                                      }}
                                      disabled
                                    >
                                      Ir al Recurso
                                    </Button>
                                  </Link>
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        </CardContent>
                      </GradientCard>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </GradientCard>
          )}

          {alternatives.length > 0 && (
            <GradientCard className="mb-8">
              <CardContent>
                <GradientTypography variant="h5" className="mb-4">
                  Rutas Alternativas
                </GradientTypography>
                <Divider className="mb-4" />
                <Grid container spacing={3}>
                  {alternatives.map((ruta) => (
                    <Grid item xs={12} md={6} key={ruta.path._id}>
                      <GradientCard>
                        <CardContent>
                          <Box className="flex items-center justify-between mb-4">
                            <Typography variant="h6" className="font-bold text-purple-800">
                              {ruta.path.nombre_ruta}
                            </Typography>
                            <Chip
                              label={`${(ruta.metrics.similarity * 100).toFixed(0)}% Match`}
                              color="success"
                              icon={<StarIcon />}
                              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                            />
                          </Box>

                          <Typography className="text-gray-600 mb-4">
                            {ruta.path.descripcion}
                          </Typography>

                          <Link
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="no-underline"
                          >
                            <Button
                              variant="outlined"
                              endIcon={<ArrowIcon />}
                              sx={{
                                borderColor: '#9333ea',
                                color: '#9333ea',
                                '&:hover': {
                                  borderColor: '#7e22ce',
                                  color: '#7e22ce',
                                },
                              }}
                              disabled
                            >
                              Ver Ruta
                            </Button>
                          </Link>
                        </CardContent>
                      </GradientCard>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </GradientCard>
          )}
        </>
      )}
    </Container>
  );
};

export default ResultsPage;
