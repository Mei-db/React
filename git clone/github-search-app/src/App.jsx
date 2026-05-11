import React, { useState } from 'react';
import { Search } from 'lucide-react';
import SearchBar from './components/SearchBar/SearchBar';
import ProfileCard from './components/ProfileCard/ProfileCard';
import Error from './components/Error/Error';
import { fetchGitHubUser } from './services/githubApi';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setIsLoading(true);
    setError(null);
    setUser(null);

    try {
      const data = await fetchGitHubUser(username);
      setUser(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <Search className="app-logo" size={40} />
        <h1 className="app-title">GitHub Explorer</h1>
        <p className="app-subtitle">Discover developers worldwide</p>
      </header>

      <main className="app-main">
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        
        <div className="content-area">
          {error && <Error message={error} />}
          {user && !isLoading && !error && <ProfileCard user={user} />}
        </div>
      </main>
    </div>
  );
}

export default App;
