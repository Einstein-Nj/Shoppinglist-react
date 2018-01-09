import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line import/default
import configureStore from './store/configureStore';
import routes from './routes';
import '../node_modules/semantic-ui-css/semantic.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import './styles/styles.css';

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={BrowserRouter} routes={routes} />
    </Provider>,
    document.getElementById('main')
);