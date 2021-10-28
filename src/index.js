// import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { AuthProvider } from './providers/AuthProvider';
import './index.css';
import { App } from './App';
import { ErrorBoundary } from './components/error-boundary';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

ReactDOM.render(
  <BrowserRouter>
    <ErrorBoundary>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root')
);
