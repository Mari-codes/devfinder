import styles from './Header.module.scss';
import ThemeToggle from '../ThemeToggle';
import DevFinderLogo from '../DevFinderLogo';

const Header = ({ theme, onToggle }) => {
  return (
    <header className={styles.header}>
      <DevFinderLogo />
      <ThemeToggle theme={theme} onToggle={onToggle} />
    </header>
  );
};

export default Header;
