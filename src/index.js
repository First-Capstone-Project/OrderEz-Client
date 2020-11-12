import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom'
import {CustomerListProvider} from '../src/components/Contexts/CustomerListContext'
import './index.css';

ReactDOM.render(
  <BrowserRouter>
  <CustomerListProvider>
  <App />
  </CustomerListProvider>
  </BrowserRouter>, 
  document.getElementById('root'));