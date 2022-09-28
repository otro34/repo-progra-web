import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import ContactUs from './pages/contactus'
import Error404 from './pages/404error';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='contactus' element={<ContactUs />}/>
      <Route path='*' element={<Error404 />}/>
    </Routes> 
  </BrowserRouter>
)

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
