import styles from './UserCard.module.scss';

const UserCardEmpty = () => {
  return (
    <main className={`${styles['user-card']} ${styles['user-card--empty']}`}>
      <p
        className={`${styles['user-card__error']} ${styles['user-card__error--title']}`}
      >
        No results found!
      </p>
      <p
        className={`${styles['user-card__error']} ${styles['user-card__error--subtitle']}`}
      >
        We couldn’t find any GitHub users matching your search.
      </p>
    </main>
  );
};

export default UserCardEmpty;
