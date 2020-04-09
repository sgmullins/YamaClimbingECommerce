import React, { useContext } from 'react';
import './Header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/original.svg';
import { UserIcon } from '../../contexts/Icon-context/UserIcon';
import { auth } from '../../firebase/firebase.utils';
import { CurrentUserContext } from '../../contexts/currentUser-context/currentUser.context';

const Header = () => {
  const currentUser = useContext(CurrentUserContext);

  return (
    //TODO:Replace temp svg with yama svg
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>
          Shop
        </Link>
        <Link to='/about' className='option'>
          About
        </Link>
        {currentUser ? (
          <>
            <div className='option' onClick={() => auth.signOut()}>
              SignOut
            </div>
            <Link to='#' className='option'>
              <div className='login-group'>
                <span>Welcome, {currentUser.displayName}</span>

                <UserIcon />
              </div>
            </Link>
          </>
        ) : (
          <Link to='/login' className='option'>
            <div className='login-group'>
              <span>MyAccount</span>
              <UserIcon />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
