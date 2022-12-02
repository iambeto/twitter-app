import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import './assets/scss/custom.scss';

import Compose from './pages/Compose';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container-iphone'>
      <Router>
        <Switch>
          <Route path='/compose'>
            <Compose/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/logout'>
            <Logout/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
