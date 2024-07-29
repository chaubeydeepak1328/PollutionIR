import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import WeatherContext from './WeatherContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <WeatherContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WeatherContext>
  </>
);


