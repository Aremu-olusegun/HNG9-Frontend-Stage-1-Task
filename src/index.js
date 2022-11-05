import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, Routes} from 'react-router-dom'
import App from './App';
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index path="/" element={<App/>}/>
      <Route path='/contact' element={<Contact}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

