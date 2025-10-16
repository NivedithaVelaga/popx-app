import React, { useState } from 'react';
import './Login.css';

const Login = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNavigate('profile');
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Signin to your PopX account</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </div>
      
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;