import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
import Global from './Styles/global';
import theme from './Styles/theme';

import { Routes } from './Routes';

import { AuthProvider } from './hooks/auth';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global/>
        <AuthProvider>
          <Routes/>
        </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
