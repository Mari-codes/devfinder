import styles from './UserCard.module.scss';
import LocationIcon from '../../assets/icons/icon-location.svg?react';
import TwitterIcon from '../../assets/icons/icon-twitter.svg?react';
import CompanyIcon from '../../assets/icons/icon-company.svg?react';
import WebsiteIcon from '../../assets/icons/icon-website.svg?react';

const UserCard = ({ user }) => {
  if (!user) {
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
  }

  return (
    <main className={styles['user-card']}>
      <img
        src={user.avatar_url}
        alt={user.login}
        className={styles['user-card__avatar']}
      />

      <section className={styles['user-card__section']}>
        <div className={styles['user-card__top']}>
          <div className={styles['user-card__wrapper']}>
            <h2 className={styles['user-card__name']}>{user.name}</h2>
            <a
              href={`https://github.com/${user.login}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles['user-card__login']}
            >
              @{user.login}
            </a>
            <p className={styles['user-card__bio']}>
              {user.bio || 'This profile has no bio'}
            </p>
          </div>

          <p className={styles['user-card__joined']}>
            Joined: {new Date(user.created_at).toLocaleDateString()}
          </p>
        </div>

        <div className={styles['user-card__stats']}>
          <span className={styles['user-card__stat-label']}>Repos</span>
          <span className={styles['user-card__stat-label']}>Followers</span>
          <span className={styles['user-card__stat-label']}>Following</span>

          <span className={styles['user-card__stat-value']}>
            {user.public_repos}
          </span>
          <span className={styles['user-card__stat-value']}>
            {user.followers}
          </span>
          <span className={styles['user-card__stat-value']}>
            {user.following}
          </span>
        </div>
        <div className={styles['user-card__info']}>
          <div className={styles['user-card__info-item']}>
            <LocationIcon className={styles['user-card__icon']} />
            <span>{user.location || 'Not Available'}</span>
          </div>

          <div className={styles['user-card__info-item']}>
            <TwitterIcon className={styles['user-card__icon']} />
            {user.twitter_username ? (
              <a
                href={`https://twitter.com/${user.twitter_username}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles['user-card__link']}
              >
                @{user.twitter_username}
              </a>
            ) : (
              <span>Not Available</span>
            )}
          </div>

          <div className={styles['user-card__info-item']}>
            <WebsiteIcon className={styles['user-card__icon']} />
            {user.blog ? (
              <a
                href={
                  user.blog.startsWith('http')
                    ? user.blog
                    : `https://${user.blog}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className={styles['user-card__link']}
              >
                {user.blog}
              </a>
            ) : (
              <span>Not Available</span>
            )}
          </div>

          <div className={styles['user-card__info-item']}>
            <CompanyIcon className={styles['user-card__icon']} />
            {user.company ? (
              <a
                href={`https://github.com/${user.company.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles['user-card__link']}
              >
                {user.company}
              </a>
            ) : (
              <span>Not Available</span>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default UserCard;
