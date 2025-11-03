import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/themeContext';
import { AuthProvider } from './context/authContext';
import { RouteController } from './routes';
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <RouteController />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;