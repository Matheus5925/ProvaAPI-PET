import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Consultar from './pages/consultar'
import Cadastrar from './pages/cadastrar'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Cadastrar/>}></Route>
        <Route path='/consultar' element={<Consultar/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


