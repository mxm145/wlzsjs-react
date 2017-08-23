import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import 'normalize.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import gameReducer from './reducers/GameReducer'

const store = createStore(gameReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
