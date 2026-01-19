import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import JSON from './Json';
import FirstComp from '../src/Esercizi/FirstComp/FirstComp';
import ImpExEs from '../src/Esercizi/ImpExp/ImpExpEs';
import reportWebVitals from './reportWebVitals';
import Avatar, { TodoList } from './Avatar';
import InterpolationEs from './Esercizi/InterpolationEs';
import Avatar2 from './Proprieta';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FirstComp /> */}
    {/* <h1>Esercizio ImpExp</h1>
    <ImpExEs />
    <h1>avatar</h1>
    <Avatar />
    <h1>Json</h1>
    <JSON/> */}
    {/* <InterpolationEs /> */}
    <Avatar2/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
