import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './pages/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import MapQuestion from './pages/MapQuestion/MapQuestion';
import QuestionsManager from './pages/QuestionsManager/QuestionsManager';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/quizAD' element={<MapQuestion/>}/>
        <Route path="/gerenciar" element={<QuestionsManager/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

