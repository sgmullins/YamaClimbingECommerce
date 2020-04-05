import React from 'react';
import './CustomButton.styles.scss';
export const CustomButton = ({ children, ...props }) => (
  <button className='custom-button' {...props}>
    {children}
  </button>
);
