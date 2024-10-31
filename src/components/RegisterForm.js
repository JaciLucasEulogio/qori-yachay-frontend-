import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  TextField,
  Button,
  MenuItem,
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
  Fade,
  Tooltip,
  Alert,
} from '@mui/material';
import {
  AccountCircle,
  School,
  Interests,
  NavigateNext,
  NavigateBefore,
  CheckCircle,
} from '@mui/icons-material';
import { submitFormData } from '../services/api';

const RegisterForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    basicInfo: {
      firstName: '',
      lastName: '',
      email: '',
    },
    academicProfile: {
      major: '',
      semester: '',
    },
    interests: [],
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const majors = [
    'Ingeniería de Software',
    'Ciencias de la Computación',
    'Ingeniería de Sistemas',
    'Ingeniería Industrial',
  ];

  // Mapping majors to their specific interests
  const majorInterests = {
    'Ingeniería de Software': [
      "Desarrollo Web Frontend",
      "Desarrollo Web Backend",
      "Desarrollo Móvil",
      "Inteligencia Artificial",
      "Machine Learning",
      "DevOps y CI/CD",
      "Arquitectura de Software",
      "Base de Datos",
      "Cloud Computing",
      "Testing y QA",
      "UI/UX Design",
      "Microservicios"
    ],
    'Ciencias de la Computación': [
      "Algoritmos Avanzados",
      "Estructuras de Datos",
      "Computación Teórica",
      "Machine Learning",
      "Programación Competitiva",
      "Computación Científica",
      "Computación Paralela",
      "Teoría de Autómatas",
      "Procesamiento de Lenguaje Natural",
      "Computación Gráfica",
      "Optimización de Algoritmos",
      "GPU Computing"
    ],
    'Ingeniería de Sistemas': [
      "Cloud Computing",
      "Ciberseguridad",
      "Redes y Comunicaciones",
      "DevOps",
      "Arquitectura Cloud",
      "Ethical Hacking",
      "Virtualización",
      "Infraestructura como Código",
      "Monitoreo y Observabilidad",
      "Redes Definidas por Software",
      "IoT y Edge Computing",
      "Sistemas Distribuidos"
    ],
    'Ingeniería Industrial': [
      "Analytics Industrial",
      "Automatización Industrial",
      "Supply Chain Management",
      "Lean Manufacturing",
      "Gestión de Operaciones",
      "Optimización de Procesos",
      "Control de Calidad",
      "Planificación de Producción",
      "Logística 4.0",
      "Sistemas SCADA",
      "Robótica Industrial",
      "Mantenimiento Predictivo"  
    ],
  };

  const interestOptions = (formData.academicProfile.major) ? majorInterests[formData.academicProfile.major] : [];

  const steps = [
    { label: 'Información Personal', icon: <AccountCircle /> },
    { label: 'Perfil Académico', icon: <School /> },
    { label: 'Áreas de Interés', icon: <Interests /> },
  ];

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const toggleInterest = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const validateStep = () => {
    const newErrors = {};
    
    switch (step) {
      case 1:
        if (!formData.basicInfo.firstName) newErrors.firstName = 'First name is required';
        if (!formData.basicInfo.lastName) newErrors.lastName = 'Last name is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.basicInfo.email)) {
          newErrors.email = 'Please enter a valid email';
        }
        break;
      case 2:
        if (!formData.academicProfile.major) newErrors.major = 'Please select a major';
        if (!formData.academicProfile.semester) newErrors.semester = 'Please select a semester';
        break;
      case 3:
        if (formData.interests.length === 0) newErrors.interests = 'Please select at least one interest';
        break;
      default:
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep() && step < 3) setStep(prev => prev + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep()) {
      const apiData = {
        nombres: formData.basicInfo.firstName,
        apellidos: formData.basicInfo.lastName,
        correo: formData.basicInfo.email,
        carrera: formData.academicProfile.major,
        ciclo: parseInt(formData.academicProfile.semester, 10),
        intereses: formData.interests,
      };

      try {
        console.log('Submitting form data:', apiData);
        const response = await submitFormData(apiData);
        navigate('/results', { state: { result: response } });
      } catch (error) {
        console.error('Error:', error);
        navigate('/results', { 
          state: { 
            result: { 
              success: false, 
              message: "Error al procesar el formulario." 
            } 
          } 
        });
      }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="z-10 container mx-auto px-4 pt-20 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Typography 
              variant="h4" 
              className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              Registrate y Obtén tu Ruta
            </Typography>
            <Typography variant="body1" className="text-gray-700 mt-2">
              Adecuamos la ruta de aprendizaje basado en tu nivel académico e intereses.
            </Typography>
          </div>

          <Box className="mb-6">
            <Stepper activeStep={step - 1} alternativeLabel>
              {steps.map((stepItem, index) => (
                <Step key={stepItem.label}>
                  <StepLabel
                    StepIconComponent={() => (
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center
                        ${index + 1 <= step 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                          : 'bg-purple-200 text-gray-600'}`}
                      >
                        {stepItem.icon}
                      </div>
                    )}
                  >
                    <span className="text-sm font-medium mt-2 text-gray-700">{stepItem.label}</span>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>

          <Fade in={true}>
            <Card className="bg-white/95 backdrop-blur-sm shadow-xl rounded-xl overflow-hidden border border-gray-200">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {step === 1 && (
                    <div className="space-y-4">
                      <TextField
                        fullWidth
                        label="Nombres"
                        variant="outlined"
                        value={formData.basicInfo.firstName}
                        onChange={(e) => handleInputChange('basicInfo', 'firstName', e.target.value)}
                        error={!!errors.firstName}
                        helperText={errors.firstName}
                        className="bg-white/80 rounded-lg"
                        InputProps={{
                          className: 'text-gray-800',
                        }}
                        InputLabelProps={{
                          className: 'text-gray-700',
                        }}
                      />
                      <TextField
                        fullWidth
                        label="Apellidos"
                        variant="outlined"
                        value={formData.basicInfo.lastName}
                        onChange={(e) => handleInputChange('basicInfo', 'lastName', e.target.value)}
                        error={!!errors.lastName}
                        helperText={errors.lastName}
                        className="bg-white/80 rounded-lg"
                        InputProps={{
                          className: 'text-gray-800',
                        }}
                        InputLabelProps={{
                          className: 'text-gray-700',
                        }}
                      />
                      <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        variant="outlined"
                        value={formData.basicInfo.email}
                        onChange={(e) => handleInputChange('basicInfo', 'email', e.target.value)}
                        error={!!errors.email}
                        helperText={errors.email}
                        className="bg-white/80 rounded-lg"
                        InputProps={{
                          className: 'text-gray-800',
                        }}
                        InputLabelProps={{
                          className: 'text-gray-700',
                        }}
                      />
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-4">
                      <TextField
                        select
                        fullWidth
                        label="Carrera"
                        variant="outlined"
                        value={formData.academicProfile.major}
                        onChange={(e) => handleInputChange('academicProfile', 'major', e.target.value)}
                        error={!!errors.major}
                        helperText={errors.major}
                        className="bg-white/80 rounded-lg"
                        InputProps={{
                          className: 'text-gray-800',
                        }}
                        InputLabelProps={{
                          className: 'text-gray-700',
                        }}
                      >
                        {majors.map((major) => (
                          <MenuItem key={major} value={major}>
                            {major}
                          </MenuItem>
                        ))}
                      </TextField>

                      <TextField
                        select
                        fullWidth
                        label="Ciclo"
                        variant="outlined"
                        value={formData.academicProfile.semester}
                        onChange={(e) => handleInputChange('academicProfile', 'semester', e.target.value)}
                        error={!!errors.semester}
                        helperText={errors.semester}
                        className="bg-white/80 rounded-lg"
                        InputProps={{
                          className: 'text-gray-800',
                        }}
                        InputLabelProps={{
                          className: 'text-gray-700',
                        }}
                      >
                        {Array.from({ length: 12 }, (_, i) => (
                          <MenuItem key={i + 1} value={i + 1}>
                            {i + 1}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-4">
                      <Typography variant="h6" className="text-gray-800">
                        Selecciona tus áreas de interés:
                      </Typography>
                      {interestOptions.length === 0 ? (
                        <Typography variant="body1" className="text-gray-500">
                          No hay áreas de interés disponibles para tu carrera seleccionada.
                        </Typography>
                      ) : (
                        interestOptions.map((interest) => (
                          <Tooltip title={formData.interests.includes(interest) ? 'Deseleccionar' : 'Seleccionar'} key={interest}>
                            <Button
                              variant={formData.interests.includes(interest) ? 'contained' : 'outlined'}
                              color={formData.interests.includes(interest) ? 'primary' : 'default'}
                              onClick={() => toggleInterest(interest)}
                              className="w-full"
                            >
                              {interest}
                            </Button>
                          </Tooltip>
                        ))
                      )}
                      {errors.interests && (
                        <Alert severity="warning">{errors.interests}</Alert>
                      )}
                    </div>
                  )}

                  <div className="flex justify-between mt-6">
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<NavigateBefore />}
                      onClick={handleBack}
                      disabled={step === 1}
                    >
                      Atrás
                    </Button>
                    {step < 3 ? (
                      <Button
                        variant="contained"
                        color="primary"
                        endIcon={<NavigateNext />}
                        onClick={handleNext}
                      >
                        Siguiente
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                      >
                        Registrar
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
