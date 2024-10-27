import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import ResultsPage from './components/ResultsPage';
import Layout from './components/Layout';
import TeamSection from './components/TeamSection';
import LandingPage from './components/LandingPage';
import FeedbackForm from './components/FeedbackForm';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/form" element={<RegisterForm />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/team" element={<TeamSection />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;

