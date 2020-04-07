import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

import App from './components/App';
// import { ServerDataProvider } from './state/serverDataContext';
import { Provider } from 'react-redux';

import './styles/index.scss';
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from "./store/reducers";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const serverData = window.__SERVER_DATA__;

export const main = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
      document.getElementById('root')
    );
  });
};
