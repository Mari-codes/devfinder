import styles from './UserCard.module.scss';
import LocationIcon from '../../assets/icons/icon-location.svg?react';
import TwitterIcon from '../../assets/icons/icon-twitter.svg?react';
import CompanyIcon from '../../assets/icons/icon-company.svg?react';
import WebsiteIcon from '../../assets/icons/icon-website.svg?react';
import UserCardEmpty from './UserCardEmpty';
import ConditionalLink from '../../helpers/ConditionalLink';

const UserCard = ({ user }) => {
  if (!user) return <UserCardEmpty />;

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
          <div>
            <span className={styles['user-card__stat-label']}>Repos</span>
            <span className={styles['user-card__stat-value']}>
              {user.public_repos}
            </span>
          </div>
          <div>
            <span className={styles['user-card__stat-label']}>Followers</span>
            <span className={styles['user-card__stat-value']}>
              {user.followers}
            </span>
          </div>
          <div>
            <span className={styles['user-card__stat-label']}>Following</span>
            <span className={styles['user-card__stat-value']}>
              {user.following}
            </span>
          </div>
        </div>

        <div className={styles['user-card__info']}>
          <div className={styles['user-card__info-item']}>
            <LocationIcon className={styles['user-card__icon']} />
            <span>{user.location || 'Not Available'}</span>
          </div>

          <div className={styles['user-card__info-item']}>
            <TwitterIcon className={styles['user-card__icon']} />
            <ConditionalLink
              condition={user.twitter_username}
              href={`https://twitter.com/${user.twitter_username}`}
              className={styles['user-card__link']}
            >
              @{user.twitter_username}
            </ConditionalLink>
          </div>

          <div className={styles['user-card__info-item']}>
            <WebsiteIcon className={styles['user-card__icon']} />
            <ConditionalLink
              condition={user.blog}
              href={
                user.blog?.startsWith('http')
                  ? user.blog
                  : `https://${user.blog}`
              }
              className={styles['user-card__link']}
            >
              {user.blog}
            </ConditionalLink>
          </div>

          <div className={styles['user-card__info-item']}>
            <CompanyIcon className={styles['user-card__icon']} />
            <ConditionalLink
              condition={user.company}
              href={`https://github.com/${user.company?.replace('@', '')}`}
              className={styles['user-card__link']}
            >
              {user.company}
            </ConditionalLink>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UserCard;
