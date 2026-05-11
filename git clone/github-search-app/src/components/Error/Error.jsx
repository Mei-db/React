import React from 'react';
import { AlertCircle } from 'lucide-react';
import './Error.css';

const Error = ({ message }) => {
  return (
    <div className="error-container glass">
      <AlertCircle className="error-icon" size={32} />
      <div className="error-content">
        <h3 className="error-title">Oops!</h3>
        <p className="error-message">{message || 'Something went wrong.'}</p>
      </div>
    </div>
  );
};

export default Error;
