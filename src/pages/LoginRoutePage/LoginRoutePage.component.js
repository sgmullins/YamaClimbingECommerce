import React, { useState } from 'react';
import { Login } from '../../components/LoginForm/Login.component';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm.component';
export const LoginRoutePage = () => {
  const [showRegister, setShowRegister] = useState(false);

  console.log('show register from login route page', showRegister);

  return (
    <div>
      {/* <RegisterForm setShowRegister={setShowRegister} /> */}
      {showRegister ? (
        <RegisterForm setShowRegister={setShowRegister} />
      ) : (
        <Login setShowRegister={setShowRegister} />
      )}
    </div>
  );
};
