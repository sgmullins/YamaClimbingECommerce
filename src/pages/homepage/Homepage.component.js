import React from 'react';
import './Homepage.styles.scss';
import { Directory } from '../../components/Directory/Directory.component';
export const Homepage = () => {
  return (
    <div className='homepage'>
      <div className='hero'>
        <img src='./images/hero.jpeg' alt='' />
      </div>
      <Directory />
    </div>
  );
};
