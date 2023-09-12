import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home'


import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route>
        <Route path="/" element={<Home/>} />
      </Route>
      
    </BrowserRouter>
  </React.StrictMode>
);



