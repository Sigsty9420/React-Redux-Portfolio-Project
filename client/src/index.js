import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './components/App';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainCity from './containers/MainCity'
import { createBrowserHistory } from 'history';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store} >
    <Router history={history}>
      <div>
        <App />
        <Route path="/" />
        <Route path="/cities/:id" render={MainCity} />
      </div>
    </Router>
  </Provider>, document.getElementById('root')
);
