import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

// Styles
import 'materialize-css/dist/css/materialize.min.css';

// Components
import App from './components/App';

// Dev axios helpers
import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

// console.log('Stripe key: ', process.env.REACT_APP_STRIPE_KEY);
// console.log('NODE env: ', process.env.NODE_ENV);