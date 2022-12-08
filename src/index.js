import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store/store';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import Profile from './components/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
  <Provider store={store}>
      <App />
      <Profile />
    </Provider>
  </React.StrictMode>
);