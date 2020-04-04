import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Homepage } from './pages/homepage/Homepage.component';

const ShopPage = () => (
  <div>
    <h1>Shop PAge</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
