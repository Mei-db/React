import React from 'react';
import './StatItem.css';

const StatItem = ({ label, value, icon: Icon }) => {
  return (
    <div className="stat-item glass">
      <div className="stat-icon-wrapper">
        {Icon && <Icon size={18} className="stat-icon" />}
      </div>
      <div className="stat-details">
        <span className="stat-label">{label}</span>
        <span className="stat-value">{value !== undefined ? value : '-'}</span>
      </div>
    </div>
  );
};

export default StatItem;
