import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import Page from './components/Page/Page';

import './App.scss';
import Basket from "./components/Basket/Basket";




const App = () => (
  <>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/page" component={Page} />
    </Switch>
    <Basket />
  </>
);

export default App;
