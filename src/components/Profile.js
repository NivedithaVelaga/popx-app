import React from 'react';
import './Profile.css';

const Profile = ({ onNavigate }) => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Account Settings</h1>
      </div>
      
      <div className="profile-info">
        <div className="profile-avatar">
          <div className="avatar-placeholder">MA</div>
        </div>
        <div className="profile-details">
          <h2>Velaga Niveditha</h2>
          <p>nivedithavelaga4115@gmail.com</p>
        </div>
      </div>
      
      <div className="profile-content">
        <h3>About Me</h3>
        <p>
          I’m a passionate web developer who loves creating modern and responsive websites. I enjoy learning new tools, solving problems, and building user-friendly designs. I’m eager to grow my skills, work on real projects, and make a positive impact through my work.
        </p>
      </div>
    </div>
  );
};

export default Profile;