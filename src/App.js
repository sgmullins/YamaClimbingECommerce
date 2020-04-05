import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Homepage } from './pages/homepage/Homepage.component';
import { ShopPage } from './pages/shop/ShopPage.component';
import { Header } from './components/Header/Header.component';
import { LoginRoutePage } from './pages/LoginRoutePage/LoginRoutePage.component';
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/login' component={LoginRoutePage} />
      </Switch>
    </div>
  );
}

export default App;
