const BASE_URL = 'https://api.github.com/users';

/**
 * Fetches GitHub user profile details.
 * @param {string} username - The GitHub username to search for.
 * @returns {Promise<Object>} - The user data.
 */
export const fetchGitHubUser = async (username) => {
  if (!username) throw new Error('Username is required');

  try {
    const response = await fetch(`${BASE_URL}/${username}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('User not found');
      }
      if (response.status === 403) {
        throw new Error('API rate limit exceeded. Please try again later.');
      }
      throw new Error('Failed to fetch user data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
