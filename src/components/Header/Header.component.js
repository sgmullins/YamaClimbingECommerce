import React from 'react';
import './Header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/original.svg';
// import { FaUserCircle } from 'react-icons/fa';
import { UserIcon } from '../../contexts/Icon-context/UserIcon';
export const Header = () => {
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
        <Link to='/login' className='option'>
          <div className='login-group'>
            <span>MyAccount</span>
            <UserIcon />
          </div>
        </Link>
      </div>
    </div>
  );
};
