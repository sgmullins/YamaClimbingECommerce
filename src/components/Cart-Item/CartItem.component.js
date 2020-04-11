import React from 'react';
import './CartItem.styles.scss';

export const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className='cart-item'>
    <img src={imageUrl} alt='cart item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} X ${price}
      </span>
    </div>
  </div>
);
