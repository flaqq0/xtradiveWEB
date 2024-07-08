import React from 'react';
import { LoginForm } from '../components/auth/LoginForm';
import '../components/auth/Login.css'; 

export const LoginPage = () => {
  return (
    <div className="login-page">
      <LoginForm />
    </div>
  );
};
