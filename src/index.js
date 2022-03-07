import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  Link,
  Routes,
  Route,
  useRoutes,
  useParams,
  useNavigate
} from "react-router-dom"; 
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Customer from './Customer';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="customer" element={<Customer />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
