import { createSelector } from '@reduxjs/toolkit';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems,
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accQuantity, cartItem) => accQuantity + cartItem.quantity,
      0,
    ),
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden,
);

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems
      .reduce(
        (accQuantity, cartItem) =>
          accQuantity + cartItem.quantity * cartItem.price,
        0,
      )
      .toFixed(2),
);
