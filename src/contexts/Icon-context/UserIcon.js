import React from 'react';
import { IconContext } from 'react-icons';
import { FaUserCircle } from 'react-icons/fa';

export const UserIcon = () => (
  <IconContext.Provider value={{ className: 'login-user-icon' }}>
    <div>
      <FaUserCircle />
    </div>
  </IconContext.Provider>
);
