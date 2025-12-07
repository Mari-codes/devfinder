import { useState, useEffect } from 'react';
import styles from './App.module.scss';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import { fetchGithubUser } from './services/github';
import GithubIcon from './assets/icons/icon-github.svg?react';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const defaultUser = 'octocat';

  useEffect(() => {
    const loadDefaultUser = async () => {
      setLoading(true);
      try {
        const data = await fetchGithubUser(defaultUser);
        setUserData(data);
      } catch (err) {
        console.error('Failed to load default user', err);
      } finally {
        setTimeout(() => setLoading(false), 1600);
      }
    };

    loadDefaultUser();
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={styles.app}>
      <div
        className={`${styles.app__loading} ${
          loading ? styles['app__loading--show'] : styles['app__loading--hide']
        }`}
      >
        <GithubIcon className={styles['app__loading-icon']} />
        <p className={styles['app__loading-text']}>Loading...</p>
      </div>

      <div
        className={`${styles.app__content} ${
          loading ? styles['app__content--hide'] : styles['app__content--show']
        }`}
      >
        <Header theme={theme} onToggle={toggleTheme} />
        <SearchBar onResults={setUserData} />
        <UserCard user={userData} loading={loading} />
      </div>
    </div>
  );
}

export default App;
