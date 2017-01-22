import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import items from './reducers/itemReducers.js';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const store = createStore(combineReducers({ items }));
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-root')
);
