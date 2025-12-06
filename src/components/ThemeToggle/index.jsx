import styles from './ThemeToggle.module.scss';
import iconMoon from '../../assets/icons/icon-moon.svg';
import iconSun from '../../assets/icons/icon-sun.svg';

const ThemeToggle = ({ theme, onToggle }) => {
  const isLight = theme === 'light';

  return (
    <button className={styles['theme-toggle']} onClick={onToggle}>
      <span className={styles['theme-toggle__label']}>
        {isLight ? 'DARK' : 'LIGHT'}
      </span>
      <img src={isLight ? iconMoon : iconSun} alt="" />
    </button>
  );
};

export default ThemeToggle;
