import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { Homepage } from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/ShopPage.component';
import Header from './components/Header/Header.component';
import { LoginRoutePage } from './pages/LoginRoutePage/LoginRoutePage.component';
import CheckoutPage from './pages/checkout/CheckoutPage.component';
// import {RegisterForm} from './components/RegisterForm/RegisterForm.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { CurrentUserContext } from './contexts/currentUser-context/currentUser.context';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        //if a user exists or not, pass to createUser, will return if exist and create if not
        const userRef = await createUserProfileDocument(userAuth);
        //set out state using the properties on userRef
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        //if userRef === null meaning user signed out, setstate of current user to null
        setCurrentUser(userAuth);
      }
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, [setCurrentUser]);
  console.log(currentUser);

  return (
    <div>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
      </CurrentUserContext.Provider>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route
          exact
          path='/login'
          render={() =>
            currentUser ? <Redirect to='/' /> : <LoginRoutePage />
          }
        />
        <Route exact path='/checkout' component={CheckoutPage} />
      </Switch>
    </div>
  );
};

export default App;
