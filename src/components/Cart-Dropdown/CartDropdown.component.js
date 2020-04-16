import React from 'react';
import { useHistory } from 'react-router-dom';
import './CartDropdown.styles.scss';
import { connect } from 'react-redux';
import { CustomButton } from '../Custom-button/CustomButton.component';
import { CartItem } from '../Cart-Item/CartItem.component';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { toggleCartHidden } from '../../redux/cart/cartActions';

const CartDropdown = ({ cartItems, dispatch }) => {
  let history = useHistory();
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your Cart is Empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        Go to checkout
      </CustomButton>
    </div>
  );
};

//memoized using createSelector util
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
