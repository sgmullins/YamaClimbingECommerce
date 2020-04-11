import React, { useContext } from 'react';
import './Header.styles.scss';
import { ReactComponent as UserLogin } from '../../assets/Profile.svg';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/White.svg';
import { UserIcon } from '../../contexts/Icon-context/UserIcon';
import { auth } from '../../firebase/firebase.utils';
import { CurrentUserContext } from '../../contexts/currentUser-context/currentUser.context';
import CartIcon from '../CartIcon/CartIcon.component';
import CartDropdown from '../Cart-Dropdown/CartDropdown.component';
import { selectCartHidden } from '../../redux/cart/cartSelectors';

const Header = ({ hidden }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    //TODO:Replace temp svg with yama svg
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>
          shop
        </Link>
        <Link to='/contact' className='option'>
          contact
        </Link>
        <Link to='/blog' className='option'>
          blog
        </Link>
        {currentUser ? (
          <>
            <div className='option' onClick={() => auth.signOut()}>
              SignOut
            </div>
            <Link to='#' className='option'>
              <div className='login-group'>
                <span className='option-span'>
                  Welcome, {currentUser.displayName}
                </span>

                <UserLogin className='login-user-icon' />
              </div>
            </Link>
          </>
        ) : (
          <Link to='/login' className='option'>
            <div className='login-group'>
              <span className='option-span'>MyAccount</span>
              <UserLogin className='login-user-icon' />
            </div>
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  hidden: selectCartHidden(state),
});

export default connect(mapStateToProps)(Header);
