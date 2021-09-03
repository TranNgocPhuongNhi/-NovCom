import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { BrowserRouter as Router } from "react-router-dom";
import DieuHuongURL from './router/DieuHuongURL';
import Header from './particles/Header';
import Footer from './particles/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <DieuHuongURL />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
