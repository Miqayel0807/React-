import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './reset.css'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css"
import {BrowserRouter} from 'react-router-dom'




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

