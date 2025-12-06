import { useState } from 'react';
import { fetchGithubUser } from '../../services/github';
import styles from './SearchBar.module.scss';
import searchIcon from '../../assets/icons/icon-search.svg';

const SearchBar = ({ onResults }) => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);

  const handleSearch = async () => {
    if (!query) return;
    try {
      const data = await fetchGithubUser(query);
      if (data) {
        onResults(data);
        setError(false);
      } else {
        onResults(null);
        setError(true);
      }
    } catch {
      onResults(null);
      setError(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles['search-bar']}>
      <div className={styles['search-bar__input-wrapper']}>
        <img
          src={searchIcon}
          alt="search"
          className={styles['search-bar__icon']}
        />
        <input
          type="text"
          className={styles['search-bar__input']}
          placeholder="Search GitHub username..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {error && (
          <span className={styles['search-bar__error']}>No results</span>
        )}

        <button className={styles['search-bar__button']} onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
