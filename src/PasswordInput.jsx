import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const PasswordInput = () => {
  const [type, setType] = useState('password');

  const handleToggle = () => {
    setType(type === 'password' ? 'text' : 'password');
  };

  return (
    <div className="password-container">
      <h1>Password Hide/Show</h1>
      <h4>Password:</h4>
      <input
        type={type}
        id="password"
        name="password"
        className="password-input"
        placeholder="Enter your password"
      />
      <i onClick={handleToggle}>
        <FontAwesomeIcon
          className="icon"
          icon={type === 'password' ? faEye : faEyeSlash}
        />
      </i>
    </div>
  );
};

export default PasswordInput;
