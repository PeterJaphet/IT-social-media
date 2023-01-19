import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom'
import App from './App';
import './css/themify-icons.css';
import './css/feather.css'
import './css/style.css'
import './css/emoji.css'

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>  
  <Provider store={store}>
     <BrowserRouter> <App /></BrowserRouter>
    </Provider>
  //</React.StrictMode>
);