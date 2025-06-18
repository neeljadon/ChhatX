import React, { useState } from 'react';
import axios from 'axios';
import { FaWhatsapp } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

function LoginForm({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password,
      });
      localStorage.setItem('user', JSON.stringify(response.data.user));
      onLoginSuccess(response.data.user.username);
      navigate('/');
    } catch (error) {
      const msg = error.response?.data?.message || 'Login Failed';
      setErrorMessage(msg);
      console.error('Login failed:', error.response?.data || error.message);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '800px' }}>
        <div className="text-center mb-3 text-success">
          <FaWhatsapp size={50} />
        </div>
        <h4 className="text-center mb-4">Login to ChatX</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Login
          </button>
          <div className='mb-3'>
            <span>New User? {''}
              <Link to="/SignUpForm">Sign up</Link>
            </span>
          </div>
          {errorMessage && (
            <div className="alert alert-danger text-center" role="alert">
              {errorMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
