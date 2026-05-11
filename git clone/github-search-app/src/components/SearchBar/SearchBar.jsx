import React, { useState } from 'react';
import { Search } from 'lucide-react';
import './SearchBar.css';

const SearchBar = ({ onSearch, isLoading }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username.trim());
    }
  };

  return (
    <form className="search-bar glass" onSubmit={handleSubmit}>
      <Search className="search-icon" size={20} />
      <input
        type="text"
        className="search-input"
        placeholder="Search GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        disabled={isLoading}
      />
      <button
        type="submit"
        className="search-button"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
