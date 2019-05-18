import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import axios from 'axios';

import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import About from './pages/About';
import Benefits from './pages/Benefits';
import Contact from './pages/Contact';
import reducers from './reducers';
import Home from './components/Home';

import authGuard from './components/HOCs/authGuard';

const jwtToken = localStorage.getItem('JWT_TOKEN');
axios.defaults.headers.common['Authorization'] = jwtToken;

ReactDOM.render(
  <Provider store={createStore(reducers, {
    auth: {
      token: jwtToken,
      isAuthenticated: jwtToken ? true : false
    }
  }, applyMiddleware(reduxThunk))}>
    <Router>
      <App>
        <Route exact path="/" component={Home} ></Route>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/dashboard" component={authGuard(Dashboard)} />
        <Route exact path="/about" component={About} ></Route>
        <Route exact path="/benefits" component={Benefits} ></Route>
        <Route exact path="/contact" component={Contact} ></Route>
      </App>
    </Router>
  </Provider>, 
  document.querySelector('#root'));
registerServiceWorker();
