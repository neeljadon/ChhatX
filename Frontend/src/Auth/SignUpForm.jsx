import React, { useState } from 'react';
import axios from 'axios';
import { FaWhatsapp } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

function SignUpForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false); 

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    setSuccess(null);

    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        username,
        password,
      });
      console.log(response.data.message);
       setSuccess("Signup successful! Redirecting to login...");
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      setError(error.response?.data?.message || 'Signup failed. Please try again.');
      console.error('Signup failed:', error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '800px' }}>
        <div className="text-center mb-3 text-success">
          <FaWhatsapp size={50} />
        </div>
        <h4 className="text-center mb-4">Sign Up to ChatX</h4>
        {error && <div className="alert alert-danger">{error}</div>} 
        {success && <div className="alert alert-success">{success} </div>}
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
          <button type="submit" className="btn btn-success w-100" disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'} 
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
