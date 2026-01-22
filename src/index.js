import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import EserciziMain from './Esercizi/EserciziMain';
import ContionalRendering from './ConditionalRendering';
import AccedereListe from "./AccedereListe";
import SetTea from "./ComponentePuro"
import Eventi from "./Eventi"
import Stato from "./Stato"
import RenderCommit from "./RendereCommit"
import Hook from './Hook'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>hook</h1>
    <Hook/>
    <hr></hr>
    <h1>RenderCOmmit</h1>
    <RenderCommit/>
    <hr></hr>
    <h1>stato</h1>
    <Stato></Stato>
    <hr></hr>
    <ContionalRendering />
    <hr></hr>
    <h1>Eventi</h1>
    <Eventi></Eventi>
    <hr></hr>
    <h1>Accedere alle liste</h1>
    <setTea/>
    <hr></hr>
    <h1>funzioni pure</h1>
    <SetTea/>
    <hr></hr>
    <h1>Esercizi</h1>
    
    <EserciziMain/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
