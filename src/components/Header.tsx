import React from 'react';
import '../styles/_header.scss'; // Import the CSS file for styling

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <h2>Calorie-Mate</h2>  
      <div className="nav-links">
        <span>Home</span>
        <span>Meals</span>
        <span>Activity</span>
      </div>
      <button className="sign-in-button">Sign in</button>
    </div>
  );
};

export default Header;
