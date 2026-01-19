import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import EserciziMain from './Esercizi/EserciziMain';
import ContionalRendering from './ConditionalRendering';
import AccedereListe from "./AccedereListe";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <ContionalRendering />
    <h1>Accedere alle liste</h1>
    <AccedereListe/>
<h1>-----------------------------------------------------</h1>
    <h1>Esercizi</h1>
    
    <EserciziMain/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
