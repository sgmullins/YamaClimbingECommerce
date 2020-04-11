import React from 'react';
import './CustomButton.styles.scss';
export const CustomButton = ({ children, inverted, ...props }) => (
  <button className={`${inverted ? 'inverted' : ''} custom-button`} {...props}>
    {children}
  </button>
);
