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

  const interestOptions = [
    'Programación',
    'Inteligencia Artificial',
    'Desarrollo Web',
    'Bases de Datos',
    'Cloud Computing',
    'Ciberseguridad',
];

  const steps = [
    { label: 'Personal Info', icon: <AccountCircle /> },
    { label: 'Academic Profile', icon: <School /> },
    { label: 'Areas of Interest', icon: <Interests /> },
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

  // Rename the form submission function to handleSubmit
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
        // Assume you have an API function imported called submitFormData
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
    <div className="min-h-screen relative overflow-hidden ">
      
      <div className="z-10 container mx-auto px-4 pt-20 pb-8">
        <div className="max-w-4xl mx-auto">
          {/* Title section */}
          <div className="text-center mb-8">
            <Typography 
              variant="h4" 
              className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              Student Registration
            </Typography>
            <Typography variant="body1" className="text-gray-700 mt-2">
              Transform your ideas into exceptional learning experiences
            </Typography>
          </div>

          {/* Stepper */}
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

          {/* Form card */}
          <Fade in={true}>
            <Card className="bg-white/95 backdrop-blur-sm shadow-xl rounded-xl overflow-hidden border border-gray-200">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {step === 1 && (
                    <div className="space-y-4">
                      <TextField
                        fullWidth
                        label="First Name"
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
                        label="Last Name"
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
                        label="Major"
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
                        label="Semester"
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
                        {[...Array(8)].map((_, i) => (
                          <MenuItem key={i + 1} value={String(i + 1)}>
                            Semester {i + 1}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-4">
                      {errors.interests && (
                        <Alert severity="error" className="mb-4 bg-red-50 border border-red-200 text-red-700">
                          {errors.interests}
                        </Alert>
                      )}
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {interestOptions.map((interest) => (
                          <Tooltip key={interest} title={formData.interests.includes(interest) ? "Unselect" : "Select"}>
                            <Button
                              variant={formData.interests.includes(interest) ? 'contained' : 'outlined'}
                              color="primary"
                              onClick={() => toggleInterest(interest)}
                              className={`transition-all duration-300 ${
                                formData.interests.includes(interest)
                                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                                  : 'border-2 border-gray-300 hover:border-purple-500'
                              }`}
                            >
                              {interest}
                            </Button>
                          </Tooltip>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between pt-4">
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleBack}
                      disabled={step === 1}
                      startIcon={<NavigateBefore />}
                      className="bg-gray-500 hover:bg-gray-600"
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={step === 3 ? handleSubmit : handleNext}
                      endIcon={step === 3 ? <CheckCircle /> : <NavigateNext />}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    >
                      {step === 3 ? 'Submit' : 'Next'}
                    </Button>
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