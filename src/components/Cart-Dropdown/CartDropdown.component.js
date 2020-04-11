import React from 'react';
import './CartDropdown.styles.scss';
import { connect } from 'react-redux';
import { CustomButton } from '../Custom-button/CustomButton.component';
import { CartItem } from '../Cart-Item/CartItem.component';
import { selectCartItems } from '../../redux/cart/cartSelectors';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
};

//memoized using createSelector util
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
