import styles from './Header.module.scss';
import ThemeToggle from '../ThemeToggle';
import DevFinderLogo from '../../assets/images/devfinder.svg?react';

const Header = ({ theme, onToggle }) => {
  return (
    <header className={styles.header}>
      <DevFinderLogo className={styles.header__logo} />
      <ThemeToggle theme={theme} onToggle={onToggle} />
    </header>
  );
};

export default Header;
