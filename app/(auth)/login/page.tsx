"use client";

import React, { useState } from 'react';
import LoginNavbar from '@/ui/login/login-nav';
import '@/app/(auth)/login/login.scss';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    setError('Incorrect email or password. Try again.');
  };

  return (
    <div className="login-page">
      <LoginNavbar />
      <div className="login-container">
        <div className="login-form-wrapper">
          <h1>Hello Again</h1>
          <p>Welcome back! Please fill in your details.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="login-button">Login</button>
            <div className="recover-password">
              <a href="#">Recover Password</a>
            </div>
          </form>
          <p className="signup-prompt">
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;