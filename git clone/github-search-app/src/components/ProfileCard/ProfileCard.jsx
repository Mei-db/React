import React from 'react';
import { Users, UserPlus, BookOpen, ExternalLink, MapPin, Building2 } from 'lucide-react';
import StatItem from '../StatItem/StatItem';
import './ProfileCard.css';

const ProfileCard = ({ user }) => {
  if (!user) return null;

  return (
    <div className="profile-card glass">
      <div className="profile-header">
        <div className="avatar-wrapper">
          <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="avatar" />
        </div>
        <div className="profile-info">
          <h2 className="profile-name">{user.name || user.login}</h2>
          <a 
            href={user.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="profile-username"
          >
            @{user.login} <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {user.bio && (
        <p className="profile-bio">{user.bio}</p>
      )}

      <div className="profile-meta">
        {user.location && (
          <div className="meta-item">
            <MapPin size={16} />
            <span>{user.location}</span>
          </div>
        )}
        {user.company && (
          <div className="meta-item">
            <Building2 size={16} />
            <span>{user.company}</span>
          </div>
        )}
      </div>

      <div className="profile-stats">
        <StatItem 
          label="Followers" 
          value={user.followers} 
          icon={Users} 
        />
        <StatItem 
          label="Following" 
          value={user.following} 
          icon={UserPlus} 
        />
        <StatItem 
          label="Repos" 
          value={user.public_repos} 
          icon={BookOpen} 
        />
      </div>
    </div>
  );
};

export default ProfileCard;
