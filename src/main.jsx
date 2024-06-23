import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/Css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext from './UserContext';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <UserContext>
    <App />
  </UserContext>
  </Provider>
);
