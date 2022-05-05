import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, Routes } from 'react-router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes>
     <Route element={<App/>} path="/Weather-app" /> 
    </Routes>
  </React.StrictMode>
);
