//import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.min';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import App from './App'; 
import reportWebVitals from './reportWebVitals';
// import { data, listuser } from './data';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Product from './Product';
import NoPage from './NoPage';
import Contact from './Contact';
import SignUp from './SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />  
        <Route path="ve-chung-toi" element={<About />} />
        <Route path="san-pham" element={<Product />} />
        <Route path="lien-he" element={<Contact />} />
        <Route path="dang-ky" element={<SignUp/>} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
