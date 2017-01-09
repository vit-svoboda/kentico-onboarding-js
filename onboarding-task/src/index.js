import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import reducer from './reducers/combinedReducer';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const logger = createLogger();
const storeEnhancers = applyMiddleware(logger);
const store = createStore(reducer, storeEnhancers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-root')
);
