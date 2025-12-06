import { useState, useEffect } from 'react';
import styles from './App.module.scss';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import { fetchGithubUser } from './services/github';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const [userData, setUserData] = useState(null);

  const defaultUser = 'octocat';

  useEffect(() => {
    const loadDefaultUser = async () => {
      try {
        const data = await fetchGithubUser(defaultUser);
        setUserData(data);
      } catch (err) {
        console.error('Failed to load default user', err);
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
      <Header theme={theme} onToggle={toggleTheme} />
      <SearchBar onResults={setUserData} />
      <UserCard user={userData} />
    </div>
  );
}

export default App;
