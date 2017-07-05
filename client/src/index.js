import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './components/App';
import './index.css';
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom';
import MainCity from './containers/MainCity'
import About from './components/About'
//import { createBrowserHistory } from 'history';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

//const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store} >
    <Router history={HashRouter}>
      <div>
          <Route exact component={App} />
          <Route path="/cities/:cityId" component={MainCity} />
          <Route path="/about" component={About} />
      </div>
    </Router>
  </Provider>, document.getElementById('root')
);
