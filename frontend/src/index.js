import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoadContextProvider from './context/LoadContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <LoadContextProvider>
    <App />
    </LoadContextProvider>
  
);


