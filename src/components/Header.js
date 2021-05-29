import React from 'react';
import styles from './Header.module.css';

export const Header = ({ black }) => {
  return (
    <header className={black ? `${styles.black}` : ''}>
      <div className={styles.headerLogo}>
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/375px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"
          />
        </a>
      </div>
      <div className={styles.headerUser}>
        <a href="/">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt="Usuário Netflix"
          />
        </a>
      </div>
    </header>
  );
};
