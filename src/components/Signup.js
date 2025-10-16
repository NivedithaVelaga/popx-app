import React, { useState } from 'react';
import './Signup.css';

const Signup = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: ''
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
    <div className="signup-container">
      <div className="signup-header">
        <h1>Create your PopX account</h1>
      </div>
      
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label>Full Name*</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Phone number*</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Email address*</label>
          <input
            type="email"
            name="email"
            placeholder="Ex: xyz@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Password *</label>
          <input
            type="password"
            name="password"
            placeholder="Ex: pswd@123"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Company name</label>
          <input
            type="text"
            name="company"
            placeholder="Ex: EduCase"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label>Are you an Agency?*</label>
          <div className="radio-group">
            <div className="option-with-btn">
              <button
                type="button"
                className={"mini-selector " + (formData.agency === 'yes' ? 'active' : '')}
                onClick={() => setFormData({ ...formData, agency: 'yes' })}
                aria-label="Select Yes"
              ></button>
              <label className="radio-option">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={formData.agency === 'yes'}
                  onChange={handleChange}
                  required
                />
                <span className="radio-checkmark"></span>
                Yes
              </label>
            </div>

            <div className="option-with-btn">
              <button
                type="button"
                className={"mini-selector " + (formData.agency === 'no' ? 'active' : '')}
                onClick={() => setFormData({ ...formData, agency: 'no' })}
                aria-label="Select No"
              ></button>
              <label className="radio-option">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={formData.agency === 'no'}
                  onChange={handleChange}
                  required
                />
                <span className="radio-checkmark"></span>
                No
              </label>
            </div>
          </div>
        </div>
        
        <button type="submit" className="btn btn-primary">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;