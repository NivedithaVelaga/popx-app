import React from 'react';
import './Welcome.css';

const Welcome = ({ onNavigate, currentPage = 'welcome' }) => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <div className="button-group">
          <button 
            className="btn btn-primary" 
            onClick={() => onNavigate('signup')}
          >
            Create Account
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => onNavigate('login')}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
      {/* pagination removed from this component to avoid duplication; PageNav renders globally */}
    </div>
  );
};

export default Welcome;