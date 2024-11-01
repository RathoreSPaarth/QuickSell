import React, { useState } from 'react';
import { loginUser, registerUser } from '../services/authService';

const Login = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);  // Toggle between login and registration
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');  // For registration

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const token = await loginUser(email, password);
      localStorage.setItem('token', token);  // Store the JWT token
      onLogin(true);  // Proceed to the app
    } catch (error) {
      alert('Login failed');
    }
  };

  // Handle registration form submission
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const token = await registerUser(email, password, confirmPassword);
      localStorage.setItem('token', token);  // Store the JWT token
      onLogin(true);  // Proceed to the app
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <div className="login">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <div className="toggle-buttons">
        <button onClick={() => setIsLogin(true)} style={{ background: isLogin ? '#007BFF' : '#ccc' }}>Login</button>
        <button onClick={() => setIsLogin(false)} style={{ background: !isLogin ? '#007BFF' : '#ccc' }}>Register</button>
      </div>
      
      <form onSubmit={isLogin ? handleLogin : handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        )}
        
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
    </div>
  );
};

export default Login;
