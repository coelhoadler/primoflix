import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route component={() => (<div>Página não encontrada!</div>)}  />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
